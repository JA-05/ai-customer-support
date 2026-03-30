"use client";

import React from 'react';

export default function LandingHero({ onEnterDashboard }: { onEnterDashboard: () => void }) {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 pt-20">
      {/* Top Badge */}
      <div className="landing-title opacity-0 [animation-delay:0.2s]">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-10 group cursor-pointer hover:bg-white/10 transition-all">
          <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60 group-hover:text-white transition-colors">
            AI-Powered Support Lifecycle
          </span>
        </div>
      </div>

      {/* Main Headline */}
      <div className="max-w-5xl landing-title opacity-0 [animation-delay:0.4s]">
        <h1 className="text-7xl lg:text-9xl font-black tracking-tighter leading-[0.85] text-white mb-10">
          Build the support <br />
          that matches <span className="gradient-text-dna">your DNA.</span>
        </h1>
        
        <p className="text-xl lg:text-3xl font-light text-white/40 max-w-3xl mx-auto leading-relaxed mb-16 px-4">
          Stop endlessly chasing tickets. Our AI adapts to your unique <br className="hidden lg:block" />
          business logic, resolving 80% of queries instantly.
        </p>
      </div>

      {/* CTA Section */}
      <div className="flex flex-col sm:flex-row gap-6 landing-title opacity-0 [animation-delay:0.6s]">
        <button 
          onClick={onEnterDashboard}
          className="group relative px-10 py-5 rounded-[2rem] bg-gradient-to-r from-blue-600 to-purple-600 font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(59,130,246,0.5)]"
        >
          <div className="absolute inset-0 rounded-[2.5rem] bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
          <span className="relative flex items-center gap-3 text-white">
            Enter Nexus Terminal
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </span>
        </button>
        
        <button className="px-10 py-5 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl font-bold text-white hover:bg-white/10 transition-all">
          Explore Blueprints
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
