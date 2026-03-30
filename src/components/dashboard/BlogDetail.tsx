"use client";

import React from 'react';

export default function BlogDetail() {
  return (
    <div className="min-h-screen bg-[#05111a] text-white font-sans animate-in fade-in duration-1000">
      {/* Blog Header Section */}
      <div className="max-w-6xl mx-auto px-6 py-20 lg:py-32">
        <div className="mb-12">
          <button className="flex items-center gap-3 bg-[#c5f82a] text-black px-6 py-3 rounded-full font-bold text-sm hover:scale-105 active:scale-95 transition-all">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Resources
          </button>
        </div>

        <div className="space-y-6">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Blog</p>
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] max-w-4xl">
            11 Examples Of AI In Customer Service
          </h1>
          
          <div className="flex flex-col gap-3 pt-6 border-l-2 border-blue-500 pl-6">
            <p className="text-xl font-bold text-white/90">Deon Nicholas</p>
            <p className="text-sm text-white/40 font-medium">President, Forethought</p>
          </div>
        </div>
      </div>

      {/* Hero Image Section */}
      <div className="w-full max-w-7xl mx-auto px-6 mb-20">
        <div className="aspect-video w-full rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl relative group">
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
           <img 
             src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2069&auto=format&fit=crop" 
             alt="AI Support Team" 
             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
           />
           <div className="absolute bottom-10 left-10 z-20">
              <div className="px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest">
                Case Study &bull; Technical Analysis
              </div>
           </div>
        </div>
      </div>

      {/* Content Section Placeholder */}
      <div className="max-w-3xl mx-auto px-6 pb-32 space-y-10">
        <div className="flex flex-col gap-6">
          <ResourceSearch />
        </div>
        
        <p className="text-lg text-white/60 leading-relaxed font-light">
          Artificial intelligence is no longer a futuristic concept. It's the engine driving the most successful customer service organizations today. From predictive triage to autonomous resolution, the applications are vast and growing.
        </p>
        
        <div className="p-10 glass-panel border-blue-500/20 bg-blue-500/[0.02]">
           <h3 className="text-2xl font-bold mb-4">The Rise of the Neural Support Agent</h3>
           <p className="text-white/50 text-sm leading-relaxed">
             Traditional support frameworks are being replaced by adaptive, self-learning systems that understand not just the "what" but the "why" behind every customer interaction.
           </p>
        </div>
      </div>
    </div>
  );
}

function ResourceSearch() {
  return (
    <div className="relative w-full group">
      <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full blur opacity-10 group-focus-within:opacity-30 transition duration-1000 group-hover:duration-200" />
      <div className="relative flex items-center justify-between w-full bg-[#05111a] border border-[#0d9488]/40 hover:border-[#0d9488] rounded-full px-8 py-5 transition-all cursor-pointer group shadow-2xl">
        <span className="text-white/80 font-medium tracking-wide">Conversational AI</span>
        <svg className="text-teal-500 group-hover:translate-y-0.5 transition-transform" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </div>
  );
}
