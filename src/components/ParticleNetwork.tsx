import React, { useEffect, useRef } from 'react';

export const ParticleNetwork: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;
    const bases = ['A', 'T', 'G', 'C'];
    
    let floatingLetters: FloatingLetter[] = [];
    let ambientParticles: AmbientParticle[] = [];

    // Ambient floating dots representing data/cells
    class AmbientParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      isSunrise: boolean;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.size = Math.random() * 2 + 0.5;
        this.alpha = Math.random() * 0.4 + 0.1;
        this.isSunrise = Math.random() > 0.7;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.isSunrise ? `rgba(16, 185, 129, ${this.alpha})` : `rgba(2, 132, 199, ${this.alpha})`;
        ctx.fill();
      }
    }

    // Floating genomic letters
    class FloatingLetter {
      x: number = 0;
      y: number = 0;
      vx: number = 0;
      vy: number = 0;
      char: string = 'A';
      alpha: number = 0;
      targetAlpha: number = 0;
      size: number = 0;
      isSunrise: boolean = false;

      constructor() {
        this.reset();
        this.y = Math.random() * canvas!.height; // Initial random spawn
      }

      reset() {
        this.x = Math.random() * canvas!.width;
        this.y = canvas!.height + 50;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = -Math.random() * 1.2 - 0.5;
        this.char = bases[Math.floor(Math.random() * bases.length)];
        this.targetAlpha = Math.random() * 0.25 + 0.05;
        this.alpha = 0;
        this.size = Math.random() * 14 + 10;
        this.isSunrise = Math.random() > 0.6;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        
        // Fade in
        if (this.alpha < this.targetAlpha && this.y > canvas!.height * 0.2) {
            this.alpha += 0.005;
        }
        // Fade out
        if (this.y < canvas!.height * 0.2) {
            this.alpha -= 0.005;
        }
        // Respawn
        if (this.y < -50 || (this.alpha <= 0 && this.y < canvas!.height * 0.5)) {
            this.reset();
        }
      }

      draw() {
        if (!ctx) return;
        ctx.font = `bold ${this.size}px monospace`;
        ctx.fillStyle = this.isSunrise ? `rgba(16, 185, 129, ${this.alpha})` : `rgba(2, 132, 199, ${this.alpha})`;
        ctx.fillText(this.char, this.x, this.y);
      }
    }

    const drawDNA = () => {
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate(-Math.PI / 6); // Diagonal tilt

      const renderQueue: { z: number; draw: () => void }[] = [];

      // Calculate number of pairs based on screen size so it always spans across
      const numBasePairs = Math.floor(Math.max(canvas.width, canvas.height) / 20);
      const spacing = 35;
      const helixRadius = Math.min(canvas.width * 0.2, 180);
      const startY = -(numBasePairs * spacing) / 2;

      for (let i = 0; i < numBasePairs; i++) {
        const y = startY + i * spacing;
        const angle = i * 0.25 - time * 1.5;

        const x1 = Math.sin(angle) * helixRadius;
        const z1 = Math.cos(angle);
        const x2 = Math.sin(angle + Math.PI) * helixRadius;
        const z2 = Math.cos(angle + Math.PI);

        // Connection Line (Base pair bonding)
        const zLine = (z1 + z2) / 2;
        const lineAlpha = 0.15 + ((zLine + 1) / 2) * 0.4;
        
        renderQueue.push({
          z: zLine,
          draw: () => {
            const grad = ctx.createLinearGradient(x1, y, x2, y);
            grad.addColorStop(0, `rgba(2, 132, 199, ${lineAlpha})`);
            grad.addColorStop(1, `rgba(16, 185, 129, ${lineAlpha})`);
            
            ctx.beginPath();
            ctx.moveTo(x1, y);
            ctx.lineTo(x2, y);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 1.5;
            ctx.stroke();
          }
        });

        // Node 1 (Strand 1 - Green)
        const alpha1 = 0.3 + ((z1 + 1) / 2) * 0.7;
        const size1 = 2 + ((z1 + 1) / 2) * 3.5;
        renderQueue.push({
          z: z1,
          draw: () => {
            // Glow layer
            ctx.beginPath();
            ctx.arc(x1, y, size1 * 3, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(2, 132, 199, ${alpha1 * 0.2})`;
            ctx.fill();
            
            // Base layer
            ctx.beginPath();
            ctx.arc(x1, y, size1, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(2, 132, 199, ${alpha1})`;
            ctx.fill();
            // Core bright dot for depth
            ctx.beginPath();
            ctx.arc(x1, y, size1 * 0.4, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha1 * 0.8})`;
            ctx.fill();
          }
        });

        // Node 2 (Strand 2 - Sunrise Yellow)
        const alpha2 = 0.3 + ((z2 + 1) / 2) * 0.7;
        const size2 = 2 + ((z2 + 1) / 2) * 3.5;
        renderQueue.push({
          z: z2,
          draw: () => {
            // Glow layer
            ctx.beginPath();
            ctx.arc(x2, y, size2 * 3, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(16, 185, 129, ${alpha2 * 0.2})`;
            ctx.fill();

            // Base layer
            ctx.beginPath();
            ctx.arc(x2, y, size2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(16, 185, 129, ${alpha2})`;
            ctx.fill();
            // Core bright dot for depth
            ctx.beginPath();
            ctx.arc(x2, y, size2 * 0.4, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha2 * 0.8})`;
            ctx.fill();
          }
        });
      }

      // Draw by Z-index for 3D sorting simulation
      renderQueue.sort((a, b) => a.z - b.z).forEach(item => item.draw());
      
      ctx.restore();
    };

    const init = () => {
      floatingLetters = [];
      ambientParticles = [];
      for (let i = 0; i < 40; i++) {
        floatingLetters.push(new FloatingLetter());
      }
      for (let i = 0; i < 100; i++) {
        ambientParticles.push(new AmbientParticle());
      }
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.015;

      // Sunrise Background Gradient
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height * 0.8, 0,
        canvas.width / 2, canvas.height * 0.8, canvas.width * 0.6
      );
      gradient.addColorStop(0, 'rgba(16, 185, 129, 0.08)');
      gradient.addColorStop(0.3, 'rgba(2, 132, 199, 0.03)');
      gradient.addColorStop(1, 'rgba(248, 250, 252, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Bottom horizon glow
      const horizonGradient = ctx.createLinearGradient(0, canvas.height, 0, canvas.height * 0.7);
      horizonGradient.addColorStop(0, 'rgba(16, 185, 129, 0.06)');
      horizonGradient.addColorStop(1, 'rgba(16, 185, 129, 0)');
      ctx.fillStyle = horizonGradient;
      ctx.fillRect(0, canvas.height * 0.7, canvas.width, canvas.height * 0.3);

      // Draw ambient particles
      ambientParticles.forEach(p => {
        p.update();
        p.draw();
      });

      // Draw DNA Double Helix
      drawDNA();

      // Draw floating genetic letters
      floatingLetters.forEach(l => {
        l.update();
        l.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-80" style={{ willChange: 'transform' }} />;
};
