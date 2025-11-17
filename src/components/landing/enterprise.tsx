
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const partners = [
  { 
    name: 'BMW', 
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/bmw.svg',
    logoWhite: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/bmw.svg',
    stats: [
      { value: 'Millions', description: 'BMW owners using ConnectedDrive Store' },
      { value: '350+', description: 'US dealerships' }
    ],
    products: ['Payments', 'Connect'],
    story: 'Learn why BMW chose FinLanding to power e-commerce and payments',
    image: PlaceHolderImages.find(img => img.id === "enterprise-bmw")
  },
  { 
    name: 'Amazon', 
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/amazon.svg',
    logoWhite: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/amazon.svg',
    stats: [
      { value: '100M+', description: 'Prime members worldwide' },
      { value: 'Global', description: 'Marketplace reach' }
    ],
    products: ['Payments', 'Payouts', 'Treasury'],
    story: 'How Amazon uses FinLanding to optimize global payouts',
    image: PlaceHolderImages.find(img => img.id === "enterprise-amazon")
  },
  { 
    name: 'Maersk', 
    logo: 'https://cdn.worldvectorlogo.com/logos/maersk-logo.svg',
    logoWhite: 'https://cdn.worldvectorlogo.com/logos/maersk-logo.svg',
    stats: [
      { value: '190+', description: 'Countries served' },
      { value: '24/7', description: 'Real-time tracking' }
    ],
    products: ['Connect', 'Capital', 'Tax'],
    story: 'Maersk digitizes trade finance with FinLanding',
    image: PlaceHolderImages.find(img => img.id === "enterprise-maersk")
  },
  {
    name: 'Twilio', 
    logo: 'https://cdn.worldvectorlogo.com/logos/twilio-2.svg',
    logoWhite: 'https://cdn.worldvectorlogo.com/logos/twilio-2.svg',
    stats: [
      { value: '1M+', description: 'Developers on platform' },
      { value: '99.99%', description: 'API uptime' }
    ],
    products: ['Billing', 'Invoicing', 'Revenue Recognition'],
    story: 'Twilio builds flexible subscription models with FinLanding',
    image: PlaceHolderImages.find(img => img.id === "enterprise-twilio")
  },
];

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

const PartnerLogo = ({ partner, isActive, onClick }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Reset error state when partner changes
    setHasError(false);
  }, [partner.logo]);

  return (
    <button onClick={onClick} aria-label={`View ${partner.name} story`} className="h-10 flex items-center justify-center">
      {hasError ? (
        <span className={cn(
            "font-semibold text-muted-foreground transition-colors",
            isActive ? "text-foreground" : "hover:text-foreground/80"
          )}>
          {partner.name}
        </span>
      ) : (
        <Image
          src={partner.logo}
          alt={partner.name}
          width={100}
          height={40}
          className={cn(
            "grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all",
            isActive && "grayscale-0 opacity-100"
          )}
          onError={() => setHasError(true)}
        />
      )}
    </button>
  );
};

export default function Enterprise() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);
    setCurrent(api.selectedScrollSnap());

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);
  
  const handleLogoClick = (index: number) => {
    if (!api) return;
    api.scrollTo(index);
    plugin.current.stop();
  }

  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <Carousel
            setApi={setApi}
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
        >
          <CarouselContent>
            {partners.map((partner, index) => (
               <CarouselItem key={partner.name}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col justify-between">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={current}
                          initial="hidden"
                          animate={current === index ? "visible" : "hidden"}
                          exit="hidden"
                          variants={{
                            visible: { transition: { staggerChildren: 0.1 } }
                          }}
                        >
                          <motion.h2 
                            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
                            variants={textVariants}
                            custom={0}
                          >
                            Bring agility to your enterprise
                          </motion.h2>
                          <motion.p 
                            className="text-lg text-foreground/80 leading-relaxed mb-8"
                            variants={textVariants}
                            custom={1}
                          >
                            Quickly build great payments experiences, improve performance, expand into new markets, and engage customers with subscriptions and marketplaces. Get expert integration guidance from our professional services team and certified partners.
                          </motion.p>
                          <motion.div
                            variants={textVariants}
                            custom={2}
                          >
                            <Button size="lg" className="mb-16">
                              Explore FinLanding for enterprises <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </motion.div>
                        </motion.div>
                      </AnimatePresence>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {partner.stats.map((stat, i) => (
                          <AnimatePresence mode="wait" key={`${current}-${i}`}>
                            <motion.div
                              key={`${current}-${i}`}
                              initial="hidden"
                              animate={current === index ? "visible" : "hidden"}
                              custom={i + 3}
                              variants={textVariants}
                            >
                              <p className="text-sm font-semibold text-foreground/60 mb-2">{stat.value}</p>
                              <p className="text-foreground">{stat.description}</p>
                            </motion.div>
                          </AnimatePresence>
                        ))}
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={current}
                            initial="hidden"
                            animate={current === index ? "visible" : "hidden"}
                            custom={5}
                            variants={textVariants}
                          >
                            <p className="text-sm font-semibold text-foreground/60 mb-2">Products used</p>
                            <div className="flex flex-col gap-2">
                              {partner.products.map(product => (
                                <div key={product} className="flex items-center gap-2">
                                  <CheckCircle2 className="w-4 h-4 text-primary" />
                                  <span className="text-foreground">{product}</span>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>

                    <div className="relative">
                      <AnimatePresence>
                        {current === index && partner.image && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: 50 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            exit={{ opacity: 0, scale: 0.9, x: -50 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="relative rounded-2xl overflow-hidden shadow-2xl"
                          >
                            <Image
                              src={partner.image.imageUrl}
                              alt={partner.image.description}
                              width={600}
                              height={450}
                              className="w-full object-cover aspect-[4/3]"
                              data-ai-hint={partner.image.imageHint}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-blue-900/40 to-transparent"></div>
                            <div className="absolute top-6 left-6">
                              <Image src={partner.logoWhite} alt={`${partner.name} Logo`} width={40} height={40} className="filter brightness-0 invert"/>
                            </div>
                            <motion.div 
                              className="absolute bottom-0 left-0 p-8 text-white"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3, duration: 0.5 }}
                            >
                              <h3 className="text-2xl lg:text-3xl font-bold leading-tight">
                                {partner.story}
                              </h3>
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
               </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="container mx-auto max-w-7xl px-4 md:px-6 mt-24">
        <div className="border-t border-border pt-12">
           <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
              {partners.map((partner, index) => (
                <PartnerLogo
                  key={partner.name}
                  partner={partner}
                  isActive={current === index}
                  onClick={() => handleLogoClick(index)}
                />
              ))}
           </div>
        </div>
      </div>
    </section>
  );
}
    