
"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Code, Layers, GitBranch, Terminal } from 'lucide-react';
import { Star } from 'lucide-react';

const text = "Built for the builders. Our cutting-edge solutions simplify complex integrations, helping you deploy, scale and optimise with ease. With seamless connectivity, open APIs for limitless possibilities and next-gen tools, we put you in control of your business, inside-out.";

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const color = useTransform(progress, range, ["hsl(0, 0%, 70%)", "hsl(0, 0%, 100%)"]);
  return (
    <motion.span style={{ opacity, color }} className="relative">
      {children}
    </motion.span>
  )
}

const TextReveal = ({ value }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.7", "end 0.3"],
  });

  const words = value.split(" ");
  return (
    <p ref={targetRef} className="text-4xl md:text-5xl font-medium leading-tight text-gray-300 flex flex-wrap">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        return (
          <span key={i} className="mr-3 mt-3">
            <Word progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          </span>
        )
      })}
    </p>
  )
}


const Card = ({ card, index }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [-0.5, 0.5], ['20%', '80%']);
  const left = useTransform(mouseXSpring, [-0.5, 0.5], ['20%', '80%']);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['12deg', '-12deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-12deg', '12deg']);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
      className="relative aspect-[3/4] bg-gradient-to-b from-white/5 to-transparent rounded-2xl border border-white/10 p-4 overflow-hidden group"
    >
      <div 
        className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-100 opacity-0"
        style={{
          background: `radial-gradient(300px circle at ${left} ${top}, hsl(148, 88%, 50%, 0.15), transparent 40%)`
        }}
      />
      <div 
        className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-100 opacity-0"
        style={{
          maskImage: `radial-gradient(200px circle at ${left} ${top}, white, transparent)`
        }}
      >
        <div className="absolute inset-0 border border-emerald-400/50 rounded-2xl" />
      </div>

      <div className="relative z-10 h-full flex flex-col">
        <div className="flex items-center gap-2">
          <card.icon className="w-4 h-4 text-emerald-300" />
          <h4 className="text-xs font-medium text-emerald-200">{card.title}</h4>
        </div>
        
        <div className="mt-4 flex-grow flex items-center justify-center">
            {card.interactiveElement}
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent opacity-50"></div>
    </motion.div>
  )
}

const cards = [
  {
    icon: Layers,
    title: 'UI Components',
    interactiveElement: (
       <div className="grid grid-cols-2 gap-3 w-full p-4">
            <div className="h-16 bg-emerald-900/50 border border-emerald-300/20 rounded-lg flex items-center justify-center text-emerald-400/50">
                <Star className="w-6 h-6" />
            </div>
            <div className="h-16 bg-emerald-900/50 border border-emerald-300/20 rounded-lg flex flex-col items-center justify-center p-2">
                <div className="w-full h-2 bg-emerald-300/30 rounded-sm mb-2"></div>
                <div className="w-2/3 h-2 bg-emerald-300/30 rounded-sm"></div>
            </div>
            <div className="h-10 col-span-2 bg-emerald-900/50 border border-emerald-300/20 rounded-lg flex items-center justify-center">
                <div className="w-1/3 h-4 bg-emerald-300/60 rounded-md"></div>
            </div>
        </div>
    ),
  },
  {
    icon: GitBranch,
    title: 'Version Control',
     interactiveElement: (
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center gap-2 text-emerald-300/50">
            <GitBranch className="w-6 h-6"/>
            <span className="font-mono text-sm">main</span>
        </div>
        <div className="w-32 h-8 bg-emerald-900/50 border border-emerald-300/20 rounded-lg flex items-center justify-center font-mono text-xs text-emerald-300/80">
            Commit Changes
        </div>
        <div className="flex items-center gap-2 text-emerald-300/50">
            <div className="w-2 h-2 rounded-full bg-emerald-400/50"></div>
            <span className="font-mono text-xs">2 files changed</span>
        </div>
      </div>
    ),
  },
  {
    icon: Code,
    title: 'API Playground',
    interactiveElement: (
       <div className="w-full p-4 font-mono text-xs text-emerald-200/60">
            <p>&gt; curl https://api.payme.com/v1/...</p>
            <p className="mt-2 text-emerald-100/90">{`{ "status": "success" }`}</p>
            <div className="w-full h-2 bg-emerald-300/60 rounded-sm mt-4 animate-pulse"></div>
       </div>
    ),
  },
  {
    icon: Terminal,
    title: 'CLI Tools',
     interactiveElement: (
      <div className="w-full p-4 font-mono text-xs text-emerald-200/60 flex flex-col gap-2">
        <p className="text-emerald-400/80">$ payme deploy --prod</p>
        <p><span className="text-emerald-400/50">LOG</span>  Building project...</p>
        <p><span className="text-green-400/80">DONE</span> Deployed to production.</p>
      </div>
    ),
  },
]

export default function BuiltForBuilders() {
  
  return (
    <section 
      className="bg-[#0A181E] text-white py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,150,0.07)_0%,_transparent_40%)]"></div>
      <div className="container mx-auto max-w-4xl px-6 text-center relative z-10">
        <TextReveal value={text} />
      </div>
      <div className="container mx-auto max-w-6xl px-6 mt-20 relative z-10">
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {cards.map((card, i) => (
              <Card card={card} index={i} key={i} />
            ))}
         </div>
      </div>
    </section>
  )
}

    