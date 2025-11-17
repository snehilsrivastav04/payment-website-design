"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  CreditCard,
  Briefcase,
  Link,
  QrCode,
  BarChart2,
  CheckCircle,
  X,
  ShoppingCart,
  Smartphone,
  Mail,
  Building,
  Landmark,
  Repeat,
  ArrowUpRight,
  ChevronDown,
  Shield,
  Globe,
  Zap,
  Palette,
  DollarSign,
  BadgeCheck,
  Cpu,
  SmartphoneCharging,
  CreditCard as CreditCardFilled,
  BarChart3,
  Building2,
  MailCheck,
  RotateCcw,
  ShoppingBag,
  QrCodeIcon,
} from "lucide-react";

const features = [
  {
    id: "atlas",
    logo: <Briefcase className="w-8 h-8 text-orange-500" />,
    title: "Built for growth, secured for the future.",
    shortTitle: "Incorporate your company",
    description:
      "Form a legal entity, issue stock, and start accepting payments.",
    fullDescription:
      "Built to meet today's demands and tomorrow's scale, effortlessly handling high volumes while maintaining speed and security. With top-tier encryption, compliance, and a proactive approach to data protection, we keep your commerce future-ready.",
    features: [
      "Real-time transaction monitoring",
      "Detailed sales and revenue analytics",
      "End-to-end encryption for all data",
      "Automated fraud detection",
    ],
    perks: [
      { icon: <Shield className="w-6 h-6 text-orange-600" />, text: "High uptime with reliable security." },
      { icon: <Cpu className="w-6 h-6 text-orange-600" />, text: "Scalable architecture supporting millions of transactions daily." },
      { icon: <DollarSign className="w-6 h-6 text-orange-600" />, text: "Proven track record of enabling billions of transactions annually." },
      { icon: <BadgeCheck className="w-6 h-6 text-orange-600" />, text: "Compliant with PCI-DSS, ISO 27001 and SOC standards." },
    ],
    mockup: "AtlasMockup",
    color: "from-orange-50 to-orange-100",
    iconColor: "text-orange-500",
  },
  {
    id: "trust",
    logo: <CheckCircle className="w-8 h-8 text-green-500" />,
    title: "Trusted in 16+ countries, growing stronger with every connection.",
    shortTitle: "Global Trust",
    description:
      "Join thousands of businesses worldwide who trust our platform.",
    fullDescription:
      "Expand your business across the globe with our multi-currency support and international payment gateways. We handle the complexity of cross-border commerce so you can focus on your customers.",
    features: [
      "Accept payments in over 135 currencies",
      "Optimized for local payment methods",
      "Compliance with international standards like PCI DSS",
      "24/7 support across all time zones",
    ],
    perks: [
      { icon: <Globe className="w-6 h-6 text-green-600" />, text: "Available in 16+ countries worldwide" },
      { icon: <CreditCardFilled className="w-6 h-6 text-green-600" />, text: "Support for 135+ currencies" },
      { icon: <Shield className="w-6 h-6 text-green-600" />, text: "Bank-level security standards" },
      { icon: <SmartphoneCharging className="w-6 h-6 text-green-600" />, text: "24/7 global customer support" },
    ],
    mockup: "TrustMockup",
    color: "from-green-50 to-green-100",
    iconColor: "text-green-500",
  },
  {
    id: "payment-links",
    logo: <Link className="w-8 h-8 text-purple-500" />,
    title: "The engine behind effortless commerce.",
    shortTitle: "Payment Links",
    description:
      "Test your product idea by launching payments with little to no code.",
    fullDescription:
      "Our unified commerce engine connects all your payment channels, providing a single source of truth for your business operations. Automate workflows, manage inventory, and synchronize customer data across online and offline sales.",
    features: [
      "Unified online and offline payments",
      "Centralized inventory management",
      "Automated reconciliation and reporting",
      "Seamless integration with existing tools",
    ],
    perks: [
      { icon: <Zap className="w-6 h-6 text-purple-600" />, text: "Lightning-fast payment processing" },
      { icon: <Link className="w-6 h-6 text-purple-600" />, text: "Easy integration with any platform" },
      { icon: <Smartphone className="w-6 h-6 text-purple-600" />, text: "Mobile-optimized payment experience" },
      { icon: <Cpu className="w-6 h-6 text-purple-600" />, text: "Smart routing for best conversion rates" },
    ],
    mockup: "PaymentLinksMockup",
    color: "from-purple-50 to-purple-100",
    iconColor: "text-purple-500",
  },
  {
    id: "checkout",
    logo: <CreditCard className="w-8 h-8 text-blue-500" />,
    title: "Beautiful checkout experiences that convert.",
    shortTitle: "Checkout",
    description:
      "Build conversion-optimized checkout pages in minutes.",
    fullDescription:
      "Create stunning checkout experiences that convert. Our checkout solution is optimized for mobile and desktop, supports multiple payment methods, and includes built-in fraud prevention.",
    features: [
      "Mobile-optimized checkout flow",
      "Support for all major payment methods",
      "Built-in fraud prevention and 3D Secure",
      "Customizable branding and styling",
    ],
    perks: [
      { icon: <Palette className="w-6 h-6 text-blue-600" />, text: "Fully customizable design" },
      { icon: <Shield className="w-6 h-6 text-blue-600" />, text: "Advanced fraud protection" },
      { icon: <Zap className="w-6 h-6 text-blue-600" />, text: "One-click checkout available" },
      { icon: <BarChart3 className="w-6 h-6 text-blue-600" />, text: "Real-time analytics dashboard" },
    ],
    mockup: "CheckoutMockup",
    color: "from-blue-50 to-blue-100",
    iconColor: "text-blue-500",
  },
  {
    id: "billing",
    logo: <BarChart2 className="w-8 h-8 text-teal-500" />,
    title: "Launch any pricing model with ease.",
    shortTitle: "Billing",
    description:
      "Flexible billing that scales with your business.",
    fullDescription:
      "Flexible billing that scales with your business. Support subscription models, usage-based pricing, tiered plans, and hybrid pricing. Automate invoicing, dunning, and revenue recognition.",
    features: [
      "Flexible subscription and usage-based billing",
      "Automated invoicing and dunning management",
      "Revenue recognition and reporting",
      "Self-service customer portal",
    ],
    perks: [
      { icon: <DollarSign className="w-6 h-6 text-teal-600" />, text: "Multiple pricing models supported" },
      { icon: <RotateCcw className="w-6 h-6 text-teal-600" />, text: "Automated recurring billing" },
      { icon: <BarChart3 className="w-6 h-6 text-teal-600" />, text: "Revenue analytics and forecasting" },
      { icon: <BadgeCheck className="w-6 h-6 text-teal-600" />, text: "Coupon and discount management" },
    ],
    mockup: "BillingMockup",
    color: "from-teal-50 to-teal-100",
    iconColor: "text-teal-500",
},
  {
    id: "qr-payments",
    logo: <QrCode className="w-8 h-8 text-red-500" />,
    title: "Instant QR payments anywhere, anytime.",
    shortTitle: "QR Payments",
    description:
      "Accept payments instantly with dynamic QR codes.",
    fullDescription:
      "Enable seamless in-person and remote payments with dynamic QR codes. Perfect for retail stores, restaurants, events, and delivery services. Generate, share, and track QR payments in real-time.",
    features: [
      "Dynamic QR code generation",
      "Real-time payment notifications",
      "Bulk QR code creation",
      "Offline payment support",
    ],
    perks: [
      { icon: <QrCodeIcon className="w-6 h-6 text-red-600" />, text: "Instant payment processing" },
      { icon: <Smartphone className="w-6 h-6 text-red-600" />, text: "Mobile-first QR experience" },
      { icon: <Zap className="w-6 h-6 text-red-600" />, text: "No hardware required" },
      { icon: <Globe className="w-6 h-6 text-red-600" />, text: "Works with all major UPI apps" },
    ],
    mockup: "QRMockup",
    color: "from-red-50 to-red-100",
    iconColor: "text-red-500",
  },
];

