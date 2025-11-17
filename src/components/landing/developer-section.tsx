"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Circle, Play, Pause, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

const languages = [
  {
    name: "Ruby",
    code: [
      "require 'payme'",
      "payme.api_key = 'sk_test_4eC39HqLyjWDarjtT1zdp7dc'",
      "",
      "payme::PaymentIntent.create(",
      "  amount: 2000,",
      "  currency: 'usd',",
      "  automatic_payment_methods: {",
      "    enabled: true,",
      "  },",
      ")"
    ],
    suggestions: [
      { text: "PaymentIntent", description: "Create and manage payment intents", type: "class" },
      { text: "Charge", description: "Create a new charge", type: "class" },
      { text: "Customer", description: "Manage customer profiles", type: "class" },
      { text: "Refund", description: "Process refunds", type: "class" },
      { text: "Subscription", description: "Handle recurring payments", type: "class" },
      { text: "Invoice", description: "Create and send invoices", type: "class" },
      { text: "Product", description: "Manage products and prices", type: "class" },
      { text: "Webhook", description: "Handle webhook events", type: "class" }
    ],
    suggestionPoints: [
      { line: 3, col: 8, suggestions: ["PaymentIntent", "Charge", "Customer", "Refund"] }
    ]
  },
  {
    name: "Python",
    code: [
      "import payme",
      "payme.api_key = 'sk_test_4eC39HqLyjWDarjtT1zdp7dc'",
      "",
      "payme.PaymentIntent.create(",
      "  amount=2000,",
      "  currency='usd',",
      "  automatic_payment_methods={",
      "    'enabled': True,",
      "  },",
      ")"
    ],
    suggestions: [
      { text: "PaymentIntent", description: "Create and manage payment intents", type: "class" },
      { text: "Charge", description: "Create a new charge", type: "class" },
      { text: "Customer", description: "Manage customer profiles", type: "class" },
      { text: "Refund", description: "Process refunds", type: "class" },
      { text: "Subscription", description: "Handle recurring payments", type: "class" },
      { text: "Invoice", description: "Create and send invoices", type: "class" },
      { text: "Product", description: "Manage products and prices", type: "class" },
      { text: "Webhook", description: "Handle webhook events", type: "class" }
    ],
    suggestionPoints: [
      { line: 3, col: 7, suggestions: ["PaymentIntent", "Charge", "Customer", "Refund"] }
    ]
  },
  {
    name: "PHP",
    code: [
      "<?php",
      "require 'vendor/autoload.php';",
      "\\payme\\payme::setApiKey('sk_test_4eC39HqLyjWDarjtT1zdp7dc');",
      "",
      "\\payme\\PaymentIntent::create([",
      "  'amount' => 2000,",
      "  'currency' => 'usd',",
      "  'automatic_payment_methods' => [",
      "    'enabled' => true,",
      "  ],",
      "]);"
    ],
    suggestions: [
      { text: "PaymentIntent", description: "Create and manage payment intents", type: "class" },
      { text: "Charge", description: "Create a new charge", type: "class" },
      { text: "Customer", description: "Manage customer profiles", type: "class" },
      { text: "Refund", description: "Process refunds", type: "class" },
      { text: "Subscription", description: "Handle recurring payments", type: "class" },
      { text: "Invoice", description: "Create and send invoices", type: "class" },
      { text: "Product", description: "Manage products and prices", type: "class" },
      { text: "Webhook", description: "Handle webhook events", type: "class" }
    ],
    suggestionPoints: [
      { line: 4, col: 9, suggestions: ["PaymentIntent", "Charge", "Customer", "Refund"] }
    ]
  },
  {
    name: "Node",
    code: [
      "const payme = require('payme')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');",
      "",
      "const paymentIntent = await payme.paymentIntents.create({",
      "  amount: 2000,",
      "  currency: 'usd',",
      "  automatic_payment_methods: {",
      "    enabled: true,",
      "  },",
      "});"
    ],
    suggestions: [
      { text: "paymentIntents", description: "Create and manage payment intents", type: "method" },
      { text: "charges", description: "Create a new charge", type: "method" },
      { text: "customers", description: "Manage customer profiles", type: "method" },
      { text: "refunds", description: "Process refunds", type: "method" },
      { text: "subscriptions", description: "Handle recurring payments", type: "method" },
      { text: "invoices", description: "Create and send invoices", type: "method" },
      { text: "products", description: "Manage products and prices", type: "method" },
      { text: "webhookEndpoints", description: "Handle webhook events", type: "method" }
    ],
    suggestionPoints: [
      { line: 2, col: 40, suggestions: ["paymentIntents", "charges", "customers", "refunds"] }
    ]
  },
  {
    name: "Java",
    code: [
      "import com.payme.payme;",
      "import com.payme.model.PaymentIntent;",
      "import com.payme.param.PaymentIntentCreateParams;",
      "",
      "payme.apiKey = \"sk_test_4eC39HqLyjWDarjtT1zdp7dc\";",
      "",
      "PaymentIntentCreateParams params =",
      "  PaymentIntentCreateParams.builder()",
      "    .setAmount(2000L)",
      "    .setCurrency(\"usd\")",
      "    .build();",
      "",
      "PaymentIntent intent = PaymentIntent.create(params);"
    ],
    suggestions: [
      { text: "PaymentIntent", description: "Create and manage payment intents", type: "class" },
      { text: "Charge", description: "Create a new charge", type: "class" },
      { text: "Customer", description: "Manage customer profiles", type: "class" },
      { text: "Refund", description: "Process refunds", type: "class" },
      { text: "Subscription", description: "Handle recurring payments", type: "class" },
      { text: "Invoice", description: "Create and send invoices", type: "class" },
      { text: "Product", description: "Manage products and prices", type: "class" },
      { text: "Webhook", description: "Handle webhook events", type: "class" }
    ],
    suggestionPoints: [
      { line: 1, col: 27, suggestions: ["PaymentIntent", "Charge", "Customer", "Refund"] }
    ]
  },
  {
    name: "Go",
    code: [
      "package main",
      "",
      "import (",
      "  \"github.com/payme/payme-go/v76\"",
      "  \"github.com/payme/payme-go/v76/paymentintent\"",
      ")",
      "",
      "func main() {",
      "  payme.Key = \"sk_test_4eC39HqLyjWDarjtT1zdp7dc\"",
      "  ",
      "  params := &payme.PaymentIntentParams{",
      "    Amount:   payme.Int64(2000),",
      "    Currency: payme.String(\"usd\"),",
      "  }",
      "  ",
      "  intent, _ := paymentintent.New(params)",
      "}"
    ],
    suggestions: [
      { text: "paymentintent", description: "Create and manage payment intents", type: "package" },
      { text: "charge", description: "Create a new charge", type: "package" },
      { text: "customer", description: "Manage customer profiles", type: "package" },
      { text: "refund", description: "Process refunds", type: "package" },
      { text: "subscription", description: "Handle recurring payments", type: "package" },
      { text: "invoice", description: "Create and send invoices", type: "package" },
      { text: "product", description: "Manage products and prices", type: "package" },
      { text: "webhook", description: "Handle webhook events", type: "package" }
    ],
    suggestionPoints: [
      { line: 4, col: 40, suggestions: ["paymentintent", "charge", "customer", "refund"] }
    ]
  }
];

