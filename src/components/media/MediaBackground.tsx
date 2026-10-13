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
  color: string;
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

    // Warm champagne atelier particles (Pale Champagne Silk, Brushed Brass, Soft Ivory)
    const particleCount = Math.min(Math.floor((width * height) / 32000), 40);
    const particles: FilmParticle[] = [];
    const colors = ['#e8d5b5', '#f5e8d2', '#b89758', '#d6c4a5'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.0 + 0.6,
        vx: (Math.random() - 0.5) * 0.2,
        vy: -Math.random() * 0.3 - 0.08, // Gently drifting upwards like projector dust motes
        alpha: Math.random() * 0.25 + 0.06,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.y < 0) p.y = height;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
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
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#0c0a0e]">
      {/* Soft Champagne Silk & Deep Espresso Atmospheric Halos */}
      <div className="absolute top-[-15%] right-[-8%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-[#e8d5b5]/10 via-[#b89758]/5 to-transparent blur-[160px] pointer-events-none" />
      <div className="absolute top-[35%] left-[-15%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-tr from-[#1d1625]/40 via-[#271e16]/20 to-transparent blur-[180px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[15%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tl from-[#e8d5b5]/8 via-[#b89758]/5 to-transparent blur-[160px] pointer-events-none" />

      {/* Subtle Anamorphic Champagne Horizontal Flare */}
      <div className="absolute top-[20%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#e8d5b5]/20 to-transparent blur-[1px] pointer-events-none" />
      <div className="absolute top-[65%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#b89758]/15 to-transparent blur-[1px] pointer-events-none" />

      {/* Analog 35mm Celluloid Grain Texture */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-screen"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 50%, rgba(232, 213, 181, 0.4) 1px, transparent 1px)',
          backgroundSize: '4px 4px',
        }}
      />

      {/* Atmospheric Canvas Motes */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
