"use client";
import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";

const pillsData = [
  {
    title: "Deliver Refunds & Vouchers",
    imageUrl: "https://picsum.photos/seed/bp-1/40/40",
    description: "Instantly process refunds and issue digital vouchers with automated workflows.",
    benefits: ["Instant processing", "Automated workflows", "Real-time delivery"],
    iconPath: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
  },
  {
    title: "Employee Rewards",
    imageUrl: "https://picsum.photos/seed/bp-2/40/40",
    description: "Create custom reward programs that motivate your team with seamless payouts.",
    benefits: ["Custom programs", "Performance bonuses", "Instant payouts"],
    iconPath: "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
  },
  {
    title: "DPI Onboarding",
    imageUrl: "https://picsum.photos/seed/bp-3/40/40",
    description: "Lightning-fast KYC verification with secure, government-backed identity checks.",
    benefits: ["Fast KYC", "Secure verification", "Government-backed"],
    iconPath: "M13 10V3L4 14h7v7l9-11h-7z"
  },
  {
    title: "Bill Payment Revenue",
    imageUrl: "https://picsum.photos/seed/bp-4/40/40",
    description: "Integrate bill payments directly into your platform and earn on every transaction.",
    benefits: ["Direct integration", "Earn commissions", "Added value"],
    iconPath: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
  },
  {
    title: "Corporate Expenses",
    imageUrl: "https://picsum.photos/seed/bp-5/40/40",
    description: "Track, approve, and reimburse expenses with complete visibility and automation.",
    benefits: ["Real-time tracking", "Auto reports", "Policy enforcement"],
    iconPath: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
  },
  {
    title: "Billing Integrations",
    imageUrl: "https://picsum.photos/seed/bp-6/40/40",
    description: "Connect with major billing platforms to automate invoicing and eliminate errors.",
    benefits: ["Auto invoicing", "Zero manual entry", "API integrations"],
    iconPath: "M13 10V3L4 14h7v7l9-11h-7z M17 8l4 4m0 0l-4 4m4-4H3"
  },
  {
    title: "Customer Acquisition",
    imageUrl: "https://picsum.photos/seed/bp-1/40/40",
    description: "Turn payment touchpoints into growth opportunities with data-driven insights.",
    benefits: ["Data insights", "Smart targeting", "Growth opportunities"],
    iconPath: "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
  },
];

function FeatureCard({
  pill,
  index,
}: {
  pill: typeof pillsData[number];
  index: number;
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative h-[340px] cursor-pointer perspective-1000"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <motion.div
          className="absolute inset-0 bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-100 flex flex-col justify-between"
          style={{ backfaceVisibility: "hidden" }}
          animate={{
            scale: isHovered && !isFlipped ? 1.02 : 1,
            boxShadow: isHovered && !isFlipped 
              ? "0 20px 60px rgba(59, 130, 246, 0.3)" 
              : "0 10px 30px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <motion.div 
                className="w-14 h-14 rounded-xl bg-blue-500 flex items-center justify-center"
                animate={{ rotate: isHovered ? 360 : 0 }}
                transition={{ duration: 0.6 }}
              >
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={pill.iconPath} />
                </svg>
              </motion.div>
              <motion.div
                animate={{ rotate: isHovered ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-blue-500"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </motion.div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
              {pill.title}
            </h3>
            
            <p className="text-gray-600 text-sm leading-relaxed">
              {pill.description}
            </p>
          </div>

          <motion.div 
            className="flex items-center justify-between text-blue-600 font-semibold text-sm"
            animate={{ x: isHovered ? 5 : 0 }}
          >
            <span>Click to learn more</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.div>
        </motion.div>

        {/* Back Side */}
        <motion.div
          className="absolute inset-0 bg-blue-600 rounded-2xl p-6 shadow-2xl flex flex-col justify-between"
          style={{ 
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">
                Key Benefits
              </h3>
              <button className="text-white hover:bg-white/10 rounded-lg p-1 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <p className="text-blue-100 mb-5 leading-relaxed text-sm">
              {pill.description}
            </p>

            <div className="space-y-2.5">
              {pill.benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isFlipped ? 1 : 0, x: isFlipped ? 0 : -20 }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="flex items-center gap-2.5 text-white text-sm"
                >
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.button
            className="w-full py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors text-sm flex items-center justify-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Started
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Flip Indicator */}
      <AnimatePresence>
        {isHovered && !isFlipped && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute -top-2 -right-2 bg-blue-500 text-white px-2.5 py-1 rounded-full text-xs font-semibold shadow-lg z-10"
          >
            Click to flip!
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function BeyondPayments() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedCount, setSelectedCount] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const titleY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen py-24 bg-slate-50 overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: "spring", stiffness: 50 }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-200 rounded-full blur-3xl opacity-30"
        animate={{
          x: -mousePosition.x,
          y: -mousePosition.y,
        }}
        transition={{ type: "spring", stiffness: 50 }}
      />

      {/* Floating Particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-20"
          style={{ y: titleY }}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            
          </motion.div>

          <motion.h2 
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Beyond payments,<br />
            <span className="text-blue-600">turning roadblocks</span><br />
            into runways.
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Run lean, maximize growth and move fast. Click any card to explore detailed features and benefits.
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-4 text-sm text-gray-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                ?
              </div>
              <span>Hover and click cards to reveal more</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillsData.map((pill, index) => (
              <FeatureCard
                key={index}
                pill={pill}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.button
            className="px-12 py-5 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="absolute inset-0 bg-blue-700"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 flex items-center gap-2">
              Explore All Features
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.button>
          
          
        </motion.div>
      </div>
    </div>
  );
}