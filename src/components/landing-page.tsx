
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

            <section id="pricing" className="py-20 md:py-32">
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
