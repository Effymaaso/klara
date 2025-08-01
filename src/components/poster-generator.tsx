
"use client";

import { useState, useTransition, useEffect, useMemo, useActionState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";
import {
  generatePosterAction,
  generateAltTextAction,
} from "@/app/actions";
import { posterSchema, type ActionState } from "@/lib/types";
import { useToast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import {
  Download,
  Sparkles,
  LoaderCircle,
  Wand,
  ImageIcon,
} from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { cn } from "@/lib/utils";

type PosterFormData = z.infer<typeof posterSchema>;

const initialState: ActionState = {
  error: undefined,
  posters: undefined,
  dimensions: undefined,
};

export function PosterGenerator() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [state, formAction] = useActionState(generatePosterAction, initialState);

  const [altText, setAltText] = useState<string[]>([]);
  const [isAltTextLoading, setAltTextLoading] = useState(false);
  const [isPopoverOpen, setPopoverOpen] = useState(false);

  const form = useForm<PosterFormData>({
    resolver: zodResolver(posterSchema),
    defaultValues: {
      textPrompt: "",
      imagePrompt: "",
      dimensions: "1080x1350 (Portrait)",
      style: "Minimalist",
    },
  });

  useEffect(() => {
    if (state?.error) {
      toast({
        variant: "destructive",
        title: "Generation Failed",
        description: state.error,
      });
    }
  }, [state, toast]);

  const handleGenerateAltText = async () => {
    const textPrompt = form.getValues("textPrompt");
    if (!textPrompt || textPrompt.length < 5) {
      toast({
        variant: "destructive",
        title: "Input too short",
        description: "Please enter a longer text to get suggestions.",
      });
      return;
    }
    setAltTextLoading(true);
    setPopoverOpen(true);
    const result = await generateAltTextAction(textPrompt);
    if (result.error) {
      toast({
        variant: "destructive",
        title: "Failed to get suggestions",
        description: result.error,
      });
    } else {
      setAltText(result.alternatives || []);
    }
    setAltTextLoading(false);
  };

  const handleDownload = (url: string) => {
    fetch(url, {
      mode: 'cors',
    })
      .then((res) => res.blob())
      .then((blob) => {
        const blobUrl = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = blobUrl;
        a.download = `posterific-${Date.now()}.png`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(blobUrl);
        a.remove();
      })
      .catch((e) => {
        console.error("Download failed:", e);
        window.open(url, '_blank');
        toast({
          title: "Download failed to start",
          description: "Your poster is opening in a new tab. You can save it from there.",
        });
      });
  };

  const aspectRatioClass = useMemo(() => {
    if (state.dimensions === "1080x1080 (Square)") return "aspect-square";
    if (state.dimensions === "1920x1080 (Landscape)") return "aspect-video";
    return "aspect-[1080/1350]";
  }, [state.dimensions]);


  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <Card className="sticky top-8">
            <CardHeader>
              <CardTitle>Create Your Poster</CardTitle>
              <CardDescription>
                Fill in the details below and let AI create a stunning poster for
                you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  action={(formData) => {
                    startTransition(() => {
                      formAction(formData);
                    });
                  }}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="textPrompt"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Poster Text</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Textarea
                              placeholder="e.g., Grand Opening! 50% off all items."
                              {...field}
                              rows={4}
                            />
                            <Popover open={isPopoverOpen} onOpenChange={setPopoverOpen}>
                              <PopoverTrigger asChild>
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="icon"
                                  className="absolute bottom-2 right-2 h-7 w-7"
                                  onClick={handleGenerateAltText}
                                  aria-label="Generate text alternatives"
                                >
                                  <Wand className="h-4 w-4" />
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-80">
                                <div className="grid gap-4">
                                  <div className="space-y-2">
                                    <h4 className="font-medium leading-none">Text Suggestions</h4>
                                    <p className="text-sm text-muted-foreground">
                                      Click to use a suggestion.
                                    </p>
                                  </div>
                                  <div className="grid gap-2">
                                    {isAltTextLoading ? (
                                      <div className="flex items-center justify-center p-4">
                                        <LoaderCircle className="animate-spin h-6 w-6" />
                                      </div>
                                    ) : altText.length > 0 ? (
                                      altText.map((alt, index) => (
                                        <Button
                                          key={index}
                                          variant="outline"
                                          className="text-left justify-start h-auto"
                                          onClick={() => {
                                            form.setValue("textPrompt", alt);
                                            setPopoverOpen(false);
                                          }}
                                        >
                                          {alt}
                                        </Button>
                                      ))
                                    ) : (
                                      <p className="text-sm text-muted-foreground text-center py-2">No suggestions found.</p>
                                    )}
                                  </div>
                                </div>
                              </PopoverContent>
                            </Popover>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="imagePrompt"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Image Description</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g., A vibrant abstract painting"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="dimensions"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Dimensions</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select poster dimensions" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1080x1350 (Portrait)">
                              1080x1350 (Portrait)
                            </SelectItem>
                            <SelectItem value="1080x1080 (Square)">
                              1080x1080 (Square)
                            </SelectItem>
                            <SelectItem value="1920x1080 (Landscape)">
                              1920x1080 (Landscape)
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="style"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Style</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="grid grid-cols-2 gap-4"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="Minimalist" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Minimalist
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="Vintage" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Vintage
                              </FormLabel>
                            </FormItem>
                             <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="Modern" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Modern
                              </FormLabel>
                            </FormItem>
                             <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="Abstract" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Abstract
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isPending}
                    size="lg"
                  >
                    {isPending ? (
                      <LoaderCircle className="animate-spin" />
                    ) : (
                      <Sparkles className="mr-2 h-5 w-5" />
                    )}
                    Generate Posters
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card className="min-h-full">
            <CardHeader>
              <CardTitle>Generated Posters</CardTitle>
              <CardDescription>
                Here are the designs generated by AI. Browse and download your
                favorite.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center min-h-[60vh]">
              {isPending ? (
                 <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                    <div className="space-y-4">
                        <Skeleton className="h-[400px] w-full rounded-lg" />
                        <Skeleton className="h-10 w-32 mx-auto" />
                    </div>
                    <div className="space-y-4 hidden md:block">
                        <Skeleton className="h-[400px] w-full rounded-lg" />
                        <Skeleton className="h-10 w-32 mx-auto" />
                    </div>
                </div>
              ) : state?.posters ? (
                <Carousel className="w-full max-w-md">
                  <CarouselContent>
                    {state.posters.map((url, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <Card>
                            <CardContent className={cn("flex items-center justify-center p-0 relative overflow-hidden rounded-lg", aspectRatioClass)}>
                              <Image
                                src={url}
                                alt={`Generated Poster ${index + 1}`}
                                fill
                                style={{ objectFit: "cover" }}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                data-ai-hint="promotional poster"
                              />
                            </CardContent>
                            <CardFooter className="pt-4 flex justify-center">
                              <Button onClick={() => handleDownload(url)}>
                                <Download className="mr-2 h-4 w-4" />
                                Download
                              </Button>
                            </CardFooter>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              ) : (
                <div className="text-center text-muted-foreground space-y-4">
                  <ImageIcon className="mx-auto h-16 w-16" />
                  <p className="font-medium">Your posters will appear here</p>
                  <p className="text-sm">
                    Fill out the form on the left to get started.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
