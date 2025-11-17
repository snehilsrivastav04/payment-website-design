"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, ChevronsRight } from 'lucide-react';

export default function InnovationSection() {
  return (
    <section className="py-16 md:py-24 bg-blue-50/50 dark:bg-slate-900/50">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            We have innovated at every instance, creating a disruption.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Left Card */}
          <div className="lg:col-span-3 bg-background p-6 md:p-8 rounded-lg border shadow-sm flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-sm font-semibold text-muted-foreground">MoneySaver Export Account</h3>
              <Globe className="w-6 h-6 text-muted-foreground" />
            </div>
            <p className="text-2xl md:text-3xl font-bold text-foreground leading-tight mb-6">
              <span className="text-primary">Open a virtual account in 200+ countries</span>, save up to 50% on international bank transfer charges. Receive ACH/SWIFT/SEPA/BACS payments
            </p>
            <div className="mt-auto">
              <p className="text-sm text-muted-foreground mb-6">
                Receive international wire transfers with ease with a smart account
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Button>Sign Up <ArrowRight className="w-4 h-4 ml-2" /></Button>
                <Button variant="link" className="p-0 h-auto">Know More</Button>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="lg:col-span-2 bg-background p-6 md:p-8 rounded-lg border shadow-sm flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-sm font-semibold text-muted-foreground">Turbo UPI</h3>
              <ChevronsRight className="w-6 h-6 text-muted-foreground" />
            </div>
            <p className="text-lg font-medium text-foreground leading-relaxed mb-6">
              Experience a <span className="text-primary font-semibold">5X faster checkout</span>, achieve a 10% success rate boost, all without any redirections to UPI apps.
            </p>
            <div className="mt-auto">
              <p className="text-sm text-muted-foreground mb-6">
                Get India's fastest one-step UPI payment solution for businesses
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Button>Sign Up <ArrowRight className="w-4 h-4 ml-2" /></Button>
                <Button variant="link" className="p-0 h-auto">Know More</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
