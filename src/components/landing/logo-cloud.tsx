
"use client";
import React from 'react';
import Image from 'next/image';

const logos = [
  { name: "Unacademy", src: "https://icons8.com/icon/hHBlfqn9Oarq/unacademy.svg" }, // <-- fixed URL
  { name: "Urban Company", src: "https://cdn.worldvectorlogo.com/logos/urban-company.svg" },
  { name: "Swiggy", src: "https://cdn.worldvectorlogo.com/logos/swiggy-1.svg" },
  { name: "Paisabazaar", src: "https://cdn.worldvectorlogo.com/logos/paisabazaar.svg" },
  { name: "Nykaa", src: "https://cdn.worldvectorlogo.com/logos/nykaa-1.svg" },
  { name: "Zerodha", src: "https://cdn.worldvectorlogo.com/logos/zerodha.svg" },
  { name: "Goibibo", src: "https://cdn.worldvectorlogo.com/logos/goibibo.svg" },
  { name: "Cure.fit", src: "https://cdn.worldvectorlogo.com/logos/cure-fit.svg" },
  { name: "Shopify", src: "https://cdn.worldvectorlogo.com/logos/shopify.svg" },
  { name: "Slack", src: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" },
  { name: "Twilio", src: "https://cdn.worldvectorlogo.com/logos/twilio-2.svg" },
  { name: "OpenAI", src: "https://cdn.worldvectorlogo.com/logos/openai-2.svg" },
];

const duplicatedLogos = [...logos, ...logos];

export default function LogoCloud() {
  return (
    <div className="pb-24 space-y-4">
      <div
        className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
      >
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          {duplicatedLogos.map((logo, index) => (
            <li key={index}>
              <Image src={logo.src} alt={logo.name} width={130} height={32} className="h-8 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            </li>
          ))}
        </ul>
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
          {duplicatedLogos.map((logo, index) => (
            <li key={index}>
              <Image src={logo.src} alt={logo.name} width={130} height={32} className="h-8 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            </li>
          ))}
        </ul>
      </div>
      <div
        className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
      >
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-reverse">
          {duplicatedLogos.map((logo, index) => (
            <li key={index}>
              <Image src={logo.src} alt={logo.name} width={130} height={32} className="h-8 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            </li>
          ))}
        </ul>
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-reverse" aria-hidden="true">
          {duplicatedLogos.map((logo, index) => (
            <li key={index}>
              <Image src={logo.src} alt={logo.name} width={130} height={32} className="h-8 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            </li>
          ))}
        </ul>
      </div>
       <style jsx>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
        @keyframes infinite-scroll-reverse {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        .animate-infinite-scroll-reverse {
          animation: infinite-scroll-reverse 40s linear infinite;
        }
        .animate-infinite-scroll:hover,
        .animate-infinite-scroll-reverse:hover {
            animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
