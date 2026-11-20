import React, { useEffect, useRef } from 'react';

interface BlinkingDotsProps {
  dotCount?: number;
  className?: string;
  dotColor?: string;
  glowColor?: string;
}

interface Dot {
  x: number;
  y: number;
  size: number;
  baseAlpha: number;
  alpha: number;
  blinkSpeed: number;
  phase: number;
  vx: number;
  vy: number;
  layer: number; // 0: background layer (slower, darker), 1: foreground layer (brighter, parallax)
}

export const BlinkingDots: React.FC<BlinkingDotsProps> = ({
  dotCount = 85,
  className = '',
  dotColor = '#66D9EF',
  glowColor = 'rgba(102, 217, 239, 0.4)',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates for subtle ambient parallax
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Initialize dots in 2 depth layers
    const dots: Dot[] = [];
    for (let i = 0; i < dotCount; i++) {
      const isForeground = i % 3 === 0;
      dots.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: isForeground ? Math.random() * 1.5 + 1.2 : Math.random() * 1.0 + 0.6,
        baseAlpha: isForeground ? 0.35 + Math.random() * 0.35 : 0.12 + Math.random() * 0.2,
        alpha: Math.random(),
        blinkSpeed: 0.008 + Math.random() * 0.018,
        phase: Math.random() * Math.PI * 2,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        layer: isForeground ? 1 : 0,
      });
    }

    let isDocumentVisible = true;
    const handleVisibilityChange = () => {
      isDocumentVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const render = () => {
      if (!isDocumentVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Smooth mouse follow
      mouseX += (targetMouseX - mouseX) * 0.03;
      mouseY += (targetMouseY - mouseY) * 0.03;

      const parallaxOffsetX = (mouseX - width / 2) * 0.02;
      const parallaxOffsetY = (mouseY - height / 2) * 0.02;

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];

        // Animate blinking phase
        dot.phase += dot.blinkSpeed;
        const currentAlpha = Math.max(
          0.04,
          dot.baseAlpha + Math.sin(dot.phase) * (dot.baseAlpha * 0.8)
        );

        // Drift
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Wrap around bounds
        if (dot.x < 0) dot.x = width;
        if (dot.x > width) dot.x = 0;
        if (dot.y < 0) dot.y = height;
        if (dot.y > height) dot.y = 0;

        // Render dot with subtle layer offset
        const layerMultiplier = dot.layer === 1 ? 1.5 : 0.6;
        const renderX = dot.x + parallaxOffsetX * layerMultiplier;
        const renderY = dot.y + parallaxOffsetY * layerMultiplier;

        ctx.save();
        ctx.beginPath();
        ctx.arc(renderX, renderY, dot.size, 0, Math.PI * 2);

        if (dot.layer === 1 && currentAlpha > 0.4) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = glowColor;
        }

        ctx.fillStyle = dotColor;
        ctx.globalAlpha = currentAlpha;
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, [dotCount, dotColor, glowColor]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 1, // Sits above obsidian canvas, below foreground content
        opacity: 0.9,
        border: 'none',
        outline: 'none',
      }}
    />
  );
};
