'use client';

import { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '@/lib/motion/useMotion';

interface FilmParticle {
  x: number;
  y: number;
  size: number;
  vy: number;
  vx: number;
  alpha: number;
  baseAlpha: number;
}

export default function MediaBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Warm cinematic atmospheric motes
    const particleCount = Math.min(Math.floor((width * height) / 32000), 40);
    const particles: FilmParticle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const baseAlpha = Math.random() * 0.35 + 0.1;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.2 + 0.6,
        vx: (Math.random() - 0.5) * 0.2,
        vy: -Math.random() * 0.3 - 0.1, // gently drifting upwards like theatrical dust motes
        alpha: baseAlpha,
        baseAlpha,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around vertically
        if (p.y < 0) p.y = height;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = '#d4af37'; // warm film gold
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [prefersReduced]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#0a080d]">
      {/* Warm Cinematic Film Light Leaks & Lens Flares */}
      <div className="absolute top-[-15%] right-[-10%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-br from-amber-600/15 via-yellow-500/10 to-transparent blur-[160px] pointer-events-none" />
      <div className="absolute top-[40%] left-[-15%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tr from-orange-950/20 via-amber-900/10 to-transparent blur-[180px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[20%] w-[45vw] h-[45vw] rounded-full bg-yellow-600/10 blur-[150px] pointer-events-none" />

      {/* Subtle Analog Film Grain Texture Effect */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.4) 1px, transparent 1px)',
          backgroundSize: '4px 4px',
        }}
      />

      {/* Atmospheric Canvas Motes */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
