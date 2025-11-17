"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowRight, CreditCard, Smartphone, QrCode, Wallet } from "lucide-react";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const slides = [
  {
    personImage: PlaceHolderImages.find(p => p.id === 'hero-ghazal')!.imageUrl,
    personName: "Ghazal Alagh",
    personTitle: "MAMAEARTH FOUNDER",
    productImage: PlaceHolderImages.find(p => p.id === 'hero-mamaearth')!.imageUrl,
    productName: "Body Lotion",
    productPrice: "₹ 455",
    brand: "mamaearth",
    bgColor: "bg-blue-600",
    mockupType: "card-payment",
    mockupColor: "from-blue-500 to-blue-700",
    signature: PlaceHolderImages.find(p => p.id === 'hero-ghazal-sign')!.imageUrl,
  },
  {
    personImage: PlaceHolderImages.find(p => p.id === 'hero-aman')!.imageUrl,
    personName: "Aman Gupta",
    personTitle: "BOAT FOUNDER",
    productImage: PlaceHolderImages.find(p => p.id === 'hero-boat')!.imageUrl,
    productName: "Airdopes 131",
    productPrice: "₹ 1,299",
    brand: "boAt",
    bgColor: "bg-red-600",
    mockupType: "mobile-payment",
    mockupColor: "from-red-500 to-red-700",
    signature: PlaceHolderImages.find(p => p.id === 'hero-aman-sign')!.imageUrl,
  },
  {
    personImage: PlaceHolderImages.find(p => p.id === 'hero-rahul')!.imageUrl,
    personName: "Rahul Sharma",
    personTitle: "NOISE FOUNDER",
    productImage: PlaceHolderImages.find(p => p.id === 'hero-noise')!.imageUrl,
    productName: "Smart Watch",
    productPrice: "₹ 2,999",
    brand: "Noise",
    bgColor: "bg-purple-600",
    mockupType: "qr-payment",
    mockupColor: "from-purple-500 to-purple-700",
    signature: PlaceHolderImages.find(p => p.id === 'hero-rahul-sign')!.imageUrl,
  },
  {
    personImage: PlaceHolderImages.find(p => p.id === 'hero-falguni')!.imageUrl,
    personName: "Falguni Nayar",
    personTitle: "NYKAA FOUNDER",
    productImage: PlaceHolderImages.find(p => p.id === 'hero-nykaa')!.imageUrl,
    productName: "Lipstick Set",
    productPrice: "₹ 899",
    brand: "Nykaa",
    bgColor: "bg-pink-600",
    mockupType: "wallet-payment",
    mockupColor: "from-pink-500 to-pink-700",
    signature: PlaceHolderImages.find(p => p.id === 'hero-falguni-sign')!.imageUrl,
  },
];

const MockupComponents = {
  "card-payment": ({ slide, className }: { slide: any; className?: string }) => (
    <Card className={`w-full max-w-[200px] transform-gpu transition-transform hover:scale-105 shadow-2xl ${className}`}>
      <CardContent className="p-0">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-2 rounded-t-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold text-sm text-white">Card Payment</p>
            </div>
            <CreditCard className="w-5 h-5 text-white" />
          </div>
        </div>
        <div className="bg-white p-3">
          <div className="flex items-center gap-2 mb-2">
            <Image
              src={slide.productImage}
              alt={slide.productName}
              width={40}
              height={40}
              className="rounded-md border"
            />
            <div>
              <p className="font-semibold text-xs text-gray-800">{slide.productName}</p>
              <p className="font-bold text-sm text-gray-900">{slide.productPrice}</p>
            </div>
          </div>
          
          <Button size="sm" className="w-full mt-2 bg-blue-600 hover:bg-blue-700 h-8 text-xs">
            Pay Now
          </Button>
        </div>
      </CardContent>
    </Card>
  ),

  "mobile-payment": ({ slide, className }: { slide: any; className?: string }) => (
    <div className={`w-full max-w-[180px] bg-white rounded-2xl shadow-2xl p-2 transform-gpu transition-transform hover:scale-105 ${className}`}>
      <div className="w-16 h-4 bg-black rounded-b-lg mx-auto"></div>
      <div className="p-2">
        <div className="text-center mb-2">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-1">
            <Smartphone className="w-4 h-4 text-white" />
          </div>
          <h3 className="font-bold text-sm text-gray-800">UPI Payment</h3>
        </div>
        <div className="bg-gray-50 rounded-lg p-2 mb-2">
          <div className="flex items-center gap-2">
            <Image
              src={slide.productImage}
              alt={slide.productName}
              width={32}
              height={32}
              className="rounded-md"
            />
            <div className="flex-1">
              <p className="font-semibold text-[10px] text-gray-800">{slide.productName}</p>
              <p className="font-bold text-xs text-gray-900">{slide.productPrice}</p>
            </div>
          </div>
        </div>
        <Button size="sm" className="w-full bg-green-600 hover:bg-green-700 rounded-full h-8 text-xs">
          Pay with UPI
        </Button>
      </div>
    </div>
  ),

  "qr-payment": ({ slide, className }: { slide: any; className?: string }) => (
     <Card className={`w-full max-w-[200px] transform-gpu transition-transform hover:scale-105 shadow-2xl p-3 ${className}`}>
      <CardContent className="p-0">
        <div className="text-center mb-2">
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-1">
                <QrCode className="w-4 h-4 text-white" />
            </div>
            <h3 className="font-bold text-sm text-gray-800">Scan & Pay</h3>
        </div>
        <div className="bg-gray-900 p-2 rounded-lg mb-2 flex items-center justify-center">
            <div className="w-20 h-20 bg-white rounded border-2 border-white flex items-center justify-center">
                <QrCode className="w-12 h-12 text-gray-600" />
            </div>
        </div>
        <div className="text-center">
          <p className="text-[10px] text-gray-500">Powered by {slide.brand}</p>
        </div>
      </CardContent>
    </Card>
  ),

  "wallet-payment": ({ slide, className }: { slide: any; className?: string }) => (
    <Card className={`w-full max-w-[200px] transform-gpu transition-transform hover:scale-105 shadow-2xl ${className}`}>
      <CardContent className="p-0">
        <div className="bg-gradient-to-r from-pink-500 to-pink-600 p-2 rounded-t-lg">
          <div className="flex items-center justify-between">
            <p className="font-bold text-sm text-white">Digital Wallet</p>
            <Wallet className="w-5 h-5 text-white" />
          </div>
        </div>
        <div className="p-3">
          <div className="bg-gray-50 rounded-md p-2 mb-2">
            <p className="text-[10px] text-gray-600">Balance</p>
            <p className="font-bold text-sm">₹ 1,245.50</p>
          </div>
          <RadioGroup defaultValue="wallet" className="space-y-1 mb-2">
            <div className="flex items-center justify-between p-1 hover:bg-gray-50 rounded text-xs">
              <Label htmlFor="wallet-option">Use Wallet</Label>
              <RadioGroupItem value="wallet" id="wallet-option" />
            </div>
            <div className="flex items-center justify-between p-1 hover:bg-gray-50 rounded text-xs">
               <Label htmlFor="add-option">Add & Pay</Label>
              <RadioGroupItem value="add" id="add-option" />
            </div>
          </RadioGroup>
          <Button size="sm" className="w-full bg-pink-600 hover:bg-pink-700 h-8 text-xs">
            Pay with Wallet
          </Button>
        </div>
      </CardContent>
    </Card>
  ),
};

