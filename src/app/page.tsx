import ChatInterface from "@/components/ChatInterface";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 lg:p-24 relative overflow-hidden">
      {/* Decorative Blur Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="z-10 w-full max-w-5xl flex flex-col gap-20">
        <header className="text-center space-y-8">
          <h1 className="text-6xl lg:text-8xl font-extrabold tracking-tighter">
            <span className="gradient-text">Nexus</span> Support AI
          </h1>
          <p className="text-white/50 text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
            Experience the future of customer relations with our advanced AI-driven support ecosystem. 
            Real-time, intelligent, and designed for absolute excellence.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-12 items-start py-8">
          <ChatInterface />
        </div>

        <footer className="pt-12 text-center text-white/20 text-sm tracking-widest uppercase">
          &copy; 2026 Nexus AI Systems. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
