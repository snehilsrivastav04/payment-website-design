"use client";

import React from 'react';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from 'next/image';
import Autoplay from "embla-carousel-autoplay";

const businessTypes = [
  {
    title: "AI",
    description: "Payme supports businesses across the AI ecosystem – from usage-based billing for AI assistants like Perplexity to premium subscriptions for infrastructure providers like OpenAI.",
    logos: [
      { name: "OpenAI", src: "https://cdn.worldvectorlogo.com/logos/openai-2.svg" },
      { name: "Cursor", src: "https://cdn.worldvectorlogo.com/logos/cursor-2.svg" },
      { name: "Anthropic", src: "https://cdn.worldvectorlogo.com/logos/anthropic.svg" },
    ]
  },
  {
    title: "SaaS",
    description: "Quickly launch and grow recurring revenue with a unified platform for payments, subscriptions, invoicing, tax, accounting, and more.",
    logos: [
      { name: "Slack", src: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" },
      { name: "Twilio", src: "https://cdn.worldvectorlogo.com/logos/twilio-2.svg" },
      { name: "Linear", src: "https://cdn.worldvectorlogo.com/logos/linear-2.svg" },
    ]
  },
  {
    title: "Marketplace",
    description: "Get everything you need to onboard service providers, manage multi-party payments, and payouts, all in one place.",
    logos: [
      { name: "BloomNation", src: "https://cdn.worldvectorlogo.com/logos/bloomnation.svg" },
      { name: "Instacart", src: "https://cdn.worldvectorlogo.com/logos/instacart-1.svg" },
      { name: "Deliveroo", src: "https://cdn.worldvectorlogo.com/logos/deliveroo-2.svg" },
    ]
  },
  {
    title: "E-commerce",
    description: "Power your e-commerce store with our flexible payments platform, supporting everything from simple checkouts to complex subscription models.",
    logos: [
        { name: "Shopify", src: "https://cdn.worldvectorlogo.com/logos/shopify.svg" },
        { name: "BigCommerce", src: "https://cdn.worldvectorlogo.com/logos/bigcommerce-1.svg" },
        { name: "WooCommerce", src: "https://cdn.worldvectorlogo.com/logos/woocommerce.svg" },
    ]
  },
  {
    title: "Platforms",
    description: "Let your customers accept payments directly within your platform. FinLanding handles all the complexity of payment processing, so you can focus on your product.",
    logos: [
        { name: "Substack", src: "https://cdn.worldvectorlogo.com/logos/substack-1.svg" },
        { name: "Squarespace", src: "https://cdn.worldvectorlogo.com/logos/squarespace-2.svg" },
        { name: "Wix", src: "https://cdn.worldvectorlogo.com/logos/wix-com.svg" },
    ]
  },
  {
    title: "Creators",
    description: "Monetise your audience with a suite of tools for creators. Accept donations, sell digital products, and manage memberships, all from one platform.",
    logos: [
      { name: "Patreon", src: "https://cdn.worldvectorlogo.com/logos/patreon-2.svg" },
      { name: "Podia", src: "https://cdn.worldvectorlogo.com/logos/podia.svg" },
      { name: "Kajabi", src: "https://cdn.worldvectorlogo.com/logos/kajabi.svg" },
    ]
  },
  {
    title: "B2B",
    description: "Automate your entire accounts receivable process. Send invoices, accept payments, and reconcile transactions with ease.",
    logos: [
      { name: "QuickBooks", src: "https://cdn.worldvectorlogo.com/logos/quickbooks-2.svg" },
      { name: "Xero", src: "https://cdn.worldvectorlogo.com/logos/xero.svg" },
      { name: "FreshBooks", src: "https://cdn.worldvectorlogo.com/logos/freshbooks.svg" },
    ]
  }
];

export default function NoCodeProducts() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-slate-900/50">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Support for any business type</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From global AI companies to category-defining marketplaces, successful businesses across industries grow and scale with FinLanding.
            </p>
          </div>
        </div>

        <Carousel 
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-6">
            {businessTypes.map((product, index) => (
              <CarouselItem key={index} className="pl-6 md:basis-1/2 lg:basis-1/3">
                <Card className="bg-background h-full flex flex-col group shadow-lg transition-all hover:shadow-2xl hover:-translate-y-1">
                    <CardContent className="p-8 flex flex-col flex-1">
                        <h3 className="text-2xl font-semibold text-foreground mb-4">{product.title}</h3>
                        <p className="text-muted-foreground mb-6 flex-grow">{product.description}</p>
                        <Link href="#" className="flex items-center text-sm font-medium text-primary mb-8 group-hover:underline">
                            Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                        
                        <div className="border-t border-border mt-auto pt-6">
                            <div className="grid grid-cols-3 gap-6 items-center justify-center">
                                {product.logos.map((logo) => (
                                    <div key={logo.name} className="flex justify-center">
                                        <Image 
                                            src={logo.src} 
                                            alt={logo.name} 
                                            width={100}
                                            height={24}
                                            className="h-6 w-auto grayscale opacity-70"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
           <div className="hidden md:flex justify-end items-center mt-8 space-x-2">
            <CarouselPrevious className="relative translate-x-0 translate-y-0 left-0 top-0"/>
            <CarouselNext className="relative translate-x-0 translate-y-0 left-0 top-0"/>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
