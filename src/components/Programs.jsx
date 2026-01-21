import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Dumbbell, Flame, Target, Zap, Bike, Heart } from 'lucide-react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Programs = () => {
  useEffect(() => {
    // Basic Fade-in Animation
    gsap.fromTo(".prog-card", 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".prog-grid",
          start: "top 80%",
        }
      }
    );
  }, []);

  const programs = [
    { title: "Muscle Build", icon: <Dumbbell />, desc: "High volume training for max gains.", color: "from-red-600 to-orange-600" },
    { title: "Fat Shred", icon: <Flame />, desc: "HIIT workouts to burn fat fast.", color: "from-orange-500 to-yellow-500" },
    { title: "Pro Boxing", icon: <Target />, desc: "Learn power punches and footwork.", color: "from-red-700 to-red-500" },
    { title: "Yoga Flow", icon: <Heart />, desc: "Flexibility and mental peace.", color: "from-orange-600 to-red-400" },
    { title: "Agility", icon: <Zap />, desc: "Speed and reaction time training.", color: "from-yellow-600 to-orange-600" },
    { title: "Cycling", icon: <Bike />, desc: "Endurance building cardio.", color: "from-red-500 to-orange-700" },
  ];

  return (
    <section className="bg-transparent py-20 px-5 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black italic uppercase text-white tracking-tighter">
            Our <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Programs</span>
          </h2>
          <div className="h-1 w-20 bg-red-600 mx-auto mt-4"></div>
        </div>

        {/* Cards Grid */}
        <div className="prog-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {programs.map((item, index) => (
            <div 
              key={index}
              className="prog-card group relative bg-zinc-900/50 border border-zinc-800 p-8 rounded-[40px] overflow-hidden hover:border-red-500 transition-all duration-500 cursor-pointer"
            >
              {/* Background Glow on Hover */}
              <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${item.color} blur-[80px] opacity-0 group-hover:opacity-40 transition-all duration-500`}></div>

              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {React.cloneElement(item.icon, { size: 32 })}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 uppercase italic group-hover:text-red-500 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-zinc-400 leading-relaxed mb-6">
                  {item.desc}
                </p>

                <div className="flex items-center text-xs font-black uppercase tracking-widest text-red-500">
                  Join Program <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;