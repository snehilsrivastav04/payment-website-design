"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const recommendations = [
  "Accept Payments",
  "Make Payouts",
  "Start Business Banking",
  "Automate Payroll",
  "Get Credit & Loans",
];

export default function Recommendations() {
  const [selected, setSelected] = useState("Accept Payments");

  return (
    <section className="py-8 bg-gray-50 dark:bg-gray-800/20">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="flex-shrink-0 flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
            <span>With FinLanding, you can:</span>
          </div>
          <div className="flex-grow">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              {recommendations.map((item) => (
                <Button
                  key={item}
                  variant={selected === item ? "secondary" : "ghost"}
                  size="sm"
                  className={`rounded-full ${selected === item ? 'font-semibold' : 'text-gray-600 dark:text-gray-400'}`}
                  onClick={() => setSelected(item)}
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
