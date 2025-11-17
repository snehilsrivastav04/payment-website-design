
"use client";

import * as React from "react";
import Link from "next/link";
import { 
    ArrowRight, 
    ChevronDown, 
    Headset, 
    Menu, 
    CreditCard, 
    Globe, 
    Link2, 
    ShoppingCart, 
    Landmark, 
    Repeat, 
    X, 
    ArrowRightCircle, 
    Users,
    Paperclip,
    Zap,
    Book,
    FileText,
    QrCode,
    Smartphone,
    GitCompareArrows,
    Send,
    AppWindow,
    RefreshCw,
    Package,
    Store
} from "lucide-react";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import TopBanner from "./top-banner";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

// Types
interface NavLink {
  name: string;
  href: string;
  icon?: React.ElementType;
  new?: boolean;
}

interface MenuItem {
  name: string;
  href: string;
  isMega?: boolean;
}

interface MegaMenuItem {
  icon?: React.ElementType;
  title: string;
  description: string;
  href: string;
  new?: boolean;
}

interface MegaMenuGroup {
  heading?: string;
  items: MegaMenuItem[];
}

interface PaymentMegaMenu {
  column1: MegaMenuGroup[];
  column2: MegaMenuGroup[];
  column3: MegaMenuGroup[];
}

// Data
const paymentLinks: NavLink[] = [
    { name: "Payment Gateway", icon: CreditCard, new: false, href: "#payment-gateway" },
    { name: "Payment Links", icon: Link2, new: false, href: "#payment-links" },
    { name: "Webstore", icon: ShoppingCart, new: true, href: "#webstore" },
    { name: "payme POS", icon: CreditCard, new: true, href: "#pos" }
];

const bankingLinks: NavLink[] = [
    { name: "Current Accounts", icon: Landmark, new: false, href: "#current-accounts" },
    { name: "Source to Pay", icon: Repeat, new: false, href: "#source-to-pay" },
    { name: "Payroll", icon: Users, new: false, href: "#payroll" }
];

const menuItems: MenuItem[] = [
  { name: "Payments", isMega: true, href: "#payments" },
  { name: "Banking+", href: "#banking" },
  { name: "Payroll", href: "#payroll" },
  { name: "Engage", href: "#engage" },
  { name: "Partners", href: "#partners" },
  { name: "Resources", href: "#resources" },
  { name: "Pricing", href: "#pricing" },
];

const paymentMegaMenu: PaymentMegaMenu = {
  column1: [
    {
      heading: "Accept Payments Online",
      items: [
        { icon: CreditCard, title: "Payment Aggregator", description: "Accepting payments made easy for businesses", href: "#payment-aggregator" },
        { icon: CreditCard, title: "Payment Gateway", description: "Payments on your Website & App", href: "#payment-gateway" },
        { icon: Link2, title: "Payment Links", description: "Create & send links to collect money", href: "#payment-links" },
        { icon: FileText, title: "Payment Pages", description: "Get paid with personalized page", href: "#payment-pages" },
        { icon: QrCode, title: "QR Codes", description: "Multi-feature QR for your business", href: "#qr-codes" },
        { icon: Smartphone, title: "UPI Payments", description: "Discover the complete UPI stack", new: true, href: "#upi-payments" },
      ],
    },
  ],
  column2: [
    {
      items: [
        { icon: Package, title: "Magic Checkout", description: "Improve Order Conversions & Reduce RTOs", new: true, href: "#magic-checkout" },
        { icon: Repeat, title: "Subscriptions", description: "Collect recurring subscription payments", href: "#subscriptions" },
        { icon: Zap, title: "Instant Settlement", description: "Customer payments settled faster", href: "#instant-settlement" },
        { icon: GitCompareArrows, title: "Optimizer", description: "Manage multiple payment gateways", href: "#optimizer" },
      ],
    },
    {
      heading: "Accept Payments Offline",
      items: [
        { icon: Store, title: "payme POS", description: "Accept Payments In-Store", href: "#pos" },
      ],
    },
  ],
  column3: [
    {
      heading: "All-in-one Payments",
      items: [
        { icon: AppWindow, title: "Omnichannel Payments", description: "One Payment Platform for All Channels", new: true, href: "#omnichannel" },
      ],
    },
    {
      heading: "Accept International Payments",
      items: [
        { icon: Globe, title: "International Payments", description: "Accept payments from across the globe", href: "#international" },
        { icon: Send, title: "International Bank Transfers", description: "Accept USD, GBP, EUR payments in your account", new: true, href: "#international-transfers" },
      ],
    },
    {
      heading: "Built for Global Businesses",
      items: [
        { icon: Globe, title: "Accept Payments from India", description: "Seamless INR collections via UPI & cards", new: true, href: "#india-payments" },
      ],
    },
  ],
};

// Components
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    title: string;
    icon?: React.ElementType;
    new?: boolean;
    children: React.ReactNode;
  }
