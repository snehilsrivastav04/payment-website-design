"use client";

import Navigation from '@/components/landing/navigation';
import Hero from '@/components/landing/hero';
import StackedFeatures from '@/components/landing/stacked-features';
import IndustrySolutions from '@/components/landing/industry-solutions-v2';
import BeyondPayments from '@/components/landing/beyond-payments';
import DeveloperSection from '@/components/landing/developer-section';
import Footer from '@/components/landing/footer';
import ProductSuite from '@/components/landing/product-suite';
import Enterprise from '@/components/landing/enterprise';
import BuiltForBuilders from '@/components/landing/built-for-builders';
import Recommendations from '@/components/landing/recommendations';
import LogoCloud from '@/components/landing/logo-cloud';
import InnovationSection from '@/components/landing/innovation-section';
import NoCodeProducts from '@/components/landing/no-code-products';
import Chatbot from '@/components/chatbot';
import TestimonialsV2 from '@/components/landing/testimonials-v2';
import Testimonials from '@/components/landing/testimonials';
import Faq from '@/components/landing/faq';

export default function Home() {
  return (
    <div className="flex min-h-dvh w-full flex-col bg-background">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <Recommendations />
        <LogoCloud />
        <ProductSuite />
        <StackedFeatures />
        <InnovationSection />
        <BeyondPayments />
        <IndustrySolutions />
        <Enterprise />
        <NoCodeProducts />
        <BuiltForBuilders />
        <DeveloperSection />
        <TestimonialsV2 />
        <Faq />
        <Testimonials />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
