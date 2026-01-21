import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { Bolt, Users, Trophy, Dumbbell } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParticleBackground from './ParticleBackground';

// Prop mein 'loading' lazmi lena hai
const Hero = ({ loading }) => {
  useEffect(() => {
    // Jab tak loading hai, animation start mat karo
    if (loading) return;

    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    gsap.set(".hero-reveal", { opacity: 0, y: 80 });

    tl.to(".hero-reveal", {
      opacity: 1,
      y: 0,
      duration: 1.2,
      stagger: 0.2,
      delay: 0.5 
    })
    .from(".hero-btn-stable", {
      opacity: 0,
      scale: 0.9,
      duration: 0.8
    }, "-=0.5");

    gsap.to(".pushup-icon", {
      y: -30,
      scale: 1.1,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, [loading]); // Loading change hone par reset hoga

  return (
    // 'h-screen' use kiya hai taaki height fix rahe
    <section className="relative h-screen w-full bg-black overflow-hidden flex items-center pt-20">
      
      {/* 1. PARTICLES - Prop pass kar di */}
      <div className="absolute inset-0 z-0">
        <ParticleBackground loading={loading} />
      </div>

      {/* 2. BACKGROUND GLOWS */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-red-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-600/10 blur-[120px] rounded-full"></div>
      </div>

      {/* 3. MAIN CONTENT */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-7">
            <div className="space-y-4">
              <h1 className="hero-reveal opacity-0 text-[12vw] md:text-[7.5rem] font-black italic uppercase leading-[0.8] tracking-tighter text-white">
                BEYOND <br /> 
                <span className="text-red-600 outline-text">LIMITS</span>
              </h1>
              <p className="hero-reveal opacity-0 text-zinc-400 text-lg md:text-xl font-bold uppercase italic tracking-[0.2em] max-w-lg">
                  Forge your body. <span className="text-white">Rule the gym</span>. 
                  The ultimate syndicate awaits.
              </p>
            </div>

            <div className="hero-btn-stable mt-10">
              <Link to="/join-now" className="inline-flex bg-red-600 hover:bg-white hover:text-black text-white px-10 py-4 rounded-xl font-black uppercase italic text-xl items-center gap-3 transition-all duration-500 shadow-xl">
                JOIN NOW <Bolt fill="currentColor" size={22} />
              </Link>
            </div>

            {/* STATS */}
            <div className="hero-reveal opacity-0 grid grid-cols-3 gap-4 mt-12 border-t border-zinc-900 pt-8 max-w-md">
              {[
                { icon: <Users size={20}/>, label: "Squad", val: "1.2k" },
                { icon: <Trophy size={20}/>, label: "Elite", val: "50+" },
                { icon: <Dumbbell size={20}/>, label: "Iron", val: "100T" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col">
                  <div className="text-red-600 mb-1">{item.icon}</div>
                  <span className="text-2xl font-black italic text-white">{item.val}</span>
                  <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE ICON */}
          <div className="lg:col-span-5 hidden lg:flex justify-center">
            <div className="pushup-icon relative text-red-600">
               <div className="absolute inset-0 bg-red-600/20 blur-[80px] rounded-full"></div>
               <Dumbbell size={250} strokeWidth={2.5} className="relative z-10 drop-shadow-2xl" />
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .outline-text {
          -webkit-text-stroke: 2px #dc2626;
          color: transparent;
        }
      `}</style>
    </section>
  );
};

export default Hero;