>(({ className, title, children, icon: Icon, new: isNew, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href || '#'}
          ref={ref}
          className={cn(
            "group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-start gap-3">
            {Icon && (
              <div className="p-2 bg-blue-100 rounded-full text-primary">
                <Icon className="h-5 w-5" />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <div className="text-sm font-bold leading-none">{title}</div>
                {isNew && (
                  <span className="text-[10px] bg-green-100 text-green-800 font-semibold px-2 py-0.5 rounded">
                    NEW
                  </span>
                )}
              </div>
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:text-accent-foreground mt-1">
                {children}
              </p>
            </div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";


const MobileNavLink: React.FC<{ item: NavLink }> = ({ item }) => (
  <Link href={item.href} className="flex items-center gap-3 group py-2">
    {item.icon && <item.icon className="w-5 h-5 text-primary" />}
    <span className="font-medium group-hover:text-primary transition-colors">
      {item.name}
    </span>
    {item.new && (
      <span className="text-xs bg-green-100 text-green-700 font-semibold px-2 py-0.5 rounded-md">
        NEW
      </span>
    )}
  </Link>
);

const MegaMenuColumn: React.FC<{ groups: MegaMenuGroup[] }> = ({ groups }) => (
  <div className="flex flex-col gap-4">
    {groups.map((group, index) => (
      <div key={group.heading || `group-${index}`}>
        {group.heading && (
          <h4 className="text-xs font-semibold text-muted-foreground tracking-wider uppercase p-3">
            {group.heading}
          </h4>
        )}
        <ul className="grid gap-1">
          {group.items.map((subItem) => (
            <ListItem
              key={subItem.title}
              title={subItem.title}
              href={subItem.href}
              icon={subItem.icon}
              new={subItem.new}
            >
              {subItem.description}
            </ListItem>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default function Navigation() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClasses = cn(
    "sticky top-0 z-50 w-full transition-shadow duration-300 bg-background",
    isScrolled ? "shadow-md" : ""
  );

  return (
    <header className={navClasses}>
      <TopBanner />
      <div className="border-b">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
          {/* Logo and Desktop Navigation */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center">
              <Logo className="h-7 w-auto" />
              <span className="sr-only">Finlanding</span>
            </Link>
            
            <nav className="hidden items-center gap-1 md:flex">
              <NavigationMenu>
                <NavigationMenuList>
                  {menuItems.map((item) =>
                    item.isMega ? (
                      <NavigationMenuItem key={item.name}>
                        <NavigationMenuTrigger className="font-medium text-foreground/80 hover:text-primary">
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="p-4 bg-white dark:bg-slate-950 w-screen max-w-5xl">
                            <div className="grid grid-cols-3 gap-6">
                              <MegaMenuColumn groups={paymentMegaMenu.column1} />
                              <MegaMenuColumn groups={paymentMegaMenu.column2} />
                              <MegaMenuColumn groups={paymentMegaMenu.column3} />
                            </div>
                            <div className="mt-4 p-3 text-center bg-gray-50 dark:bg-slate-900 rounded-md">
                              <p className="text-xs text-muted-foreground">
                                Payment aggregation services provided by payme Software Limited
                              </p>
                            </div>
                          </div>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    ) : (
                      <NavigationMenuItem key={item.name}>
                        <Link href={item.href} legacyBehavior passHref>
                          <NavigationMenuLink
                            className={cn(
                              navigationMenuTriggerStyle(),
                              "font-medium text-foreground/80 hover:text-primary"
                            )}
                          >
                            {item.name}
                          </NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>
                    )
                  )}
                </NavigationMenuList>
              </NavigationMenu>
            </nav>
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-2 md:flex">
            <Button variant="ghost" size="icon" className="text-foreground/80">
              <Headset className="h-5 w-5" />
            </Button>
            <Button variant="ghost" className="text-foreground/80 flex items-center gap-2">
              <span className="text-2xl">🇮🇳</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="rounded-md">
              Login
            </Button>
            <Button className="rounded-md bg-primary text-primary-foreground">
              Sign Up <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-full max-w-sm p-0">
                <div className="flex h-full flex-col">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between border-b px-4 h-16">
                    <Link href="/">
                      <Logo className="h-7 w-auto" />
                      <span className="sr-only">Finlanding</span>
                    </Link>
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon" className="rounded-full">
                        <X className="h-5 w-5" />
                      </Button>
                    </SheetClose>
                  </div>

                  {/* Mobile Content */}
                  <div className="flex-1 overflow-y-auto p-6">
                    {/* Location & Login */}
                    <div className="border-b pb-6">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2 font-medium">
                          <span className="text-2xl">🇮🇳</span>
                          <span>India</span>
                        </div>
                        <ChevronDown className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <Button variant="outline" className="w-full justify-between">
                        Login
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Payment Links */}
                    <div className="py-6 border-b">
                      <p className="text-xs font-semibold text-muted-foreground uppercase mb-4">
                        Accept Payments Online
                      </p>
                      <nav className="flex flex-col gap-4">
                        {paymentLinks.map((item) => (
                          <MobileNavLink key={item.name} item={item} />
                        ))}
                      </nav>
                      <Link href="#" className="flex items-center justify-between mt-6 text-primary font-semibold">
                        <span>Explore Payment Suite</span>
                        <ArrowRightCircle className="w-5 h-5" />
                      </Link>
                    </div>

                    {/* Banking Links */}
                    <div className="py-6 border-b">
                      <p className="text-xs font-semibold text-muted-foreground uppercase mb-4">
                        payme X - Banking Suite
                      </p>
                      <nav className="flex flex-col gap-4">
                        {bankingLinks.map((item) => (
                          <MobileNavLink key={item.name} item={item} />
                        ))}
                      </nav>
                      <Link href="#" className="flex items-center justify-between mt-6 text-primary font-semibold">
                        <span>Explore Banking Suite</span>
                        <ArrowRightCircle className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

    