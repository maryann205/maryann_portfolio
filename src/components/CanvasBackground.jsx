import React, { useEffect, useRef } from 'react';

export const CanvasBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Code symbols floating in background
    const symbols = ['</>', '{ }', '=>', 'PHP', 'AI', '[ ]', 'const', 'Python', 'BCA', 'data', '<div/>', 'import'];
    
    // Create particles
    const particleCount = Math.min(Math.floor(width / 35), 40);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      const isSymbol = Math.random() > 0.4;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.4 + 0.1,
        isSymbol: isSymbol,
        text: isSymbol ? symbols[Math.floor(Math.random() * symbols.length)] : null,
        fontSize: Math.floor(Math.random() * 6) + 11
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around edges
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.save();
        if (p.isSymbol && p.text) {
          ctx.font = `${p.fontSize}px "Fira Code", monospace`;
          ctx.fillStyle = `rgba(226, 91, 120, ${p.opacity * 0.7})`;
          ctx.fillText(p.text, p.x, p.y);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(143, 36, 56, ${p.opacity})`;
          ctx.shadowBlur = 8;
          ctx.shadowColor = 'rgba(143, 36, 56, 0.4)';
          ctx.fill();
        }
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.85
      }}
    />
  );
};
