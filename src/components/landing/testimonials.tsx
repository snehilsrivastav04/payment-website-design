
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    id: "testimonial-1",
    name: "Neha Tandon Sharma",
    company: "Founder, Isadora Life",
    logo: "/logos/isadora-life.svg",
    quote: "FinLanding revolutionized our payment processing. The integration was seamless, and the support team is fantastic. Our revenue has increased by 20% since we switched!",
  },
  {
    id: "testimonial-2",
    name: "Durlabh Rawat",
    company: "Founder, Barosi",
    logo: "/logos/barosi.svg",
    quote: "The all-in-one platform is a game-changer. Managing payments, payroll, and banking in one place has saved us countless hours. Highly recommended for any growing business.",
  },
  {
    id: "testimonial-3",
    name: "Nikita Gujral",
    company: "Founder, AN Fashions",
    logo: "/logos/an-fashions.svg",
    quote: "The developer-friendly APIs and clear documentation made our integration a breeze. We were up and running in a single day. The reliability and performance are top-notch.",
  },
  {
    id: "testimonial-4",
    name: "Anusree Goenka",
    company: "Co-founder, Spark Studio",
    logo: "/logos/spark-studio.svg",
    quote: "As a small business owner, FinLanding's POS system and instant settlements have been invaluable. It's simple, affordable, and helps me manage my cash flow effectively.",
  },
  {
    id: "testimonial-5",
    name: "Nischay AG",
    company: "Co-founder, Jar",
    logo: "/logos/jar.svg",
    quote: "Switching to FinLanding was the best decision we made. The success rates are incredible, and the dashboard gives us all the insights we need to grow.",
  },
  {
    id: "testimonial-6",
    name: "Aditya Shankar",
    company: "Co-founder, Doubtnut",
    logo: "/logos/doubtnut.svg",
    quote: "The international payments feature has opened up new markets for us. It's secure, fast, and the currency conversion rates are excellent.",
  },
];

const TestimonialCard = ({ testimonial, isEven }) => {
  const image = PlaceHolderImages.find((img) => img.id === testimonial.id);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={cn(
        "w-[300px] h-[400px] flex-shrink-0 cursor-pointer group",
        isEven ? "mt-0" : "mt-16"
      )}
      style={{ perspective: '1000px' }}
      onClick={handleFlip}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Front of the card */}
        <div className="absolute w-full h-full rounded-2xl overflow-hidden shadow-lg" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
          {image && (
            <Image
              src={image.imageUrl}
              alt={testimonial.name}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              data-ai-hint={image.imageHint}
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h3 className="font-bold text-xl">{testimonial.name}</h3>
            <p className="text-base opacity-80">{testimonial.company}</p>
          </div>
          
        </div>
        
        {/* Back of the card */}
        <div className="absolute w-full h-full rounded-2xl overflow-hidden shadow-lg bg-blue-600 text-white p-8 flex flex-col justify-center items-center" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
            <p className="text-center text-lg italic leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
            <Link href="#" className="mt-6 flex items-center text-sm font-bold text-white hover:underline group/link">
                Read full story 
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" />
            </Link>
            {testimonial.logo && (
              <Image src={testimonial.logo} alt={`${testimonial.company} logo`} width={100} height={40} className="mt-8 filter brightness-0 invert opacity-70" />
            )}
        </div>
      </motion.div>
    </div>
  );
};

export default function Testimonials() {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Payme grows <span className="text-primary">with you!</span>
          </h2>
          <p className="font-semibold text-lg text-muted-foreground">
            1,50,000+ Businesses
          </p>
        </div>
      </div>

      <div className="relative h-[480px]">
        <div
          className="flex gap-8 absolute top-0 left-0 animate-marquee"
          style={{ "--marquee-duration": "60s" }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} isEven={index % 2 === 0} />
          ))}
        </div>
        <div
          className="absolute top-0 left-0 flex gap-8 animate-marquee2"
          style={{ "--marquee-duration": "60s" }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.id}-${index}-2`} testimonial={testimonial} isEven={index % 2 === 0} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-100%);
          }
        }
        @keyframes marquee2 {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0%);
          }
        }
        .animate-marquee {
          animation: marquee var(--marquee-duration) linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 var(--marquee-duration) linear infinite;
        }
        
        .relative:hover .animate-marquee,
        .relative:hover .animate-marquee2 {
           animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
