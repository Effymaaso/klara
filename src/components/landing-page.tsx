
'use client';
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import { Header } from "./header";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

export function LandingPage() {

    const handleGetStartedClick = () => {
        const pricingSection = document.getElementById('pricing');
        if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

  return (
    <div className="flex flex-col min-h-screen bg-background">
        <Header showPricingButton={true} />
        <main className="flex-1">
            <section className="py-20 md:py-32">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
                        Create Stunning Posters with AI
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
                        Turn your ideas into beautiful, high-resolution posters in seconds. Perfect for events, marketing, or just for fun.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href="/generator">
                             <Button size="lg">
                                <Sparkles className="mr-2 h-5 w-5" />
                                Start Generating
                            </Button>
                        </Link>
                        <Button size="lg" variant="outline" onClick={handleGetStartedClick}>
                           View Pricing
                        </Button>
                    </div>
                </div>
            </section>
            
            <section className="py-20 bg-muted/40">
                <div className="container mx-auto">
                     <h2 className="text-3xl font-bold text-center mb-12">Featured Samples</h2>
                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                           <Image src="https://placehold.co/600x800.png" alt="Sample Poster 1" width={600} height={800} className="w-full" data-ai-hint="music festival" />
                        </div>
                         <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                           <Image src="https://placehold.co/600x800.png" alt="Sample Poster 2" width={600} height={800} className="w-full" data-ai-hint="art exhibition" />
                        </div>
                         <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                           <Image src="https://placehold.co/600x800.png" alt="Sample Poster 3" width={600} height={800} className="w-full" data-ai-hint="product launch" />
                        </div>
                     </div>
                </div>
            </section>

            <section className="py-20 bg-background">
                <div className="container mx-auto">
                    <h3 className="text-2xl font-bold text-center mb-12 text-muted-foreground">
                        Trusted by visionary companies worldwide
                    </h3>
                    <div className="relative w-full overflow-hidden">
                        <div className="flex animate-scroll-x-1 space-x-16">
                            {Array(2).fill(null).map((_, i) => (
                                <div key={i} className="flex-shrink-0 flex space-x-16">
                                    <Image src="https://placehold.co/150x60.png" alt="Brand Logo 1" width={150} height={60} className="h-12 w-auto" data-ai-hint="logo company" />
                                    <Image src="https://placehold.co/150x60.png" alt="Brand Logo 2" width={150} height={60} className="h-12 w-auto" data-ai-hint="logo tech" />
                                    <Image src="https://placehold.co/150x60.png" alt="Brand Logo 3" width={150} height={60} className="h-12 w-auto" data-ai-hint="logo startup" />
                                    <Image src="https://placehold.co/150x60.png" alt="Brand Logo 4" width={150} height={60} className="h-12 w-auto" data-ai-hint="logo business" />
                                    <Image src="https://placehold.co/150x60.png" alt="Brand Logo 5" width={150} height={60} className="h-12 w-auto" data-ai-hint="logo brand" />
                                    <Image src="https://placehold.co/150x60.png" alt="Brand Logo 6" width={150} height={60} className="h-12 w-auto" data-ai-hint="logo design" />
                                </div>
                             ))}
                        </div>
                    </div>
                     <div className="relative w-full overflow-hidden mt-8">
                        <div className="flex animate-scroll-x-2 space-x-16">
                             {Array(2).fill(null).map((_, i) => (
                                <div key={i} className="flex-shrink-0 flex space-x-16">
                                    <Image src="https://placehold.co/150x60.png" alt="Brand Logo 7" width={150} height={60} className="h-12 w-auto" data-ai-hint="logo creative" />
                                    <Image src="https://placehold.co/150x60.png" alt="Brand Logo 8" width={150} height={60} className="h-12 w-auto" data-ai-hint="logo agency" />
                                    <Image src="https://placehold.co/150x60.png" alt="Brand Logo 9" width={150} height={60} className="h-12 w-auto" data-ai-hint="logo marketing" />
                                    <Image src="https://placehold.co/150x60.png" alt="Brand Logo 10" width={150} height={60} className="h-12 w-auto" data-ai-hint="logo corporate" />
                                    <Image src="https://placehold.co/150x60.png" alt="Brand Logo 11" width={150} height={60} className="h-12 w-auto" data-ai-hint="logo media" />
                                    <Image src="https://placehold.co/150x60.png" alt="Brand Logo 12" width={150} height={60} className="h-12 w-auto" data-ai-hint="logo finance" />
                                </div>
                             ))}
                        </div>
                    </div>
                      <div className="relative w-full overflow-hidden mt-8">
                        <div className="flex animate-scroll-x-1 space-x-16" style={{animationDirection: "reverse"}}>
                             {Array(2).fill(null).map((_, i) => (
                                <div key={i} className="flex-shrink-0 flex space-x-16">
                                    <Image src="https://placehold.co/150x60.png" alt="Brand Logo 13" width={150} height={60} className="h-12 w-auto" data-ai-hint="logo consulting" />
                                    <Image src="https://placehold.co/150x60.png" alt="Brand Logo 14" width={150} height={60} className="h-12 w-auto" data-ai-hint="logo social" />
                                    <Image src="https://placehold.co/150x60.png" alt="Brand Logo 15" width={150} height={60} className="h-12 w-auto" data-ai-hint="logo innovation" />
                                    <Image src="https://placehold.co/150x60.png" alt="Brand Logo 16" width={150} height={60} className="h-12 w-auto" data-ai-hint="logo fintech" />
                                    <Image src="https://placehold.co/150x60.png" alt="Brand Logo 17" width={150} height={60} className="h-12 w-auto" data-ai-hint="logo retail" />
                                    <Image src="https://placehold.co/150x60.png" alt="Brand Logo 18" width={150} height={60} className="h-12 w-auto" data-ai-hint="logo events" />
                                </div>
                             ))}
                        </div>
                    </div>
                </div>
            </section>

            <section id="pricing" className="py-20 md:py-32 bg-muted/40">
                 <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-4">Pricing Plans</h2>
                    <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">Choose a plan that fits your needs. Get started for free and upgrade when you are ready.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <Card className="flex flex-col">
                            <CardHeader>
                                <CardTitle>Free</CardTitle>
                                <CardDescription>For personal use and exploration.</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow space-y-4">
                                <div className="text-4xl font-bold">
                                    $0 <span className="text-sm font-normal text-muted-foreground">/ month</span>
                                </div>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2"><Check className="text-primary"/> 5 poster generations per day</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary"/> Basic design styles</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary"/> Standard resolution</li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Link href="/generator" className="w-full">
                                    <Button variant="outline" className="w-full">Get Started</Button>
                                </Link>
                            </CardFooter>
                        </Card>
                         <Card className="flex flex-col border-primary shadow-lg">
                            <CardHeader>
                                <CardTitle>Pro</CardTitle>
                                <CardDescription>For professionals and small teams.</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow space-y-4">
                                <div className="text-4xl font-bold">
                                    $15 <span className="text-sm font-normal text-muted-foreground">/ month</span>
                                </div>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2"><Check className="text-primary"/> 100 poster generations per day</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary"/> All design styles</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary"/> High resolution downloads</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary"/> Priority support</li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Link href="/generator" className="w-full">
                                    <Button className="w-full">Choose Pro</Button>
                                </Link>
                            </CardFooter>
                        </Card>
                         <Card className="flex flex-col">
                            <CardHeader>
                                <CardTitle>Business</CardTitle>
                                <CardDescription>For large organizations and agencies.</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow space-y-4">
                                <div className="text-4xl font-bold">
                                    $50 <span className="text-sm font-normal text-muted-foreground">/ month</span>
                                </div>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2"><Check className="text-primary"/> Unlimited generations</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary"/> Custom brand styles</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary"/> 4K resolution downloads</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary"/> Dedicated account manager</li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button variant="outline" className="w-full">Contact Sales</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </section>
        </main>
        <footer className="border-t">
            <div className="container mx-auto py-6 text-center text-muted-foreground">
                <p>&copy; 2024 Posterific. All rights reserved.</p>
            </div>
        </footer>
    </div>
  );
}
