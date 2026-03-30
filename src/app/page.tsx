import ChatInterface from "@/components/ChatInterface";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 lg:p-24 relative overflow-hidden">
      {/* Premium Mesh Background */}
      <div className="mesh-bg">
        <div className="mesh-circle-1" />
        <div className="mesh-circle-2" />
      </div>

      <div className="z-10 w-full max-w-6xl flex flex-col gap-16 lg:gap-24">
        <header className="text-center space-y-6 lg:space-y-10 animate-in fade-in slide-in-from-top-10 duration-1000">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.3em] font-bold text-blue-400 mb-6 backdrop-blur-md">
            Next-Gen AI Ecosystem
          </div>
          <h1 className="text-6xl lg:text-9xl font-extrabold tracking-tighter leading-[0.9]">
            <span className="gradient-text">Nexus</span> <br className="hidden lg:block" /> Support AI
          </h1>
          <p className="text-white/60 text-lg lg:text-2xl max-w-2xl mx-auto leading-relaxed font-light">
            Elevate your customer experience with ultra-intelligent, 
            real-time support architecture.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-12 items-start py-4 animate-in fade-in zoom-in-95 duration-1000 delay-300">
          <ChatInterface />
        </div>

        <footer className="pt-12 text-center text-white/10 text-[10px] tracking-[0.4em] uppercase font-medium">
          &copy; 2026 Nexus AI Systems &bull; Defined by Excellence
        </footer>
      </div>
    </main>
  );
}
