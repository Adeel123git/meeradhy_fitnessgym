import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { Check, Zap, Crown, Flame, Dumbbell, Shield, Star, Rocket } from 'lucide-react';

const Membership = () => {
  useEffect(() => {
    // 1. Entrance animation (all cards together)
    gsap.fromTo(".member-card", 
      { opacity: 0, scale: 0.9, y: 30 }, 
      { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "back.out(1.2)" }
    );

    // 2. Continuous Floating Animation (taaki cards dead na lagein)
    gsap.to(".member-card", {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: {
        amount: 1,
        from: "random"
      }
    });
  }, []);

  const plans = [
    { name: "Daily Pass", price: "05", icon: <Zap />, glow: "shadow-white/5", border: "border-zinc-800" },
    { name: "Potato", price: "09", icon: <Shield />, glow: "shadow-zinc-500/10", border: "border-zinc-700" },
    { name: "Beast", price: "49", icon: <Flame />, glow: "shadow-red-600/20", border: "border-red-600", popular: true },
    { name: "Pro Elite", price: "69", icon: <Dumbbell />, glow: "shadow-orange-500/20", border: "border-orange-500" },
    { name: "God Mode", price: "99", icon: <Crown />, glow: "shadow-yellow-500/20", border: "border-yellow-500" },
    { name: "Syndicate", price: "149", icon: <Rocket />, glow: "shadow-red-900/40", border: "border-red-900" }
  ];

  return (
    <div className="bg-transparent text-white min-h-screen py-24 px-6 relative overflow-hidden">
      
      {/* --- STATIC GLOWS TO KILL BLACK SPACE --- */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-red-600 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-600 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-7xl font-black italic uppercase tracking-tighter mb-2">
            RANK <span className="text-red-600 italic">UP</span>
          </h2>
          <div className="h-1 w-20 bg-red-600 mx-auto"></div>
        </div>

        {/* 6 CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`member-card group relative p-10 rounded-[40px] bg-[#0a0a0a] border-2 ${plan.border} ${plan.glow} shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-zinc-900/50`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-6 bg-red-600 px-4 py-1 rounded-lg text-[10px] font-black uppercase italic tracking-widest z-20">
                  Top Choice
                </div>
              )}

              <div className="flex justify-between items-center mb-8">
                <div className="w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-500 shadow-inner">
                  {plan.icon}
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest leading-none">Monthly</p>
                  <span className="text-5xl font-black italic leading-none">${plan.price}</span>
                </div>
              </div>

              <h3 className="text-3xl font-black italic uppercase mb-6 tracking-tight group-hover:translate-x-2 transition-transform">
                {plan.name}
              </h3>

              <div className="space-y-4 mb-10 border-t border-zinc-900 pt-6">
                {["Elite Machines", "Personal Locker", "Free Supplements", "24/7 War Room"].map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check size={16} className="text-red-600 group-hover:scale-125 transition-transform" />
                    <span className="text-xs font-black uppercase italic text-zinc-400 group-hover:text-white transition-colors">{feat}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-5 rounded-2xl font-black uppercase italic tracking-tighter text-xl transition-all duration-300 ${plan.popular ? 'bg-red-600 text-white shadow-[0_10px_30px_rgba(220,38,38,0.4)]' : 'bg-white text-black hover:bg-red-600 hover:text-white'}`}>
                ENLIST NOW
              </button>
            </div>
          ))}
        </div>

        {/* BOTTOM SECTION TO FILL SCREEN */}
        <div className="mt-20 text-center opacity-20">
          <p className="text-[10px] font-black uppercase tracking-[1.5em]">No Retreat • No Surrender • Syndicate Gym</p>
        </div>

      </div>
    </div>
  );
};

export default Membership;