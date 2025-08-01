import { Sparkles, Twitter, Instagram, Facebook } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <Sparkles className="h-8 w-8 text-primary" />
              <h1 className="ml-2 text-2xl font-bold font-headline text-foreground">
                Posterific
              </h1>
            </Link>
            <p className="text-muted-foreground">
              AI-powered poster generation for everyone.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/#pricing" className="text-muted-foreground hover:text-primary">Pricing</Link></li>
              <li><Link href="/generator" className="text-muted-foreground hover:text-primary">Generator</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Terms of Service</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter className="h-6 w-6" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Instagram className="h-6 w-6" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook className="h-6 w-6" /></Link>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Posterific. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
