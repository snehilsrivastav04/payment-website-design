"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const features = [
  {
    title: 'Accept Payments',
    id: 'accept-payments',
    image: 'https://picsum.photos/seed/payments/800/1200',
    imageHint: 'payment methods',
    subFeatures: [
      {
        title: 'Payment Gateway',
        description: 'Offer a seamless payment experience on your website or app.',
        image: 'https://picsum.photos/seed/gateway/400/300',
        imageHint: 'website checkout'
      },
      {
        title: 'Payment Button',
        description: 'Effortlessly add a Pay Now button without any coding required.',
        image: 'https://picsum.photos/seed/pay-button/400/300',
        imageHint: 'cta button'
      },
      {
        title: 'Payment Links',
        description: 'Create and share links over email, text and social to accept payments instantly.',
        image: 'https://picsum.photos/seed/payment-links/400/300',
        imageHint: 'shared link'
      },
      {
        title: 'Razorpay POS',
        description: "Accept seamless in-store payments with India's best POS solution.",
        image: 'https://picsum.photos/seed/pos/400/300',
        imageHint: 'pos terminal'
      },
      {
        title: 'Payment Pages',
        description: 'Accept payments on a custom-branded online store with zero coding.',
        image: 'https://picsum.photos/seed/payment-pages/400/300',
        imageHint: 'online store'
      },
    ],
  },
  {
    title: 'Make Payouts',
    id: 'make-payouts',
    image: 'https://picsum.photos/seed/payouts/800/1200',
    imageHint: 'money transfer',
    subFeatures: [
      {
        title: 'API & Bulk Payouts',
        description: 'Make multiple payouts with a single click from your dashboard.',
        image: 'https://picsum.photos/seed/bulk-payouts/400/300',
        imageHint: 'api code'
      },
      {
        title: 'Source to Pay',
        description: 'Control and optimize vendor payments with an integrated payables solution.',
        image: 'https://picsum.photos/seed/source-pay/400/300',
        imageHint: 'vendor payment'
      },
       {
        title: 'Payout Links',
        description: 'Share payout links for instant payments, no bank details needed.',
        image: 'https://picsum.photos/seed/payout-links/400/300',
        imageHint: 'payout link'
      },
      {
        title: 'Tax Payments',
        description: 'Online tax payments in a single click.',
        image: 'https://picsum.photos/seed/tax/400/300',
        imageHint: 'tax form'
      },
    ],
  },
  {
    title: 'Business Banking',
    id: 'business-banking',
    image: 'https://picsum.photos/seed/banking/800/1200',
    imageHint: 'online banking',
    subFeatures: [
      {
        title: 'Current Account',
        description: "Automate banking with India's top current account for startups.",
        image: 'https://picsum.photos/seed/current-account/400/300',
        imageHint: 'bank account'
      },
      {
        title: 'Escrow Account',
        description: 'Automate Escrow money transfers with total safety and compliance.',
        image: 'https://picsum.photos/seed/escrow/400/300',
        imageHint: 'legal document'
      },
      {
        title: 'Forex Management',
        description: 'Get effortless foreign funding management with expert support.',
        image: 'https://picsum.photos/seed/forex/400/300',
        imageHint: 'currency exchange'
      },
      {
        title: 'Accounting Integration',
        description: 'Easy integrations with your accounting software.',
        image: 'https://picsum.photos/seed/accounting/400/300',
        imageHint: 'accounting software'
      },
    ],
  },
  {
    title: 'Automate Payroll',
    id: 'automate-payroll',
    image: 'https://picsum.photos/seed/payroll-automation/800/1200',
    imageHint: 'payroll software',
    subFeatures: [
        {
            title: 'Payroll for Startups',
            description: 'Master payroll and compliance with a solution built just for startups.',
            image: 'https://picsum.photos/seed/payroll-startups/400/300',
            imageHint: 'startup office'
        },
        {
            title: 'Payroll for CAs',
            description: 'Transform payroll and compliance for your clients with RazorpayX.',
            image: 'https://picsum.photos/seed/payroll-ca/400/300',
            imageHint: 'accountant working'
        },
        {
            title: 'Payroll for Enterprises',
            description: "Get India's No.1 payroll software for enterprises with RazorpayX.",
            image: 'https://picsum.photos/seed/payroll-enterprise/400/300',
            imageHint: 'corporate building'
        },
    ],
  },
  {
    title: 'Get Credit & Loans',
    id: 'credit-loans',
    image: 'https://picsum.photos/seed/credit/800/1200',
    imageHint: 'loan application',
    subFeatures: [
      {
        title: 'Instant Settlements',
        description: 'Get customer payments in your bank account instantly.',
        image: 'https://picsum.photos/seed/settlements/400/300',
        imageHint: 'instant transfer'
      },
      {
        title: 'RazorpayX Corporate Cards',
        description: 'Turn SaaS, cloud and marketing spends into real savings.',
        image: 'https://picsum.photos/seed/corporate-cards/400/300',
        imageHint: 'corporate card'
      },
    ],
  },
];

export default function StackedFeatures() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            The all-in-one <span className="text-blue-600">finance platform</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            With FinLanding, you can: Accept Payments, Make Payouts, Start Business Banking, Automate Payroll, and Get Credit & Loans.
          </p>
        </div>
        <div ref={targetRef} className="relative h-[500vh]">
          {features.map((feature, i) => (
            <FeatureCard
              key={feature.id}
              i={i}
              {...feature}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const FeatureCard = ({ i, title, id, image, imageHint, subFeatures, scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [i / features.length, (i + 1) / features.length], [1, 0.8]);
  const top = useTransform(scrollYProgress, [i / features.length, (i + 1) / features.length], ['0%', `${i * 2}rem`]);

  return (
    <motion.div
      style={{
        scale,
        top,
      }}
      className="sticky origin-top-center h-[90vh] w-full"
    >
      <div className="h-full w-full rounded-2xl shadow-2xl border border-gray-200 p-6 md:p-8 flex flex-col bg-white">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">{title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 flex-1 overflow-y-auto">
            {subFeatures.map(sf => (
                <div key={sf.title} className="p-4 rounded-lg flex flex-col group relative bg-gray-100/50 transition-all duration-300 hover:shadow-lg">
                    <div className='relative h-32 w-full rounded-md overflow-hidden mb-4'>
                        <img
                            src={sf.image}
                            alt={sf.title}
                            className="w-full h-full object-cover"
                            data-ai-hint={sf.imageHint}
                        />
                        {/* Hover Overlay with Sign Up Button */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-xl flex items-center gap-2 transition-colors">
                            Sign Up <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                    </div>
                    <h4 className="font-bold text-base md:text-lg text-gray-900">{sf.title}</h4>
                    <p className="text-sm text-gray-600 mt-1 mb-4 flex-grow">{sf.description}</p>
                    <div className="flex justify-start items-center mt-auto">
                      <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1 transition-colors">
                          Know More <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </motion.div>
  );
};