const AtlasMockup = () => (
  <div className="p-4 sm:p-6 bg-white rounded-2xl h-full flex items-center justify-center">
    <div className="w-full h-full relative flex items-center justify-center">
      <div className="w-48 sm:w-56 h-72 sm:h-96 bg-gradient-to-br from-gray-900 to-gray-700 rounded-[3rem] shadow-2xl p-4 flex flex-col border-8 border-gray-800">
        <div className="w-1/3 h-6 bg-gray-800 rounded-full mx-auto mb-4"></div>
        <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-4">
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg text-center w-full">
            <p className="text-xs text-gray-500 mb-2">Transaction Summary</p>
            <p className="text-3xl font-bold text-gray-800">₹5,48,300</p>
            <div className="mt-4 flex justify-around text-xs text-gray-600">
              <span>All</span>
              <span className="text-green-600 font-semibold">Revenue</span>
              <span>Profit</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TrustMockup = () => (
  <div className="p-4 sm:p-6 bg-white rounded-2xl h-full flex items-center justify-center">
    <div className="w-full h-full relative">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {[...Array(40)].map((_, i) => {
              const x = (i % 8) * 15 + 5;
              const y = Math.floor(i / 8) * 20 + 10;
              return (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="1"
                  fill="white"
                  opacity={Math.random() * 0.5 + 0.3}
                />
              );
            })}
          </svg>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
             <Globe className="w-24 h-24 text-white/50" />
        </div>
      </div>
    </div>
  </div>
);

const PaymentLinksMockup = () => (
  <div className="p-4 sm:p-6 bg-white rounded-2xl flex items-center justify-center h-full min-h-[280px] sm:min-h-[320px]">
    <div className="w-full aspect-square relative max-w-[240px] sm:max-w-xs">
      <motion.div
        className="absolute top-1/2 left-1/2 w-20 sm:w-24 h-20 sm:h-24 -translate-x-1/2 -translate-y-1/2 z-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="w-full h-full bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl shadow-2xl flex items-center justify-center">
            <Link className="w-10 h-10 text-white" />
        </div>
      </motion.div>

      {[
        { icon: ShoppingBag, angle: 0, delay: 0.5 },
        { icon: Smartphone, angle: 60, delay: 0.6 },
        { icon: MailCheck, angle: 120, delay: 0.7 },
        { icon: Landmark, angle: 180, delay: 0.8 },
        { icon: Building2, angle: 240, delay: 0.9 },
        { icon: RotateCcw, angle: 300, delay: 1.0 },
      ].map(({ icon: Icon, angle, delay }) => {
        const radius = 100;
        const x = 50 + (radius / 2.5) * Math.cos((angle * Math.PI) / 180);
        const y = 50 + (radius / 2.5) * Math.sin((angle * Math.PI) / 180);

        return (
          <motion.div
            key={angle}
            className="absolute w-10 sm:w-14 h-10 sm:h-14 bg-white shadow-lg rounded-xl flex items-center justify-center text-gray-600"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay }}
          >
            <Icon className="w-5 sm:w-7 h-5 sm:h-7" />
          </motion.div>
        );
      })}

      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        {[0, 60, 120, 180, 240, 300].map((angle) => {
          const radius = 100 / 2.5;
          const x1 = 50 + radius * Math.cos((angle * Math.PI) / 180);
          const y1 = 50 + radius * Math.sin((angle * Math.PI) / 180);

          return (
            <motion.line
              key={angle}
              x1="50"
              y1="50"
              x2={x1}
              y2={y1}
              stroke="#e5e7eb"
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 1.2 + angle / 600 }}
            />
          );
        })}
      </svg>
    </div>
  </div>
);

