"use client";

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CreditCard, Shield, Percent, Globe, Clock, Globe2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqData = [
  {
    question: "What payment methods does Payme support?",
    answer: "We support a vast array of payment options, including all major credit and debit cards, UPI, Net Banking with over 50 banks, and popular digital wallets.",
    icon: CreditCard,
    mockup: (
      <div className="space-y-3">
        <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border">
          <CreditCard className="w-5 h-5 text-blue-500" />
          <span className="font-medium text-sm text-gray-700">Credit & Debit Cards</span>
        </div>
        <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border">
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg" alt="UPI" className="w-8 h-auto"/>
          <span className="font-medium text-sm text-gray-700">UPI Payments</span>
        </div>
        <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border">
          <img src="https://cdn.worldvectorlogo.com/logos/paytm-2.svg" alt="Wallets" className="w-8 h-auto"/>
          <span className="font-medium text-sm text-gray-700">Digital Wallets</span>
        </div>
      </div>
    )
  },
  {
    question: "Is Payme secure for transactions?",
    answer: "Absolutely. We are PCI DSS Level 1 compliant and use 128-bit SSL encryption. Our platform includes advanced fraud detection to keep your payments safe.",
    icon: Shield,
    mockup: (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <Shield className="w-16 h-16 text-green-500 mb-4" />
        <h4 className="font-bold text-gray-800">PCI DSS Level 1 Compliant</h4>
        <p className="text-sm text-gray-500 mt-1">128-bit SSL Encryption</p>
      </div>
    )
  },
  {
    question: "What are the transaction fees?",
    answer: "Our pricing is simple and transparent. We charge a flat fee of 2% for most domestic transactions. No setup fees or hidden charges. Ever.",
    icon: Percent,
    mockup: (
        <div className="text-center">
            <h4 className="text-5xl font-bold text-gray-800">2%*</h4>
            <p className="text-sm text-gray-500 mt-2">Flat fee for domestic transactions.</p>
            <p className="text-xs text-gray-400 mt-4">*For detailed pricing, visit our pricing page.</p>
        </div>
    )
  },
  {
    question: "Can I accept international payments?",
    answer: "Yes, you can accept payments from customers across the globe in over 100 currencies. We handle currency conversion and settlement for you.",
    icon: Globe,
    mockup: (
       <div className="flex items-center justify-center gap-4">
            <div className="text-4xl">🇺🇸</div>
            <div className="text-4xl">🇪🇺</div>
            <div className="text-4xl">🇬🇧</div>
            <div className="text-4xl">🇯🇵</div>
        </div>
    )
  },
  {
    question: "How long do settlements take?",
    answer: "Standard settlements are processed within T+2 business days. We also offer Instant Settlements for eligible businesses to get funds within minutes.",
    icon: Clock,
     mockup: (
      <div className="flex flex-col items-center">
        <Clock className="w-12 h-12 text-blue-500 mb-4" />
        <h4 className="font-bold text-gray-800">T+2 Days</h4>
        <p className="text-sm text-gray-500">Standard Settlement Cycle</p>
         <div className="w-full h-px bg-gray-200 my-4"></div>
        <h4 className="font-bold text-green-600">Instant Settlements also available!</h4>
      </div>
    )
  },
  {
    question: "Do I need a website to use Payme?",
    answer: "Not at all! You can use our other products like Payment Links, Payment Pages, and QR Codes to accept payments without any coding or a website.",
    icon: Globe2,
    mockup: (
       <div className="space-y-2">
            <p className="text-sm text-center text-gray-600 font-medium">Use our no-code tools:</p>
            <div className="p-3 bg-white rounded-lg border text-center">Payment Links</div>
            <div className="p-3 bg-white rounded-lg border text-center">Payment Pages</div>
            <div className="p-3 bg-white rounded-lg border text-center">QR Codes</div>
        </div>
    )
  }
];

export default function Faq() {
  const [activeQuestion, setActiveQuestion] = useState(faqData[0]);

  const contentVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-slate-900/50">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Your Questions, Answered
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our platform, features, and pricing. If you don't find what you're looking for, feel free to reach out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Side: Questions */}
          <div className="flex flex-col gap-2">
            {faqData.map((item) => (
              <button
                key={item.question}
                onClick={() => setActiveQuestion(item)}
                className={cn(
                  "flex items-start gap-4 p-4 rounded-lg text-left transition-all duration-300 w-full",
                  activeQuestion.question === item.question
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'hover:bg-gray-200/60 dark:hover:bg-slate-800'
                )}
              >
                <div className={cn(
                    "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                    activeQuestion.question === item.question ? 'bg-primary-foreground/20' : 'bg-gray-200 dark:bg-slate-700'
                )}>
                    <item.icon className={cn("w-5 h-5", activeQuestion.question === item.question ? 'text-white' : 'text-primary')} />
                </div>
                <span className="font-semibold text-base flex-1">
                  {item.question}
                </span>
              </button>
            ))}
          </div>

          {/* Right Side: Answers & Mockups */}
          <div className="relative min-h-[350px] lg:min-h-[450px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeQuestion.question}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="bg-background rounded-xl border shadow-md w-full p-8"
              >
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{activeQuestion.question}</h3>
                  <p className="text-muted-foreground">{activeQuestion.answer}</p>
                </div>
                <div className="bg-gray-100 dark:bg-slate-800/50 rounded-lg min-h-[150px] p-6 flex items-center justify-center">
                  {activeQuestion.mockup}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
