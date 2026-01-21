import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Zap, Dumbbell, Trophy } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // GSAP context is best for React to avoid memory leaks
    let ctx = gsap.context(() => {
      
      // 1. Image Reveal (Inset animation)
      gsap.from(".reveal-img", {
        clipPath: "inset(100% 0% 0% 0%)",
        duration: 1.5,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: ".reveal-img",
          start: "top 80%",
        }
      });

      // 2. Text Content Reveal
      gsap.from(".animate-text", {
        x: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-text-content",
          start: "top 75%",
        }
      });

      // 3. Stats Scale Up
      gsap.from(".stat-box", {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".stats-grid",
          start: "top 90%",
        }
      });
    }, containerRef); // Scope to container

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-black py-24 overflow-hidden flex items-center">
      
      {/* Background Watermark */}
      <div className="absolute top-10 left-10 opacity-[0.02] select-none pointer-events-none">
        <h2 className="text-[30vw] font-black italic leading-none">ELITE</h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* LEFT SIDE: IMAGES */}
          <div className="lg:col-span-6 relative">
            <div className="reveal-img relative rounded-[40px] overflow-hidden border border-white/10 group">
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
                alt="Gym" 
                className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              
              <div className="absolute bottom-10 left-10 bg-red-600 p-6 rounded-3xl shadow-2xl rotate-[-5deg]">
                <Dumbbell size={40} className="text-white mb-2" />
                <p className="font-black italic text-xl uppercase tracking-tighter">Premium <br/> Equipment</p>
              </div>
            </div>
            
            {/* Small Floating Image
            <div className="hidden lg:block absolute -right-10 -bottom-10 w-64 h-64 rounded-[30px] overflow-hidden border-4 border-black shadow-2xl reveal-img">
               <img 
                src="https://images.unsplash.com/photo-1541534741688-6078c65b5a33?q=80&w=2070&auto=format&fit=crop" 
                alt="" 
                className="w-full h-full object-cover"
              />
            </div> */}
          </div>

          {/* RIGHT SIDE: CONTENT */}
          <div className="lg:col-span-6 about-text-content space-y-8">
            <div className="animate-text inline-flex items-center gap-3">
               <div className="w-12 h-[2px] bg-red-600"></div>
               <span className="text-red-600 font-black uppercase tracking-[0.3em] text-sm">Est. 2026 Syndicate</span>
            </div>

            <h2 className="animate-text text-7xl md:text-9xl font-black italic uppercase leading-[0.8] tracking-tighter">
              BORN <br /> TO <span className="text-red-600">CONQUER</span>
            </h2>

            <p className="animate-text text-zinc-400 text-xl md:text-2xl font-bold italic leading-tight max-w-xl">
              "Syndicate is not just a gym; it's an underground movement."
            </p>

            {/* Stats */}
            <div className="stats-grid grid grid-cols-2 gap-6 pt-10 border-t border-zinc-900">
              <div className="stat-box">
                <div className="flex items-center gap-3 text-red-600 mb-2">
                  <Target size={24} />
                  <span className="font-black italic uppercase tracking-widest text-xs text-zinc-500">Focus</span>
                </div>
                <h4 className="text-4xl font-black italic uppercase">Hypertrophy</h4>
              </div>
              
              <div className="stat-box">
                <div className="flex items-center gap-3 text-red-600 mb-2">
                  <Trophy size={24} />
                  <span className="font-black italic uppercase tracking-widest text-xs text-zinc-500">Level</span>
                </div>
                <h4 className="text-4xl font-black italic uppercase">Elite Only</h4>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;