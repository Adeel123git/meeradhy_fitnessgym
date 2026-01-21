import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { Phone, Mail, MapPin, Send, Instagram, Facebook, Youtube, Dumbbell, Zap } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    // Scroll Text Animation (Vertical)
    gsap.to(".vertical-scroll", {
      yPercent: -50,
      repeat: -1,
      duration: 10,
      ease: "none"
    });

    // Red Animation Blobs
    gsap.to(".red-blob", {
      scale: 1.5,
      opacity: 0.6,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, []);

  return (
    <div className="bg-transparent text-white min-h-screen relative overflow-hidden flex flex-col justify-center">
      
      {/* --- 1. THEME BACKGROUND (Red/Black Animations) --- */}
      {/* Red Glows to cover black emptiness */}
      <div className="red-blob absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-red-600/20 blur-[120px] rounded-full -z-0"></div>
      <div className="red-blob absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-orange-600/10 blur-[150px] rounded-full -z-0"></div>

      {/* Vertical Background Text (Left Side) */}
      <div className="absolute left-0 top-0 h-full w-24 border-r border-zinc-900 hidden lg:flex items-center justify-center overflow-hidden">
        <div className="vertical-scroll text-6xl font-black text-zinc-900 uppercase italic flex flex-col gap-20 whitespace-nowrap rotate-180" style={{ writingMode: 'vertical-rl' }}>
          CONTACT US • GET FIT • NO EXCUSES • PUSH HARD • CONTACT US • GET FIT • NO EXCUSES • PUSH HARD
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 lg:pl-32 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* --- 2. LEFT SIDE: 3D PNG & BRANDING (5 Columns) --- */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <h1 className="text-7xl md:text-8xl font-black italic uppercase leading-none tracking-tighter">
                READY TO <br /> <span className="text-red-600">EVOLVE?</span>
              </h1>
              <p className="text-zinc-500 font-bold italic uppercase tracking-widest text-lg">
                Stop talking. Start doing.
              </p>
            </div>

            {/* 3D Animated PNG Area */}
            <div className="relative w-full max-w-sm mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-red-600/30 blur-3xl animate-pulse"></div>
              <img 
                src="https://framerusercontent.com/images/kMtsJ20TzJt3yG5g6O60fQ2v4o.png" 
                alt="3D Gear" 
                className="relative z-10 w-full hover:scale-110 transition-transform duration-500 animate-bounce-slow"
              />
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-2xl group-hover:bg-red-600 transition-all">
                  <Phone size={20} />
                </div>
                <span className="text-xl font-bold italic tracking-tight">+92 311 000 0000</span>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-2xl group-hover:bg-orange-600 transition-all">
                  <Mail size={20} />
                </div>
                <span className="text-xl font-bold italic tracking-tight">warrior@fitness.com</span>
              </div>
            </div>
          </div>

          {/* --- 3. RIGHT SIDE: THE HARDCORE FORM (7 Columns) --- */}
          <div className="lg:col-span-7">
            <div className="bg-zinc-950/50 backdrop-blur-xl p-8 md:p-16 rounded-[40px] border border-zinc-900 shadow-2xl relative">
              {/* Form Badge */}
              <div className="absolute -top-6 -right-6 bg-red-600 w-20 h-20 rounded-full flex items-center justify-center rotate-12 font-black italic text-center text-[10px] shadow-xl border-4 border-black">
                REPLY <br/> FAST
              </div>

              <h2 className="text-4xl font-black italic uppercase mb-10 flex items-center gap-4">
                <Zap className="text-orange-500" fill="currentColor" /> Drop Your Info
              </h2>

              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative">
                    <input type="text" required className="peer w-full bg-transparent border-b-2 border-zinc-800 py-3 outline-none focus:border-red-600 transition-all font-bold italic uppercase placeholder-transparent" id="name" placeholder="Name" />
                    <label htmlFor="name" className="absolute left-0 -top-4 text-xs font-black uppercase text-zinc-600 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-xs peer-focus:text-red-600 transition-all">Your Name</label>
                  </div>
                  <div className="relative">
                    <input type="email" required className="peer w-full bg-transparent border-b-2 border-zinc-800 py-3 outline-none focus:border-red-600 transition-all font-bold italic uppercase placeholder-transparent" id="email" placeholder="Email" />
                    <label htmlFor="email" className="absolute left-0 -top-4 text-xs font-black uppercase text-zinc-600 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-xs peer-focus:text-red-600 transition-all">Battle Email</label>
                  </div>
                </div>

                <div className="relative">
                  <textarea rows="4" required className="peer w-full bg-transparent border-b-2 border-zinc-800 py-3 outline-none focus:border-red-600 transition-all font-bold italic uppercase placeholder-transparent resize-none" id="msg" placeholder="Message"></textarea>
                  <label htmlFor="msg" className="absolute left-0 -top-4 text-xs font-black uppercase text-zinc-600 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-xs peer-focus:text-red-600 transition-all">What's your goal?</label>
                </div>

                <button className="group w-full py-6 bg-white text-black font-black uppercase italic text-2xl rounded-2xl hover:bg-red-600 hover:text-white transition-all flex items-center justify-center gap-4">
                  BATTLE START <Send className="group-hover:translate-x-2 transition-transform" />
                </button>
              </form>

              {/* Socials at bottom of form */}
              <div className="mt-12 flex justify-center gap-8 border-t border-zinc-900 pt-8">
                <Instagram className="cursor-pointer hover:text-red-600 transition-all" />
                <Facebook className="cursor-pointer hover:text-red-600 transition-all" />
                <Youtube className="cursor-pointer hover:text-red-600 transition-all" />
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Contact;