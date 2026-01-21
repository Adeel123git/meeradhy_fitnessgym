import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Zap, Shield, Heart } from 'lucide-react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const About = () => {
  useEffect(() => {
    // Parallax background text animation
    gsap.to(".about-bg-text", {
      xPercent: -20,
      scrollTrigger: {
        trigger: ".about-container",
        scrub: 1,
      }
    });

    // Cards staggered entrance
    gsap.from(".feature-card", {
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".about-content",
        start: "top 80%",
      }
    });
  }, []);

  return (
    <section className="about-container relative min-h-screen bg-transparent text-white py-24 overflow-hidden">

      {/* 1. HUGE BACKGROUND SCROLLING TEXT (The "Vibe" Maker) */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 whitespace-nowrap opacity-[0.03] select-none pointer-events-none">
        <h2 className="about-bg-text text-[25vw] font-black italic uppercase italic">
          ESTABLISHED 2026 • SYNDICATE • ESTABLISHED 2026 • SYNDICATE
        </h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: THE STORY & ATTITUDE */}
          <div className="about-content space-y-8">
            <div className="inline-block px-4 py-1 border border-red-600 rounded-full text-red-600 text-xs font-black uppercase tracking-widest">
              Our DNA
            </div>
            <h2 className="text-6xl md:text-8xl font-black italic uppercase leading-none">
              WE ARE <br /> <span className="text-red-600">SYNDICATE</span>
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl font-bold italic leading-relaxed max-w-xl">
              Ye koi normal gym nahi hai. Ye ek <span className="text-white underline decoration-red-600 underline-offset-8">War Room</span> hai. Humne isay un logon ke liye banaya hai jo comfort zone se nafrat karte hain. 
            </p>
            
            <div className="flex gap-10 border-t border-zinc-900 pt-10">
              <div>
                <h4 className="text-4xl font-black italic">100+</h4>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Machines</p>
              </div>
              <div>
                <h4 className="text-4xl font-black italic text-red-600">0%</h4>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Excuses</p>
              </div>
            </div>
          </div>

          {/* RIGHT: THE "PUSHUP" FEATURE GRID (No Image Needed) */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: "Mission", icon: <Target />, desc: "Transforming the weak into warriors.", color: "bg-zinc-900" },
              { title: "Power", icon: <Zap />, desc: "Explosive workouts, every day.", color: "bg-red-600" },
              { title: "Safe", icon: <Shield />, desc: "Elite recovery & coaching.", color: "bg-zinc-900" },
              { title: "Vibe", icon: <Heart />, desc: "Community of iron addicts.", color: "bg-zinc-900" },
            ].map((item, i) => (
              <div 
                key={i} 
                className={`feature-card ${item.color} p-8 rounded-[30px] flex flex-col justify-between h-64 hover:scale-95 transition-all duration-500 cursor-default group`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.color === 'bg-red-600' ? 'bg-white text-red-600' : 'bg-red-600 text-white shadow-lg shadow-red-900/40'}`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-black italic uppercase mb-2">{item.title}</h3>
                  <p className="text-[10px] font-bold text-zinc-300 uppercase leading-tight opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* 3. FLOATING RED SPARK (To cover empty black space) */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-red-600/10 blur-[120px] rounded-full animate-pulse"></div>
    </section>
  );
};

export default About;