const CheckoutMockup = () => (
    <div className="p-4 sm:p-6 bg-white rounded-2xl h-full flex items-center justify-center">
    <div className="w-full max-w-sm mx-auto bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-gray-900">Complete Payment</h3>
        <div className="flex space-x-1">
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="bg-white rounded-xl p-4 border border-gray-200">
          <div className="flex justify-between items-start mb-3">
            <span className="text-sm font-medium text-gray-700">Order Total</span>
            <span className="text-2xl font-bold text-gray-900">₹4,299.00</span>
          </div>
          <div className="text-xs text-gray-500">Including all taxes and charges</div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-xl p-4 border-2 border-blue-500 flex flex-col items-center">
            <CreditCard className="w-8 h-8 text-blue-600 mb-2" />
            <span className="text-sm font-medium text-gray-900">Card</span>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200 flex flex-col items-center">
            <QrCodeIcon className="w-8 h-8 text-gray-600 mb-2" />
            <span className="text-sm font-medium text-gray-700">QR</span>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200 flex flex-col items-center">
            <Building2 className="w-8 h-8 text-gray-600 mb-2" />
            <span className="text-sm font-medium text-gray-700">UPI</span>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200 flex flex-col items-center">
            <Smartphone className="w-8 h-8 text-gray-600 mb-2" />
            <span className="text-sm font-medium text-gray-700">Wallet</span>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
          <div className="flex items-center space-x-3">
            <Shield className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-blue-800 font-medium">Your payment is secure and encrypted</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const BillingMockup = () => (
    <div className="p-4 sm:p-6 bg-white rounded-2xl h-full flex items-center justify-center">
    <div className="w-full max-w-sm mx-auto">
      <div className="flex justify-between items-baseline mb-6">
        <div>
          <p className="text-xs text-gray-500">Provisioned</p>
          <p className="text-2xl font-bold text-gray-800">80,250,068</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Committed</p>
          <p className="text-2xl font-bold text-gray-800">68,401,224</p>
        </div>
      </div>
      <div className="w-full h-40 text-teal-500">
        <BarChart2 className="w-full h-full" />
      </div>
    </div>
  </div>
);

