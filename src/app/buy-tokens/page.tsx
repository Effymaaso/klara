
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, CreditCard, DollarSign, Zap } from "lucide-react";
import Link from "next/link";


export default function BuyTokensPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header showAuthButtons={false} />
      <main className="flex-1 py-12">
        <div className="container mx-auto">
             <div className="text-center mb-12">
                <h1 className="text-4xl font-bold tracking-tighter">Get More Tokens</h1>
                <p className="text-xl text-muted-foreground mt-2">Choose a package that suits your creative needs.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <Card className="flex flex-col">
                    <CardHeader className="items-center text-center">
                        <Zap className="h-10 w-10 text-primary mb-2"/>
                        <CardTitle>Spark</CardTitle>
                        <CardDescription>A quick boost for your projects.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow text-center space-y-4">
                        <div className="text-4xl font-bold">
                            $5
                        </div>
                        <p className="font-semibold text-2xl text-primary">50</p>
                        <p className="text-muted-foreground">Tokens</p>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full">
                            <CreditCard className="mr-2 h-4 w-4" /> Purchase
                        </Button>
                    </CardFooter>
                </Card>
                 <Card className="flex flex-col border-primary shadow-lg">
                     <CardHeader className="items-center text-center">
                        <Zap className="h-10 w-10 text-primary mb-2"/>
                        <CardTitle>Creative</CardTitle>
                        <CardDescription>Perfect for regular users.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow text-center space-y-4">
                       <div className="text-4xl font-bold">
                            $15
                        </div>
                        <p className="font-semibold text-2xl text-primary">200</p>
                        <p className="text-muted-foreground">Tokens</p>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full">
                            <CreditCard className="mr-2 h-4 w-4" /> Purchase
                        </Button>
                    </CardFooter>
                </Card>
                 <Card className="flex flex-col">
                    <CardHeader className="items-center text-center">
                        <Zap className="h-10 w-10 text-primary mb-2"/>
                        <CardTitle>Powerhouse</CardTitle>
                        <CardDescription>For heavy users and professionals.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow text-center space-y-4">
                       <div className="text-4xl font-bold">
                            $40
                        </div>
                        <p className="font-semibold text-2xl text-primary">1000</p>
                        <p className="text-muted-foreground">Tokens</p>
                    </CardContent>
                    <CardFooter>
                         <Button className="w-full">
                            <CreditCard className="mr-2 h-4 w-4" /> Purchase
                        </Button>
                    </CardFooter>
                </Card>
            </div>
             <div className="text-center mt-12">
                <Link href="/settings">
                    <Button variant="ghost">Back to Settings</Button>
                </Link>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
