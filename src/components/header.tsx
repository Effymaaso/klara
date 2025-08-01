
'use client';
import { Sparkles } from "lucide-react";
import Link from 'next/link';
import { Button } from "./ui/button";
import { UserNav } from "./user-nav";


export function Header({
  showPricingButton = false,
  showAuthButtons = true,
}: {
  showPricingButton?: boolean;
  showAuthButtons?: boolean;
}) {

  const handlePricingClick = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // A simple way to toggle auth state for display
  const isLoggedIn = !showAuthButtons;

  return (
    <header className="border-b bg-card sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
            <Sparkles className="h-8 w-8 text-primary" />
            <h1 className="ml-2 text-2xl font-bold font-headline text-foreground">
              Posterific
            </h1>
        </Link>
        <div className="flex items-center gap-4">
            {showPricingButton && (
                <Button variant="ghost" onClick={handlePricingClick}>Pricing</Button>
            )}
            {isLoggedIn ? (
               <UserNav />
            ) : (
                <>
                 <Link href="/login">
                        <Button variant="outline">Login</Button>
                    </Link>
                     <Link href="/signup">
                        <Button>Sign Up</Button>
                    </Link>
                </>
            )}
        </div>
      </div>
    </header>
  );
}
