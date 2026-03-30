"use client";

import { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'ai';
  content: string;
  sentiment?: 'happy' | 'neutral' | 'frustrated' | 'angry';
  confidence?: number;
}

export default function ChatWorkspace() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', content: 'Neural connection established. Protocol initialized. How can I facilitate your support workflow today?', confidence: 0.99 }
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

    const userMessage: Message = { 
      role: 'user', 
      content: input,
      sentiment: Math.random() > 0.8 ? 'frustrated' : 'happy' // Simulating emotion detection
    };
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

      const aiMessage: Message = { 
        role: 'ai', 
        content: data.text || "I'm sorry, I couldn't process that. Please check system logs.",
        confidence: 0.85 + Math.random() * 0.15 // Simulating confidence score
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: 'ai', content: "SYSTEM ERROR: Uplink failure. Retrying..." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="dashboard-grid h-full relative">
      {/* 3-Column Specific: Main Chat takes 8 cols, Side Panel takes 4 */}
      <div className="col-span-9 flex flex-col h-[calc(100vh-12rem)] glass-panel overflow-hidden relative">
        <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 shadow-2xl">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#chat-grad)" strokeWidth="2">
                  <defs>
                    <linearGradient id="chat-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.8 8.38 8.38 0 0 1 3.8.9L21 3z"></path>
                </svg>
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-black rounded-full animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-white">Active Session #941</h2>
                <span className="px-2 py-0.5 rounded text-[8px] font-black bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase">Real-time</span>
              </div>
              <p className="text-[10px] text-white/30 uppercase tracking-widest mt-1">User: Alex Johnson &bull; Location: London, UK</p>
            </div>
          </div>
          
          <div className="flex gap-2">
            <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] font-bold text-white/40 uppercase tracking-widest cursor-pointer hover:white/10 transition-colors">
              Transfer
            </div>
            <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] font-bold text-white/40 uppercase tracking-widest cursor-pointer hover:white/10 transition-colors">
              Resolve
            </div>
          </div>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-10 flex flex-col gap-10 scroll-hide bg-gradient-to-b from-transparent to-white/[0.01]">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} items-start gap-4 group`}>
              {msg.role === 'ai' && (
                <div className="w-10 h-10 rounded-xl bg-black border border-white/10 flex items-center justify-center flex-shrink-0 mt-1 shadow-2xl group-hover:border-blue-500/30 transition-colors">
                   <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                </div>
              )}
              <div className="max-w-[70%] space-y-3">
                <div className={`p-6 ${msg.role === 'user' ? 'message-user' : 'message-ai'}`}>
                  <p className="text-[15px] font-light leading-relaxed tracking-wide text-white/90">
                    {msg.content}
                  </p>
                </div>
                
                <div className="flex items-center gap-4 px-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/20">
                    {msg.role === 'user' ? '12:45 PM' : 'Nexus AI &bull; 12:45 PM'}
                  </span>
                  
                  {msg.role === 'ai' && msg.confidence && (
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 opacity-50" style={{ width: `${msg.confidence * 100}%` }} />
                      </div>
                      <span className="text-[9px] font-bold text-blue-400/60 uppercase">{(msg.confidence * 100).toFixed(0)}% Confidence</span>
                    </div>
                  )}
                  
                  {msg.role === 'user' && msg.sentiment && (
                    <div className={`flex items-center gap-1 text-[9px] font-black uppercase tracking-tighter ${msg.sentiment === 'frustrated' ? 'text-orange-500' : 'text-green-500'}`}>
                      <div className={`w-1 h-1 rounded-full ${msg.sentiment === 'frustrated' ? 'bg-orange-500' : 'bg-green-500'}`} />
                      {msg.sentiment}
                    </div>
                  )}
                </div>
              </div>
              {msg.role === 'user' && (
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeOpacity="0.4">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-black border border-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
              </div>
              <div className="p-6 bg-white/5 border border-white/5 rounded-[1.5rem] animate-pulse">
                <div className="flex gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500/40 rounded-full animate-bounce" />
                  <div className="w-1.5 h-1.5 bg-blue-500/40 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="w-1.5 h-1.5 bg-blue-500/40 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="p-8 bg-white/[0.03] border-t border-white/5 backdrop-blur-xl">
          <form onSubmit={handleSubmit} className="flex gap-4 items-center bg-black/40 p-2 rounded-[1.5rem] border border-white/5 focus-within:border-blue-500/30 transition-all duration-500">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter command or reply to ALEX..."
              className="chat-input !bg-transparent !border-none !shadow-none !p-4 !text-sm"
            />
            <button type="submit" className="btn-primary !p-3.5 !rounded-2xl shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
          <div className="flex gap-4 mt-6">
            <div className="text-[9px] font-bold text-white/20 uppercase tracking-widest">Suggestions: </div>
            {['Check billing status', 'Request refund', 'Update security key'].map((s, i) => (
              <div key={i} className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-[9px] font-bold text-blue-400/60 hover:bg-white/10 hover:text-blue-400 cursor-pointer transition-all">
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right User Details Panel (3 cols) */}
      <div className="col-span-3 flex flex-col gap-6">
        <div className="glass-panel p-8">
          <div className="flex flex-col items-center text-center mb-10">
            <div className="w-24 h-24 rounded-[2rem] bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 p-1 mb-6 relative">
               <div className="w-full h-full rounded-[1.8rem] bg-black flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 opacity-40 blur-xl" />
                  <span className="absolute text-4xl font-black text-white">AJ</span>
               </div>
               <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-4 border-black rounded-full" />
            </div>
            <h3 className="text-2xl font-extrabold text-white">Alex Johnson</h3>
            <p className="text-xs text-white/30 uppercase tracking-widest mt-1">Tier: Enterprise Platinum</p>
          </div>

          <div className="space-y-8">
            <div>
              <p className="stat-label mb-4">Core Metadata</p>
              <div className="space-y-4">
                {[
                  { label: 'Status', value: 'Live Session', color: 'text-green-400' },
                  { label: 'Uplink', value: 'Secure Fiber', color: 'text-white/60' },
                  { label: 'Last Interacted', value: '2m ago', color: 'text-white/60' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center text-xs">
                    <span className="text-white/20 font-bold uppercase tracking-wider">{item.label}</span>
                    <span className={`font-medium ${item.color}`}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="stat-label mb-4">Neural Tags</p>
              <div className="flex flex-wrap gap-2">
                {['High-Value', 'Tech-Issue', 'Urgent', 'Q3-Lead'].map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[9px] font-black uppercase text-white/40">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="glass-panel p-8 flex-1">
          <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-widest text-center border-b border-white/5 pb-4">Activity Log</h3>
          <div className="space-y-6">
             {[...Array(3)].map((_, i) => (
               <div key={i} className="flex gap-4 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500/30 mt-1.5 shrink-0 group-hover:bg-blue-400 transition-colors" />
                  <div>
                    <p className="text-[11px] text-white/60 font-light">Session #82{i} resolved by AI-Nexus</p>
                    <p className="text-[9px] text-white/20 mt-1 uppercase font-bold">2 days ago</p>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}