const highlightCode = (line: string) => {
  if (!line) return '';
  
  let result = line;
  const replacements: Array<{index: number, length: number, html: string}> = [];
  
  // Find strings
  const stringPattern = /(['"])(?:(?=(\\?))\2.)*?\1/g;
  let match;
  while ((match = stringPattern.exec(line)) !== null) {
    replacements.push({
      index: match.index,
      length: match[0].length,
      html: `<span class="text-emerald-400">${escapeHtml(match[0])}</span>`
    });
  }
  
  // Find numbers (not inside strings)
  const numberPattern = /\b\d+L?\b/g;
  while ((match = numberPattern.exec(line)) !== null) {
    if (!isInsideReplacement(match.index, replacements)) {
      replacements.push({
        index: match.index,
        length: match[0].length,
        html: `<span class="text-orange-400">${match[0]}</span>`
      });
    }
  }
  
  // Find keywords
  const keywords = ['require', 'import', 'const', 'await', 'new', 'true', 'false', 'True', 'False', 'package', 'func'];
  keywords.forEach(keyword => {
    const pattern = new RegExp(`\\b${keyword}\\b`, 'g');
    while ((match = pattern.exec(line)) !== null) {
      if (!isInsideReplacement(match.index, replacements)) {
        replacements.push({
          index: match.index,
          length: match[0].length,
          html: `<span class="text-purple-400">${match[0]}</span>`
        });
      }
    }
  });
  
  // Sort replacements by index in reverse order
  replacements.sort((a, b) => b.index - a.index);
  
  // Apply replacements from end to start
  for (const replacement of replacements) {
    result = result.substring(0, replacement.index) + 
             replacement.html + 
             result.substring(replacement.index + replacement.length);
  }
  
  // Escape remaining HTML
  result = result.replace(/[^<>]*(?=<)|[^<>]+$/g, (match) => escapeHtml(match));
  
  // Highlight properties after dots
  result = result.replace(/\.(\w+)/g, (match, prop) => {
    if (match.includes('<span')) return match;
    return `.<span class="text-yellow-300">${prop}</span>`;
  });
  
  return result;
};

const escapeHtml = (text: string) => {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
};

const isInsideReplacement = (index: number, replacements: Array<{index: number, length: number}>) => {
  return replacements.some(r => index >= r.index && index < r.index + r.length);
};

const LanguageCarousel = () => {
  const tech = ["JAVA", "PYTHON", "PHP", "NODE.JS", "CURL", "GO", "RUBY"];
  const duplicatedTech = [...tech, ...tech, ...tech, ...tech];

  return (
    <div className="bg-emerald-600 text-white overflow-hidden py-3">
      <div className="flex animate-marquee-fast whitespace-nowrap">
        {duplicatedTech.map((language, index) => (
          <div key={index} className="flex items-center">
            <span className="mx-4 text-sm font-semibold tracking-wider">{language}</span>
            <span className="text-emerald-300">•</span>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee-fast {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee-fast {
          animation: marquee-fast 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default function DeveloperSection() {
  const [currentLangIndex, setCurrentLangIndex] = useState(0);
  const [lines, setLines] = useState<string[]>([]);
  const [showCursor, setShowCursor] = useState(true);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = useState(0);
  const [currentSuggestionPoint, setCurrentSuggestionPoint] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [typingPhase, setTypingPhase] = useState<'typing' | 'suggesting' | 'completed'>('typing');

  const lang = languages[currentLangIndex];
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const suggestionIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const restartTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const clearAllTimeouts = useCallback(() => {
    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    if (suggestionIntervalRef.current) clearInterval(suggestionIntervalRef.current);
    if (restartTimeoutRef.current) clearTimeout(restartTimeoutRef.current);
  }, []);

  const startTypingAnimation = useCallback(() => {
    clearAllTimeouts();
    
    let currentLine = 0;
    let currentChar = 0;
    let currentSuggestionIndex = 0;
    let isAnimating = true;
    
    // Initialize
    setLines([]);
    setShowSuggestions(false);
    setTypingPhase('typing');
    setCurrentSuggestionPoint(0);
    
    const typeChar = () => {
      if (!isAnimating) return;

      if (currentLine >= lang.code.length) {
        setTypingPhase('completed');
        restartTimeoutRef.current = setTimeout(() => {
          if (!isAnimating) return;
          
          // Reset and restart
          currentLine = 0;
          currentChar = 0;
          currentSuggestionIndex = 0;
          setLines([]);
          setShowSuggestions(false);
          setTypingPhase('typing');
          setCurrentSuggestionPoint(0);
          
          // Continue typing
          typeChar();
        }, 2000);
        return;
      }

      const lineText = lang.code[currentLine];

      setLines(prev => {
        const newLines = [...prev];
        newLines[currentLine] = lineText.slice(0, currentChar + 1);
        return newLines;
      });

      const suggestionPoint = lang.suggestionPoints[currentSuggestionIndex];
      if (suggestionPoint && 
          currentLine === suggestionPoint.line && 
          currentChar === suggestionPoint.col) {
        
        setTypingPhase('suggesting');
        setShowSuggestions(true);
        setSelectedSuggestion(0);
        setCurrentSuggestionPoint(currentSuggestionIndex);
        
        let suggestionCycle = 0;
        const maxCycles = 2;
        
        suggestionIntervalRef.current = setInterval(() => {
          if (!isAnimating) {
            if (suggestionIntervalRef.current) clearInterval(suggestionIntervalRef.current);
            return;
          }
          
          setSelectedSuggestion(prev => {
            const next = (prev + 1) % suggestionPoint.suggestions.length;
            if (next === 0) suggestionCycle++;
            if (suggestionCycle >= maxCycles) {
              if (suggestionIntervalRef.current) clearInterval(suggestionIntervalRef.current);
              setShowSuggestions(false);
              setTypingPhase('typing');
              currentSuggestionIndex++;
              currentChar++;
              typingTimeoutRef.current = setTimeout(typeChar, 50);
            }
            return next;
          });
        }, 350);

      } else if (currentChar < lineText.length - 1) {
        currentChar++;
        typingTimeoutRef.current = setTimeout(typeChar, Math.random() * 30 + 10);
      } else if (currentChar === lineText.length - 1) {
        currentChar++;
        typingTimeoutRef.current = setTimeout(typeChar, Math.random() * 30 + 10);
      } else {
        currentLine++;
        currentChar = 0;
        if (currentLine < lang.code.length) {
          setLines(prev => [...prev, '']);
          typingTimeoutRef.current = setTimeout(typeChar, 80);
        } else {
          // Reached end, this will be handled by the check at the start
          typingTimeoutRef.current = setTimeout(typeChar, 80);
        }
      }
    };
    
    typingTimeoutRef.current = setTimeout(typeChar, 100);

    // Cleanup function
    return () => {
      isAnimating = false;
    };
  }, [lang, clearAllTimeouts]);

  useEffect(() => {
    if (isPlaying) {
      startTypingAnimation();
    } else {
      clearAllTimeouts();
    }
    
    return () => {
      clearAllTimeouts();
    };
  }, [currentLangIndex, isPlaying, startTypingAnimation, clearAllTimeouts]);
  
  useEffect(() => {
    const cursorInterval = setInterval(() => setShowCursor(p => !p), 530);
    return () => clearInterval(cursorInterval);
  }, []);
  
  const handleLangChange = (index: number) => {
    if (index !== currentLangIndex) {
      setCurrentLangIndex(index);
      setIsPlaying(true);
    }
  };

  const togglePlayPause = () => {
    setIsPlaying(prev => !prev);
  };

  const resetAnimation = () => {
    setIsPlaying(true);
    startTypingAnimation();
  };

  const getCurrentSuggestions = () => {
    const suggestionPoint = lang.suggestionPoints[currentSuggestionPoint];
    if (!suggestionPoint) return [];
    
    return suggestionPoint.suggestions.map(suggestion => 
      lang.suggestions.find(s => s.text === suggestion) || 
      { text: suggestion, description: "Payment API method", type: "method" }
    );
  };

  return (
    <section className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white py-24 md:py-32 relative overflow-hidden">
      <LanguageCarousel />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      
      <div className="container mx-auto max-w-7xl px-6 relative z-10 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-lg">
            <p className="text-sm font-semibold text-blue-400 mb-4 uppercase tracking-wider">Built for developers</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              The most powerful and easy-to-use APIs
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              We obsess over the right abstractions so your teams don't need to stitch together disparate systems or spend months integrating payments functionality.
            </p>
            <Button variant="link" className="text-blue-400 p-0 h-auto hover:text-blue-300 text-base group">
              Read the docs 
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="mt-12 flex gap-6 text-sm flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-gray-400">Always up to date</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-400">6+ languages</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-gray-400">Smart autocomplete</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-slate-950 rounded-xl shadow-2xl border border-slate-800 overflow-hidden backdrop-blur-sm">
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/80 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="flex gap-1 flex-wrap justify-center">
                  {languages.map((langItem, index) => (
                    <button 
                      key={langItem.name}
                      onClick={() => handleLangChange(index)}
                      className={cn(
                        "px-3 py-1.5 text-xs font-medium rounded-md transition-all",
                        currentLangIndex === index
                          ? 'bg-slate-800 text-white shadow-lg' 
                          : 'text-gray-500 hover:text-gray-300 hover:bg-slate-800/50'
                      )}
                    >
                      {langItem.name}
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={togglePlayPause}
                    className="p-1.5 hover:bg-slate-800 rounded-md transition-colors"
                    title={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                  <button 
                    onClick={resetAnimation}
                    className="p-1.5 hover:bg-slate-800 rounded-md transition-colors"
                    title="Restart"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="relative">
                <div className="p-6 font-mono text-sm min-h-[400px] bg-gradient-to-br from-slate-950 to-slate-900 overflow-x-auto">
                  {lang.code.map((_, i) => (
                    <div key={i} className="flex leading-relaxed py-0.5 min-h-[22px]">
                      <span className="text-gray-600 mr-6 select-none text-right w-6 flex-shrink-0">
                        {i + 1}
                      </span>
                      <div className="flex-1 relative">
                        <span 
                          className="text-gray-300"
                          dangerouslySetInnerHTML={{ __html: highlightCode(lines[i] || '') }}
                        />
                        {showCursor && i === lines.length - 1 && typingPhase === 'typing' && (
                          <span className="inline-block w-2 h-5 bg-blue-400 ml-0.5 -mb-1 animate-pulse"></span>
                        )}
                      </div>
                    </div>
                  ))}
                  
                  {showSuggestions && typingPhase === 'suggesting' && (
                    <div 
                      className="absolute bg-slate-800 border border-slate-700 rounded-lg shadow-2xl overflow-hidden animate-slide-up z-50 min-w-64"
                      style={{ 
                        top: `${(lang.suggestionPoints[currentSuggestionPoint].line + 1) * 24 + 24}px`,
                        left: `${64 + lang.suggestionPoints[currentSuggestionPoint].col * 8.4}px`,
                      }}
                    >
                      <div className="bg-slate-900/50 px-3 py-1.5 border-b border-slate-700 flex justify-between items-center">
                        <span className="text-xs text-gray-500">Payment API</span>
                        <span className="text-xs text-gray-500">{getCurrentSuggestions().length} suggestions</span>
                      </div>
                      {getCurrentSuggestions().map((suggestion, i) => (
                        <div
                          key={suggestion.text}
                          className={cn(
                            "px-3 py-2 flex items-center gap-3 transition-colors cursor-pointer",
                            i === selectedSuggestion 
                              ? "bg-blue-600 text-white" 
                              : "text-gray-300 hover:bg-slate-700"
                          )}
                        >
                          <div className={cn(
                            "w-5 h-5 rounded flex items-center justify-center text-xs font-bold flex-shrink-0",
                            i === selectedSuggestion ? "bg-blue-500" : "bg-slate-700"
                          )}>
                            {suggestion.text.charAt(0)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium truncate">{suggestion.text}</div>
                            <div className="text-xs opacity-60 truncate">{suggestion.description}</div>
                          </div>
                          <div className={cn(
                            "text-xs px-1.5 py-0.5 rounded flex-shrink-0",
                            suggestion.type === 'class' ? "bg-green-500/20 text-green-400" :
                            suggestion.type === 'method' ? "bg-blue-500/20 text-blue-400" :
                            "bg-purple-500/20 text-purple-400"
                          )}>
                            {suggestion.type}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="border-t border-slate-800 px-4 py-2 flex items-center justify-between text-xs bg-slate-900/80 flex-wrap gap-2">
                  <div className="flex items-center gap-4">
                    <span className="text-gray-500">
                      Ln {lines.length}, Col {(lines[lines.length-1] || '').length + 1}
                    </span>
                    <span className="text-gray-600">|</span>
                    <span className="text-gray-500">UTF-8</span>
                    <span className="text-gray-600">|</span>
                    <span className={cn(
                      "flex items-center gap-1.5",
                      typingPhase === 'suggesting' ? "text-yellow-400" : "text-gray-500"
                    )}>
                      {typingPhase === 'suggesting' ? "Suggesting..." : "Ready"}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-500">{lang.name}</span>
                    <span className="flex items-center gap-1.5">
                      <Circle className="w-2 h-2 fill-green-400 text-green-400" />
                      <span className="text-gray-500">payme v10.2.0</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 bg-blue-500/5 rounded-xl blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.2s ease-out;
        }
      `}</style>
    </section>
  );
}