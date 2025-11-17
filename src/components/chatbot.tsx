
'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  X, 
  Sparkles, 
  Search, 
  ShoppingCart, 
  IndianRupee, 
  Globe, 
  Settings, 
  PenSquare, 
  Bot 
} from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'bot';
};

const prompts = [
  { icon: Search, text: "Help me find a product" },
  { icon: ShoppingCart, text: "Use PAYME checkout" },
  { icon: IndianRupee, text: "Know about product pricing" },
  { icon: Globe, text: "Accept Payments on Website" },
  { icon: Settings, text: "How do I integrate PAYME?" },
  { icon: PenSquare, text: "Something else?" }
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [showChat, setShowChat] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  const handlePromptClick = (promptText: string) => {
    setShowChat(true);
    const userMessage: Message = {
      id: uuidv4(),
      text: promptText,
      sender: 'user',
    };

    setMessages([
        { id: uuidv4(), text: "Hello! How can I assist you?", sender: 'bot' },
        userMessage
    ]);
    setIsLoading(true);

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: uuidv4(),
        text: `This is a static response for: "${promptText}"`,
        sender: 'bot',
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000);
  };
  
  const resetChat = () => {
    setShowChat(false);
    setMessages([]);
  }

  const RayIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L12 6" stroke="#4C6FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 18L12 22" stroke="#4C6FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 12L18 12" stroke="#4C6FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 12L2 12" stroke="#4C6FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.36 5.64001L15.53 8.47001" stroke="#4C6FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.47001 15.53L5.64001 18.36" stroke="#4C6FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.36 18.36L15.53 15.53" stroke="#4C6FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.47001 8.47001L5.64001 5.64001" stroke="#4C6FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-24 right-4 sm:right-8 z-50 w-[calc(100%-2rem)] max-w-sm"
          >
            <div className="flex flex-col bg-[#F4F8FF] rounded-2xl shadow-2xl border border-gray-200">
              <header className="flex items-start justify-between p-6">
                <div className="flex items-start gap-4">
                  <RayIcon />
                  <div>
                    <h3 className="font-bold text-lg text-foreground">PAYME</h3>
                    <p className="text-sm text-muted-foreground">
                      Looking for something? Let me help you!
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="-mt-2 -mr-2">
                  <X className="w-5 h-5 text-gray-500" />
                </Button>
              </header>

              <div className="p-6 pt-0">
                  <AnimatePresence mode="wait">
                    {showChat ? (
                       <motion.div
                        key="chat"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.3 }}
                       >
                         <ScrollArea className="h-80" ref={scrollAreaRef}>
                            <div className="space-y-4 pr-4">
                              {messages.map((message) => (
                                <div
                                  key={message.id}
                                  className={`flex items-start gap-3 ${
                                    message.sender === 'user' ? 'justify-end' : ''
                                  }`}
                                >
                                  {message.sender === 'bot' && (
                                    <div className="w-8 h-8 rounded-full bg-white border flex-shrink-0 flex items-center justify-center">
                                      <RayIcon />
                                    </div>
                                  )}
                                  <div
                                    className={`max-w-[80%] p-3 rounded-xl shadow-sm ${
                                      message.sender === 'user'
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-white text-foreground'
                                    }`}
                                  >
                                    <p className="text-sm">{message.text}</p>
                                  </div>
                                </div>
                              ))}
                              {isLoading && (
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-white border flex-shrink-0 flex items-center justify-center">
                                      <RayIcon />
                                    </div>
                                    <div className="max-w-[80%] p-3 rounded-xl bg-white shadow-sm">
                                        <div className="flex items-center gap-1.5">
                                            <span className="h-2 w-2 bg-gray-400 rounded-full animate-pulse delay-0"></span>
                                            <span className="h-2 w-2 bg-gray-400 rounded-full animate-pulse delay-150"></span>
                                            <span className="h-2 w-2 bg-gray-400 rounded-full animate-pulse delay-300"></span>
                                        </div>
                                    </div>
                                </div>
                              )}
                            </div>
                          </ScrollArea>
                          <Button variant="link" onClick={resetChat} className="mt-4">
                            Back to prompts
                          </Button>
                       </motion.div>
                    ) : (
                      <motion.div
                        key="prompts"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-3"
                      >
                         {prompts.map((prompt, index) => (
                          <button
                            key={index}
                            onClick={() => handlePromptClick(prompt.text)}
                            className="w-full text-left p-4 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 hover:border-blue-400 transition-all flex items-center gap-4 shadow-sm"
                          >
                            <prompt.icon className="w-5 h-5 text-gray-500" />
                            <span className="text-sm font-medium text-gray-700">{prompt.text}</span>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 200, damping: 20 }}
        className="fixed bottom-4 right-4 sm:right-8 z-40"
      >
        <Button 
          className="h-14 w-auto px-6 rounded-lg shadow-lg bg-white hover:bg-gray-100 text-primary border border-blue-200" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <>
              <X className="w-5 h-5 mr-2" />
              <span>Close</span>
            </>
          ) : (
            <>
              <RayIcon />
              <span className="ml-2 font-semibold">Ask PAYME</span>
            </>
          )}
        </Button>
      </motion.div>
    </>
  );
}
