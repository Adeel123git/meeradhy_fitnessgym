import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Dumbbell } from 'lucide-react';

const LoadingScreen = ({ onFinished }) => {
  const containerRef = useRef();
  const iconRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Jab animation khatam ho jaye toh screen hat jaye
        gsap.to(containerRef.current, {
          y: "-100%",
          duration: 1,
          ease: "power4.inOut",
          onComplete: onFinished
        });
      }
    });

    // 1. Dumbbell entry (Niche se upar aana)
    tl.fromTo(iconRef.current, 
      { y: 100, opacity: 0, scale: 0.5 }, 
      { y: 0, opacity: 1, scale: 1.2, duration: 0.8, ease: "back.out(1.7)" }
    );

    // 2. Lifting Animation (Dumbbell upar niche move karega jaise exercise ho rahi ho)
    tl.to(iconRef.current, {
      y: -40,
      duration: 0.4,
      repeat: 3,
      yoyo: true,
      ease: "power1.inOut"
    });

    // 3. Text Fade in
    tl.fromTo(textRef.current, 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.5 }, 
      "-=0.5"
    );

    // 4. Sab kuch scale up hokar gayab hona
    tl.to([iconRef.current, textRef.current], {
      scale: 1.5,
      opacity: 0,
      duration: 0.5,
      delay: 0.2
    });

  }, [onFinished]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[999] bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Glow effect behind dumbbell */}
      <div className="absolute w-64 h-64 bg-red-600/20 blur-[100px] rounded-full"></div>
      
      <div ref={iconRef} className="relative text-red-500 mb-8">
        <Dumbbell size={120} strokeWidth={1.5} />
      </div>

      <div ref={textRef} className="text-center">
        <h2 className="text-4xl md:text-6xl font-black italic uppercase text-white tracking-tighter">
          Prepare to <span className="text-orange-500">Transform</span>
        </h2>
        <div className="mt-4 flex justify-center gap-1">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-2 h-2 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.1}s` }}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;