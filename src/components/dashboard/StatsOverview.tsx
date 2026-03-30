"use client";

import React from 'react';

const stats = [
  { label: 'Active Sessions', value: '1,284', change: '+12.5%', color: 'blue' },
  { label: 'AVG Response Time', value: '1.4s', change: '-0.2s', color: 'purple' },
  { label: 'CSAT Score', value: '98.2%', change: '+0.5%', color: 'cyan' },
  { label: 'Resolution Rate', value: '94.8%', change: '+2.1%', color: 'indigo' },
];

export default function StatsOverview() {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-5 duration-700">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-4xl font-extrabold tracking-tight text-white mb-2">Systems Overview</h2>
          <p className="text-white/40 font-light max-w-md">Real-time telemetry and AI performance metrics across all active support clusters.</p>
        </div>
        <div className="flex gap-3">
          <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[11px] font-bold text-white/40 uppercase tracking-widest cursor-pointer hover:bg-white/10 transition-colors">
            Last 24 Hours
          </div>
          <div className="px-4 py-2 rounded-xl bg-blue-600/10 border border-blue-500/20 text-[11px] font-bold text-blue-400 uppercase tracking-widest cursor-pointer">
            Live Stream
          </div>
        </div>
      </div>

      <div className="dashboard-grid h-40">
        {stats.map((stat, i) => (
          <div key={i} className="col-span-3 glass-panel p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/[0.02] rounded-bl-full border-b border-l border-white/5 pointer-events-none" />
            <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-${stat.color}-500/5 blur-3xl group-hover:bg-${stat.color}-500/10 transition-all duration-700`} />
            
            <p className="stat-label mb-3">{stat.label}</p>
            <div className="flex items-baseline gap-3">
              <h3 className="stat-value text-white">{stat.value}</h3>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${stat.change.startsWith('+') ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                {stat.change}
              </span>
            </div>
            
            {/* Mini Visualizer */}
            <div className="mt-6 flex items-end gap-1 h-8">
              {[...Array(12)].map((_, j) => (
                <div 
                  key={j} 
                  className={`flex-1 bg-${stat.color}-500/20 rounded-full group-hover:bg-${stat.color}-500/40 transition-all duration-500`}
                  style={{ height: `${Math.random() * 100}%` }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-grid">
        <div className="col-span-8 glass-panel p-8 min-h-[400px]">
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-xl font-bold text-white">Network Load & AI Efficiency</h3>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Global Load</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500" />
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">AI Accuracy</span>
              </div>
            </div>
          </div>
          
          {/* Chart Placeholder */}
          <div className="w-full h-64 border-b border-l border-white/5 relative flex items-end gap-4 px-4">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="flex-1 flex flex-col gap-1 items-center">
                <div className="w-full bg-purple-500/20 rounded-t-lg transition-all duration-1000 hover:bg-purple-500/40" style={{ height: `${20 + Math.random() * 60}%` }} />
                <div className="w-full bg-blue-500/30 rounded-t-lg transition-all duration-1000 delay-100 hover:bg-blue-500/50" style={{ height: `${10 + Math.random() * 40}%` }} />
              </div>
            ))}
          </div>
        </div>
        
        <div className="col-span-4 glass-panel p-8">
          <h3 className="text-xl font-bold text-white mb-6">Recent Log Activity</h3>
          <div className="space-y-6">
            {[
              { time: '12:45', msg: 'AI Successfully resolved billing query #X92', type: 'success' },
              { time: '12:42', msg: 'Human intervention requested for user #811', type: 'warning' },
              { time: '12:38', msg: 'Cluster node #4 scaling active', type: 'info' },
              { time: '12:35', msg: 'New integration: Stripe Webhook active', type: 'success' },
              { time: '12:31', msg: 'Neural model v2.1 deployment complete', type: 'info' },
            ].map((log, i) => (
              <div key={i} className="flex gap-4 items-start group">
                <span className="text-[10px] font-bold text-white/20 mt-1">{log.time}</span>
                <div className="flex-1">
                  <p className="text-xs text-white/60 group-hover:text-white transition-colors">{log.msg}</p>
                  <div className={`mt-2 w-1 h-3 rounded-full ${log.type === 'success' ? 'bg-green-500' : log.type === 'warning' ? 'bg-orange-500' : 'bg-blue-500'} opacity-30`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
