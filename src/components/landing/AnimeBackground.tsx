"use client";

import React from 'react';

export default function AnimeBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#020617]">
      {/* Generated Cinematic Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] scale-110"
        style={{ 
          backgroundImage: `url('file:///C:/Users/jayas/.gemini/antigravity/brain/fb785e9f-f8f6-4d73-877d-6685cf1aac62/nexus_anime_bg_1774890690623.png')`,
          opacity: 0.4
        }}
      />
      
      {/* Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/40 via-transparent to-transparent" />
      
      {/* Floating Ethereal Blobs */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full anime-float" />
      <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full anime-float [animation-delay:2s]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/[0.03] blur-[180px] rounded-full anime-float [animation-direction:reverse]" />

      {/* Neural Synapse Lines (Horizontal scanning effects) */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i} 
            className="synapse-line absolute w-full" 
            style={{ top: `${20 * i + 10}%`, animationDelay: `${i * 0.8}s` }} 
          />
        ))}
      </div>

      {/* Grain / Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
