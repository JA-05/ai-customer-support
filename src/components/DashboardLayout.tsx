"use client";

import React, { useState } from 'react';
import Sidebar from './dashboard/Sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function DashboardLayout({ children, activeTab, setActiveTab }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-black overflow-hidden relative">
      {/* Background Mesh Overlay */}
      <div className="mesh-bg" />
      
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Header */}
        <header className="h-20 border-b border-white/5 flex items-center justify-between px-10 gap-8 bg-black/10 backdrop-blur-md z-20">
          <div className="flex-1 max-w-2xl">
            <div className="relative group">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-blue-400 transition-colors" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input 
                type="text" 
                placeholder="Search across telemetry, logs, and sessions..."
                className="w-full bg-white/5 border border-white/5 rounded-2xl py-3 pl-12 pr-6 text-sm text-white placeholder:text-white/20 outline-none focus:border-blue-500/30 focus:bg-white/[0.07] transition-all"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex gap-2">
              <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all cursor-pointer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </div>
              <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all cursor-pointer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
              </div>
            </div>
            
            <button className="bg-gradient-to-tr from-blue-600 to-purple-600 px-6 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-widest text-white shadow-lg shadow-blue-500/25 hover:scale-105 active:scale-95 transition-all">
              New Session
            </button>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto custom-scroll p-10">
          {/* We'll pass the active interface here */}
          {React.Children.map(children, child => {
            if (React.isValidElement(child)) {
              // @ts-ignore
              return React.cloneElement(child, { activeTab });
            }
            return child;
          })}
        </div>
      </main>
    </div>
  );
}
