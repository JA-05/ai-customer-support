"use client";

import { useState } from 'react';
import DashboardLayout from "@/components/DashboardLayout";
import StatsOverview from "@/components/dashboard/StatsOverview";
import ChatWorkspace from "@/components/dashboard/ChatWorkspace";
import BlogDetail from "@/components/dashboard/BlogDetail";
import AnimeBackground from "@/components/landing/AnimeBackground";
import LandingHero from "@/components/landing/LandingHero";

export default function Home() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showDashboard, setShowDashboard] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <StatsOverview />;
      case 'chat':
        return <ChatWorkspace />;
      case 'tickets':
        return (
          <div className="flex flex-col items-center justify-center h-[60vh] glass-panel p-10 animate-in fade-in zoom-in-95 duration-700">
            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-8 border border-white/10">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeOpacity="0.3">
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Ticket Console v1.0</h2>
            <p className="text-white/30 text-sm max-w-sm text-center">Neural ticket aggregation is currently indexing. All active threads are synced to the Live Chat module.</p>
          </div>
        );
      case 'customers':
        return (
          <div className="flex flex-col items-center justify-center h-[60vh] glass-panel p-10 animate-in fade-in zoom-in-95 duration-700">
            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-8 border border-white/10">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeOpacity="0.3">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">CRM Data Sync</h2>
            <p className="text-white/30 text-sm max-w-sm text-center">Encrypted customer databases are being fetched from core clusters. Real-time profiles are active in Chat Workspace.</p>
          </div>
        );
      case 'analytics':
        return (
          <div className="flex flex-col items-center justify-center h-[60vh] glass-panel p-10 animate-in fade-in zoom-in-95 duration-700">
             <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-8 border border-white/10">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeOpacity="0.3">
                <line x1="18" y1="20" x2="18" y2="10"></line>
                <line x1="12" y1="20" x2="12" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="14"></line>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Advanced Analytics</h2>
            <p className="text-white/30 text-sm max-w-sm text-center">Deep telemetry analysis in progress. Predictive satisfaction scores will be available in the next cycle.</p>
          </div>
        );
      case 'settings':
        return (
          <div className="flex flex-col items-center justify-center h-[60vh] glass-panel p-10 animate-in fade-in zoom-in-95 duration-700">
             <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-8 border border-white/10">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeOpacity="0.3">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Neural Core Config</h2>
            <p className="text-white/30 text-sm max-w-sm text-center">Adjust AI response temperament, confidence thresholds, and emotion detection sensitivity here.</p>
          </div>
        );
      case 'resources':
        return <BlogDetail />;
      default:
        return <StatsOverview />;
    }
  };

  if (!showDashboard) {
    return (
      <main className="min-h-screen relative">
        <AnimeBackground />
        <LandingHero onEnterDashboard={() => setShowDashboard(true)} />
      </main>
    );
  }

  return (
    <DashboardLayout activeTab={activeTab} setActiveTab={setActiveTab}>
      <DashboardContent renderContent={renderContent} />
    </DashboardLayout>
  );
}

// Internal helper to bridge state between Layout and Page if needed
function DashboardContent({ renderContent }: any) {
  return <div className="animate-in fade-in duration-500">{renderContent()}</div>;
}
