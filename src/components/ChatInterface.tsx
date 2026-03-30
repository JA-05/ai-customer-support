"use client";

import { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'ai';
  content: string;
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', content: 'Hello! How can I assist you with our services today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      const aiMessage: Message = { 
        role: 'ai', 
        content: data.text || "I'm sorry, I couldn't process that. Please try again." 
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [...prev, { role: 'ai', content: "Error: Could not connect to the AI assistant. Please check your credentials." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="glass-card flex flex-col h-[750px] w-full max-w-4xl mx-auto overflow-hidden relative">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl pointer-events-none" />
      
      <div className="p-6 lg:p-8 border-b border-white/5 flex items-center justify-between bg-white/[0.03] backdrop-blur-md">
        <div className="flex items-center gap-5">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-14 h-14 bg-[#0a0a0a] rounded-2xl flex items-center justify-center border border-white/10 shadow-2xl transition-transform duration-500 group-hover:rotate-6">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#logo-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <defs>
                  <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.8 8.38 8.38 0 0 1 3.8.9L21 3z"></path>
              </svg>
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-[#0a0a0a] rounded-full shadow-[0_0_15px_rgba(34,197,94,0.5)] animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold tracking-tight gradient-text">Nexus Core 1.0</h2>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase">Pro</span>
            </div>
            <p className="text-[10px] text-white/40 uppercase tracking-[0.25em] mt-1.5 font-medium flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
              Neural Systems Active
            </p>
          </div>
        </div>
        <div className="hidden lg:flex gap-4">
          <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[11px] font-bold text-white/60 hover:bg-white/10 transition-colors cursor-pointer">
            History
          </div>
          <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[11px] font-bold text-white/60 hover:bg-white/10 transition-colors cursor-pointer">
            Settings
          </div>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-6 lg:p-10 flex flex-col gap-8 scroll-hide bg-gradient-to-b from-transparent to-white/[0.01]"
      >
        {messages.map((msg, i) => (
          <div 
            key={i} 
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} items-start gap-4 group`}
          >
            {msg.role === 'ai' && (
              <div className="w-10 h-10 rounded-xl bg-[#0a0a0a] flex items-center justify-center flex-shrink-0 mt-1 border border-white/10 shadow-lg group-hover:border-blue-500/30 transition-colors">
                <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
              </div>
            )}
            <div 
              className={`max-w-[85%] lg:max-w-[75%] ${msg.role === 'user' ? 'message-user' : 'message-ai'} animate-in fade-in slide-in-from-bottom-8 duration-700 cubic-bezier(0.23, 1, 0.32, 1)`}
            >
              <div className="flex items-center gap-2 mb-2 opacity-40">
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  {msg.role === 'user' ? 'Protocol: User' : 'Nexus Response'}
                </span>
              </div>
              <p className="text-[15px] lg:text-[16px] font-light leading-relaxed tracking-wide">
                {msg.content}
              </p>
            </div>
            {msg.role === 'user' && (
              <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center flex-shrink-0 mt-1 border border-blue-500/20 shadow-lg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
            )}
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#0a0a0a] flex items-center justify-center flex-shrink-0 mt-1 border border-white/10 shadow-lg">
              <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
            </div>
            <div className="message-ai py-5 px-8 animate-pulse bg-white/5 border-white/10">
              <div className="flex gap-2.5">
                <div className="w-2 h-2 bg-blue-400/40 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-blue-400/40 rounded-full animate-bounce [animation-delay:0.2s]" />
                <div className="w-2 h-2 bg-blue-400/40 rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-6 lg:p-10 bg-white/[0.04] border-t border-white/5 backdrop-blur-xl">
        <div className="flex gap-4 items-center bg-[#0a0a0a]/50 p-2 rounded-[1.5rem] border border-white/5 focus-within:border-blue-500/30 transition-all duration-500 shadow-2xl">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Initialize command for Nexus AI..."
            className="chat-input !bg-transparent !border-none !shadow-none !p-4"
          />
          <button type="submit" className="btn-primary !p-4 !rounded-2xl shrink-0 group">
            <svg className="group-hover:rotate-12 transition-transform duration-500" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
        <p className="text-[10px] text-center text-white/20 mt-4 uppercase tracking-[0.2em] font-medium">
          Encrypted End-to-End &bull; Powered by Deep Intelligence
        </p>
      </form>
    </div>
  );
}
