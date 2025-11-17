"use client"
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Briefcase, ShoppingBag, Users, Building2, Bot, Mail, GraduationCap, MessageSquare, PlusSquare, Server, FileText, BarChart, Shield, Globe, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

const industries = [
  {
    id: "e-commerce",
    name: "E-Commerce",
    title: "Empower your e-commerce business",
    description: "Streamline payment management with a unified dashboard, enabling both online and in-person payment collection while enhancing conversion rates and minimizing fraud.",
    logos: ["NYKAA", "DECATHLON", "zomato", "Flipkart"],
    imageId: "industry-ecommerce",
    highlightColor: "text-green-500"
  },
  {
    id: "education",
    name: "Education",
    title: "Modernize your education ecosystem",
    description: "Simplify fee collection, manage student admissions, and automate financial operations for your educational institution, from K-12 to universities.",
    logos: ["BYJU'S", "Unacademy", "Vedantu", "Coursera"],
    imageId: "industry-education",
    highlightColor: "text-blue-500"
  },
  {
    id: "bfsi",
    name: "BFSI",
    title: "Innovate your financial services",
    description: "Enable seamless digital onboarding, automate collections & payouts, and ensure compliance with our comprehensive suite of solutions for the BFSI sector.",
    logos: ["Groww", "Zerodha", "ICICI Bank", "HDFC Bank"],
    imageId: "industry-bfsi",
    highlightColor: "text-purple-500"
  },
  {
    id: "saas",
    name: "SaaS",
    title: "Scale your SaaS business globally",
    description: "Implement flexible recurring billing, manage subscriptions effortlessly, and reduce churn with smart payment recovery tools for your SaaS platform.",
    logos: ["Zoho", "Freshworks", "Chargebee", "HubSpot"],
    imageId: "industry-saas",
    highlightColor: "text-orange-500"
  },
  {
    id: "freelancer",
    name: "Freelancer",
    title: "The personalized payment solution for freelancers",
    description: "Easily accept payments, even without a website and without any coding expertise, while also enabling the creation of your personalized, branded online store.",
    logos: ["Upwork", "Fiverr", "Toptal", "PeoplePerHour"],
    imageId: "industry-freelancers",
    highlightColor: "text-teal-500"
  }
];

const iconSets = [
    [GraduationCap, MessageSquare, PlusSquare, Server, FileText],
    [Briefcase, ShoppingBag, Users, Building2, Bot],
    [Mail, BarChart, Shield, Globe, PlusSquare]
];

const contentVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
  exit: { opacity: 0, x: 50 },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const dropdownVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto" },
  exit: { opacity: 0, height: 0 }
};

