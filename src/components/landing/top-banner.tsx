import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function TopBanner() {
  return (
    <div className="bg-secondary text-sm">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex items-center justify-center md:justify-between h-10">
          <div className="flex items-center gap-4 text-center">
            <p className="font-semibold text-primary">MoneySaver Export Account</p>
            <p className="hidden md:block text-secondary-foreground/80">
              0 forex markup. 75% savings on international bank transfers! 
              <Link href="#" className="ml-1 font-semibold text-primary hover:underline">
                Sign Up Now
              </Link>
            </p>
          </div>
          <div className="hidden lg:flex items-center gap-2">
             <span className="font-mono text-secondary-foreground/60">£</span>
             <span className="font-mono text-secondary-foreground/60">€</span>
             <span className="font-mono text-secondary-foreground/60">$</span>
             <span className="font-mono text-secondary-foreground/60">¥</span>
             <span className="font-mono text-secondary-foreground/60">A$</span>
             <button className="h-6 w-6 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                <ChevronRight className="w-4 h-4"/>
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}
