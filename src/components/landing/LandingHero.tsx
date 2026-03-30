"use client";

import React from 'react';

export default function LandingHero({ onEnterDashboard }: { onEnterDashboard: () => void }) {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 pt-32 pb-40">
      {/* Top Badge */}
      <div className="landing-title opacity-0 [animation-delay:0.2s] mb-16">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl group cursor-pointer hover:bg-white/10 transition-all shadow-2xl">
          <span className="flex h-2.5 w-2.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
          <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-white/50 group-hover:text-white transition-colors">
            AI-Powered Support Ecosystem
          </span>
        </div>
      </div>

      {/* Main Headline */}
      <div className="max-w-6xl landing-title opacity-0 [animation-delay:0.4s] mb-20 px-4">
        <h1 className="text-8xl lg:text-[11rem] font-black tracking-tighter leading-[0.8] text-white mb-14 drop-shadow-2xl">
          Support that <br />
          matches <span className="gradient-text-dna">your DNA.</span>
        </h1>
        
        <p className="text-2xl lg:text-4xl font-light text-white/30 max-w-4xl mx-auto leading-relaxed mb-10">
          Nexus AI learns your unique business logic instantly. <br className="hidden lg:block" />
          Deployment in hours, not weeks.
        </p>
      </div>

      {/* CTA Section */}
      <div className="flex flex-col sm:flex-row gap-10 landing-title opacity-0 [animation-delay:0.6s]">
        <button 
          onClick={onEnterDashboard}
          className="group relative px-14 py-7 rounded-[2.5rem] bg-gradient-to-r from-blue-600 to-purple-600 font-extrabold text-lg transition-all hover:scale-110 active:scale-95 shadow-[0_20px_50px_rgba(59,130,246,0.4)]"
        >
          <div className="absolute inset-0 rounded-[2.5rem] bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
          <span className="relative flex items-center gap-4 text-white">
            Enter Dashboard Terminal
            <svg className="group-hover:translate-x-2 transition-transform" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </span>
        </button>
        
        <button className="px-14 py-7 rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-3xl font-extrabold text-lg text-white hover:bg-white/10 hover:border-white/20 transition-all shadow-2xl">
          View Documentation
        </button>
      </div>

      {/* Bottom Floating Stats / Visuals */}
      <div className="absolute bottom-12 flex gap-12 text-[10px] font-black uppercase tracking-[0.4em] text-white/20 landing-title opacity-0 [animation-delay:1s]">
        <span>01 / Deployment Ready</span>
        <span>02 / Neural Trained</span>
        <span>03 / Enterprise Secure</span>
      </div>
    </section>
  );
}