export default function IndustrySolutionsV2() {
  const [currentTab, setCurrentTab] = useState(industries[0].id);
  const [iconSetIndex, setIconSetIndex] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const interval = setInterval(() => {
      setIconSetIndex((prevIndex) => (prevIndex + 1) % iconSets.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleIndustrySelect = (industryId: string) => {
    setCurrentTab(industryId);
    setIsDropdownOpen(false);
  };

  const currentIndustry = industries.find(industry => industry.id === currentTab);

  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Powering every industry.
            </h2>
            <div className="flex justify-center items-center gap-4 mt-2">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground/80 leading-tight">
                    Powering all disruptors.
                </h2>
                 <div className="hidden md:flex items-center space-x-4">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={iconSetIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center space-x-4"
                      >
                        {iconSets[iconSetIndex].map((Icon, i) => (
                            <div key={i} className="relative group">
                                <div 
                                    className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center animate-icon-float"
                                    style={{ animationDelay: `${i * 0.2}s` }}
                                >
                                    <Icon className="w-5 h-5 text-foreground/70" />
                                </div>
                            </div>
                        ))}
                      </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>

        {/* Desktop Tabs */}
        <div className="hidden md:block">
          <Tabs defaultValue={currentTab} onValueChange={setCurrentTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:flex md:w-auto md:mx-auto">
              {industries.map((industry) => (
                <TabsTrigger key={industry.id} value={industry.id}>
                  {industry.name}
                </TabsTrigger>
              ))}
            </TabsList>
              
            <AnimatePresence mode="wait">
              {industries.map((industry) => {
                if (industry.id !== currentTab) return null;
                const image = PlaceHolderImages.find((img) => img.id === industry.imageId);
                return (
                    <TabsContent key={industry.id} value={industry.id} forceMount>
                      <motion.div
                        variants={contentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className="relative rounded-2xl min-h-[500px] flex items-center shadow-lg border"
                      >
                            {image && (
                                <Image
                                src={image.imageUrl}
                                alt={image.description}
                                fill
                                style={{ objectFit: 'cover' }}
                                data-ai-hint={image.imageHint}
                                className="rounded-xl"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent rounded-xl"></div>
                            <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-8 items-center w-full">
                                <motion.div
                                  variants={itemVariants}
                                  className="lg:col-span-2 p-8 rounded-lg bg-background shadow-2xl m-8"
                                >
                                    <motion.h3 variants={itemVariants} className="text-3xl font-bold text-foreground mb-4">
                                        Empower your <span className={industry.highlightColor}>{industry.name.toLowerCase()} business</span>
                                    </motion.h3>
                                    <motion.p variants={itemVariants} className="text-foreground/70 mb-8 leading-relaxed">{industry.description}</motion.p>
                                    <motion.div variants={itemVariants} className="flex items-center flex-wrap gap-x-6 gap-y-2 text-foreground/60 font-semibold text-sm mb-8">
                                        {industry.logos.map(logo => <span key={logo}>{logo}</span>)}
                                        <span>+ 70,000 others</span>
                                    </motion.div>
                                    <motion.div variants={itemVariants}>
                                      <Button size="lg">
                                          See Solutions <ArrowRight className="ml-2 h-4 w-4"/>
                                      </Button>
                                    </motion.div>
                                </motion.div>
                                <div className="lg:col-span-3">
                                    {/* This div is for spacing */}
                                </div>
                            </div>
                      </motion.div>
                  </TabsContent>
                )
              })}
            </AnimatePresence>
          </Tabs>
        </div>

        {/* Mobile Layout - Image First, Content Below */}
        <div className="md:hidden space-y-6">
          {/* Content for Selected Industry */}
          <AnimatePresence mode="wait">
            {currentIndustry && (
              <motion.div
                key={currentTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-background rounded-2xl shadow-lg border overflow-hidden"
              >
                {/* Image Section */}
                <div className="relative h-48 w-full">
                  {(() => {
                    const image = PlaceHolderImages.find((img) => img.id === currentIndustry.imageId);
                    return image ? (
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        fill
                        style={{ objectFit: 'cover' }}
                        data-ai-hint={image.imageHint}
                        className="rounded-t-xl"
                        sizes="100vw"
                      />
                    ) : null;
                  })()}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent rounded-t-xl"></div>
                </div>
                
                {/* Content Section - Below Image */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    Empower your <span className={currentIndustry.highlightColor}>{currentIndustry.name.toLowerCase()} business</span>
                  </h3>
                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    {currentIndustry.description}
                  </p>
                  <div className="flex items-center flex-wrap gap-x-4 gap-y-2 text-foreground/60 font-semibold text-sm mb-6">
                    {currentIndustry.logos.map(logo => (
                      <span key={logo} className="bg-secondary/50 px-2 py-1 rounded-md">
                        {logo}
                      </span>
                    ))}
                    <span className="text-foreground/40">+ 70,000 others</span>
                  </div>
                  <Button size="lg" className="w-full">
                    See Solutions <ArrowRight className="ml-2 h-4 w-4"/>
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Dropdown Menu - Below Content */}
          <div className="bg-background rounded-lg border shadow-sm">
            {/* Dropdown Trigger */}
            <Button
              variant="ghost"
              className="w-full justify-between text-lg py-4 px-6 hover:bg-secondary/50"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className="font-semibold">View Other Industries</span>
              {isDropdownOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </Button>
            
            {/* Dropdown Menu Options */}
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden border-t"
                >
                  <div className="py-2">
                    {industries
                      .filter(industry => industry.id !== currentTab)
                      .map((industry) => (
                        <button
                          key={industry.id}
                          className="w-full text-left px-6 py-3 hover:bg-secondary transition-colors text-base font-medium"
                          onClick={() => handleIndustrySelect(industry.id)}
                        >
                          {industry.name}
                        </button>
                      ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
        .animate-icon-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}