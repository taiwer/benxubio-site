import React, { useEffect, useRef } from 'react';

export const BenxuParticleText: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const text = 'BENXU BIO';
    let mouse = { x: -1000, y: -1000, radius: 60 };

    class Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      size: number;
      density: number;
      color: string;
      alpha: number;

      constructor(x: number, y: number) {
        // Start scattered from random locations on screen
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.baseX = x;
        this.baseY = y;
        this.size = Math.random() * 2 + 1;
        this.density = (Math.random() * 40) + 5;
        this.color = Math.random() > 0.8 ? '#DFFF00' : '#39FF14';
        this.alpha = Math.random() * 0.5 + 0.5;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        ctx.globalAlpha = 1.0;
      }

      update() {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = mouse.radius;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;

        if (distance < maxDistance) {
          this.x -= directionX;
          this.y -= directionY;
        } else {
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX;
            this.x -= dx / 10;
          }
          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY;
            this.y -= dy / 10;
          }
        }
        
        // slight wriggle to make it look alive
        if (Math.random() > 0.9) {
           this.x += (Math.random() - 0.5) * 0.5;
           this.y += (Math.random() - 0.5) * 0.5;
        }
      }
    }

    const init = () => {
      particles = [];
      const width = canvas.width;
      const height = canvas.height;
      
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, width, height);

      // Draw text to read its pixels
      let fontSize = Math.min(width / text.length * 1.5, 120);
      if (width < 600) fontSize = width / text.length * 1.8;
      
      ctx.font = `900 ${fontSize}px sans-serif`;
      ctx.fillStyle = 'white';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      
      // Measure text to center it properly
      const textMetrics = ctx.measureText(text);
      let startX = (width - textMetrics.width) / 2;
      ctx.fillText(text, startX, height / 2);

      const textCoordinates = ctx.getImageData(0, 0, width, height);
      
      // Step determines gap between particles (lower = denser)
      const step = width < 600 ? 3 : 4;
      
      for (let y = 0; y < textCoordinates.height; y += step) {
        for (let x = 0; x < textCoordinates.width; x += step) {
          if (textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 3] > 128) {
             let positionX = x + Math.random() * 2 - 1;
             let positionY = y + Math.random() * 2 - 1;
             particles.push(new Particle(positionX, positionY));
          }
        }
      }
      
      ctx.clearRect(0, 0, width, height);
    };

    const handleResize = () => {
       const parent = canvas.parentElement;
       if (parent) {
         canvas.width = parent.clientWidth;
         canvas.height = parent.clientHeight || 200;
         init();
       }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw faint connections between close particles to make it look biological
      /* 
      // Optional: This might hurt performance depending on device
      ctx.beginPath();
      for (let i = 0; i < particles.length; i+=3) { // optimization step
          for (let j = i + 1; j < particles.length; j+=3) {
              const dx = particles[i].x - particles[j].x;
              const dy = particles[i].y - particles[j].y;
              if (dx*dx + dy*dy < 400) {
                  ctx.moveTo(particles[i].x, particles[i].y);
                  ctx.lineTo(particles[j].x, particles[j].y);
              }
          }
      }
      ctx.strokeStyle = 'rgba(57, 255, 20, 0.05)';
      ctx.stroke();
      */

      for (let i = 0; i < particles.length; i++) {
        particles[i].draw();
        particles[i].update();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    
    // Slight delay to ensure parent bounds are settled
    setTimeout(() => {
        handleResize(); 
        animate();
    }, 100);

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="w-full relative group">
       <div className="absolute inset-0 bg-accent/5 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-full" pointer-events="none"></div>
       <canvas ref={canvasRef} className="w-full h-[120px] md:h-[200px] cursor-crosshair z-10 relative" />
    </div>
  );
};
