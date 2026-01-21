import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Dumbbell, Zap, Circle, Activity } from 'lucide-react';

const ParticleBackground = () => {
  const containerRef = useRef(null);
  const particlesArray = Array.from({ length: 35 });

  useEffect(() => {
    if (!containerRef.current) return;
    const particles = containerRef.current.children;

    // // ParticleBackground.jsx ke andar useEffect mein ye change karein
gsap.set(particles, {
  x: () => Math.random() * (window.innerWidth - 60), // 60px ka margin taaki edge se bahar na jaye
  y: () => Math.random() * (window.innerHeight - 60),
  opacity: 0,
  scale: () => Math.random() * 0.5 + 0.5,
});

    gsap.to(particles, {
      opacity: 0.5,
      duration: 2,
    });

    gsap.to(particles, {
      x: "+=random(-100, 100)",
      y: "+=random(-100, 100)",
      rotation: "random(-360, 360)",
      duration: "random(15, 25)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, []);

  return (
    // 'absolute inset-0' taaki ye sirf Hero div ke andar rahe
    <div 
      ref={containerRef} 
      className="absolute inset-0 pointer-events-none overflow-hidden bg-transparent"
      style={{ zIndex: 0 }} 
    >
      {particlesArray.map((_, i) => (
        <div key={i} className="absolute text-red-600/40"> 
          {i % 4 === 0 && <Dumbbell size={24} />}
          {i % 4 === 1 && <Zap size={20} />}
          {i % 4 === 2 && <Activity size={22} />}
          {i % 4 === 3 && <Circle size={15} strokeWidth={3} />}
        </div>
      ))}
    </div>
  );
};

export default ParticleBackground;