export default function Hero() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white pt-12 pb-24 sm:pt-16 lg:pt-20 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {slides.map((slide, index) => {
              const MockupComponent = MockupComponents[slide.mockupType as keyof typeof MockupComponents];
              
              return (
                <CarouselItem key={index}>
                  <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                    {/* Left Content */}
                    <div className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
                      <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                        Advanced Payment Solutions for India&apos;s boldest disruptors
                      </h1>
                      <p className="mt-4 max-w-2xl text-lg text-foreground/70">
                        100+ Payment Methods | Easy Integration | Powerful Dashboard
                      </p>
                      <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
                        <Button size="lg">
                          Sign Up Now <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button size="lg" variant="ghost">
                          Know More
                        </Button>
                      </div>
                       <div className="mt-10 w-full">
                         <p className="text-sm text-center lg:text-left text-foreground/60 mb-3">Accept all payment methods:</p>
                         <div className="flex justify-center lg:justify-start items-center gap-4">
                            <div className="flex items-center gap-2 p-2 rounded-md bg-white/50 border">
                                <CreditCard className="w-5 h-5 text-blue-600" />
                                <span className="text-sm font-medium text-foreground">Card</span>
                            </div>
                             <div className="flex items-center gap-2 p-2 rounded-md bg-white/50 border">
                                <Smartphone className="w-5 h-5 text-green-600" />
                                <span className="text-sm font-medium text-foreground">UPI</span>
                            </div>
                             <div className="flex items-center gap-2 p-2 rounded-md bg-white/50 border">
                                <QrCode className="w-5 h-5 text-purple-600" />
                                <span className="text-sm font-medium text-foreground">QR</span>
                            </div>
                            <div className="flex items-center gap-2 p-2 rounded-md bg-white/50 border">
                                <Wallet className="w-5 h-5 text-pink-600" />
                                <span className="text-sm font-medium text-foreground">Wallet</span>
                            </div>
                         </div>
                       </div>
                    </div>

                    {/* Right Mockup */}
                    <div className="relative h-[500px] w-full lg:h-[600px] flex items-center justify-center">
                        
                        <div className="relative w-full h-full z-10 flex items-center justify-center">
                           <div className="absolute left-0 bottom-1/4 sm:bottom-1/3 z-20 text-center">
                                <p className="text-xs font-bold tracking-widest text-gray-500 uppercase">{slide.personTitle}</p>
                                <Image src={slide.signature} alt={`${slide.personName} signature`} width={120} height={60} className="mx-auto filter grayscale opacity-60" />
                           </div>

                            <Image
                                src={slide.personImage}
                                alt={slide.personName}
                                width={350}
                                height={600}
                                className="object-contain object-bottom"
                            />
                        </div>
                        
                         {/* Floating Mockup for Mobile */}
                        <div className="absolute bottom-10 right-0 sm:bottom-24 sm:right-10 z-20">
                          <MockupComponent slide={slide} />
                        </div>
                    </div>

                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2" />
        </Carousel>
      </div>
    </section>
  );
}