const QRMockup = () => (
    <div className="p-4 sm:p-6 bg-white rounded-2xl h-full flex items-center justify-center">
    <div className="w-full max-w-sm mx-auto bg-gradient-to-br from-slate-900 to-slate-700 rounded-2xl p-6 shadow-2xl">
      <div className="text-center mb-4">
        <h3 className="text-white font-bold text-lg mb-1">Scan to Pay</h3>
        <p className="text-slate-300 text-sm">Amount: ₹1,499.00</p>
      </div>
      
      <div className="bg-white p-4 rounded-xl mb-4 flex justify-center">
        <div className="w-48 h-48 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300">
          <div className="text-center">
            <QrCodeIcon className="w-16 h-16 text-gray-400 mx-auto mb-2" />
            <p className="text-xs text-gray-500">Dynamic QR Code</p>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="w-2 h-2 bg-red-400 rounded-full"></div>
        </div>
        <div className="text-slate-300 text-xs">Valid for 10:00 mins</div>
      </div>
    </div>
  </div>
);

const mockups: { [key: string]: React.FC } = {
  AtlasMockup,
  TrustMockup,
  PaymentLinksMockup,
  CheckoutMockup,
  BillingMockup,
  QRMockup,
};

export default function ProductSuite() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const expandedCardRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (expandedCard && expandedCardRef.current) {
      expandedCardRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
    }
  }, [expandedCard]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-12 sm:py-20 relative">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-1 sm:mb-2">
            Choose the platform
          </h1>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-500">
            that simply works.
          </h2>
        </div>

        {/* Expanded Card View */}
        <div ref={expandedCardRef} className="relative min-h-[1px]">
        <AnimatePresence>
          {expandedCard && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-8 overflow-hidden sticky top-24 z-20"
            >
              {(() => {
                const feature = features.find((f) => f.id === expandedCard);
                if (!feature) return null;
                const MockupComponent = mockups[feature.mockup as keyof typeof mockups];

                return (
                  <motion.div
                    layoutId={`card-container-${expandedCard}`}
                    className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200"
                  >
                    <div className="flex items-start justify-between p-6 border-b border-gray-200">
                      <div className="flex items-center gap-4">
                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-3 shadow-md">
                          {feature.logo}
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900">
                            {feature.title}
                          </h2>
                          <p className="text-gray-600 mt-1">{feature.description}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setExpandedCard(null)}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                      >
                        <X className="w-6 h-6 text-gray-600" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 h-[600px]">
                      <div className={`bg-gradient-to-br ${feature.color} rounded-2xl shadow-lg`}>
                        {MockupComponent && <MockupComponent />}
                      </div>

                      <div className="space-y-6">
                        <div>
                          <p className="text-gray-700 text-lg leading-relaxed">
                            {feature.fullDescription}
                          </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {feature.perks.map((perk, idx) => (
                            <div
                              key={idx}
                              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 border border-gray-200 hover:shadow-md transition-shadow"
                            >
                              <div className="flex items-center gap-3">
                                {React.cloneElement(perk.icon, {className: perk.icon.props.className?.replace('fill-current', '')})}
                                <p className="text-sm text-gray-700 font-medium">{perk.text}</p>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div>
                          <h4 className="text-xl font-bold text-gray-800 mb-4">
                            Key Features
                          </h4>
                          <ul className="space-y-3">
                            {feature.features.map((feat, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-3 text-gray-700"
                              >
                                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })()}
            </motion.div>
          )}
        </AnimatePresence>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              layoutId={`card-container-${feature.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => {
                setExpandedCard(expandedCard === feature.id ? null : feature.id);
              }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100"
            >
                <div className={`p-6 bg-gradient-to-br ${feature.color}`}>
                    <div className="flex items-start justify-between mb-4">
                    <div className="bg-white rounded-xl p-3 shadow-md">
                        {React.cloneElement(feature.logo, {
                            className: `w-6 h-6 ${feature.iconColor}`,
                        })}
                    </div>
                    <div className="w-9 h-9 bg-black/10 rounded-full flex items-center justify-center hover:bg-black/20 transition-colors shadow-sm">
                        <ChevronDown className={`w-5 h-5 text-gray-800 transition-transform ${expandedCard === feature.id ? "rotate-180" : ""}`} />
                    </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 leading-snug mb-2">
                    {feature.title}
                    </h3>
                    <p className="text-gray-700 text-sm">{feature.description}</p>
                </div>

                <div className="p-5 space-y-3 bg-white">
                    {feature.perks.slice(0, 2).map((perk, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                        <div className="flex-shrink-0">
                         {React.cloneElement(perk.icon, {className: perk.icon.props.className?.replace('fill-current', '')})}
                        </div>
                        <p className="text-sm text-gray-600">{perk.text}</p>
                    </div>
                    ))}
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

    