'use client';

import { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '@/lib/motion/useMotion';

interface LightMote {
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

    // Sunlit studio atelier motes (Soft Champagne, Warm Gold, Sunlit Linen)
    const particleCount = Math.min(Math.floor((width * height) / 38000), 30);
    const particles: LightMote[] = [];
    const colors = ['#b89047', '#c59b3f', '#d9c29c', '#9e7526'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.2 + 0.8,
        vx: (Math.random() - 0.5) * 0.18,
        vy: -Math.random() * 0.25 - 0.05,
        alpha: Math.random() * 0.18 + 0.04,
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
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#faf8f5]">
      {/* Luminous Sunlit Studio Atmospheric Soft Radial Glows */}
      <div className="absolute top-[-10%] right-[-5%] w-[65vw] h-[65vw] rounded-full bg-gradient-to-br from-[#f2ebdc]/70 via-[#ede2cd]/40 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute top-[35%] left-[-15%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-[#f5eee1]/60 via-[#f0e7d6]/30 to-transparent blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[10%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-tl from-[#ede1cb]/50 via-[#f7f2e8]/40 to-transparent blur-[150px] pointer-events-none" />

      {/* Subtle Editorial Hairline Divider Beams */}
      <div className="absolute top-[22%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#b89047]/15 to-transparent pointer-events-none" />
      <div className="absolute top-[68%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#b89047]/10 to-transparent pointer-events-none" />

      {/* Fine Museum Paper Grain Texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 50%, rgba(18, 17, 21, 0.4) 1px, transparent 1px)',
          backgroundSize: '4px 4px',
        }}
      />

      {/* Floating Canvas Motes */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
