import React, { useEffect, useRef } from "react";

export const BenxuParticleText: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const sequence = ["B", "E", "N", "X", "U", "B", "I", "O", "BENXU BIO"];
    let currentStep = 0;
    let lastChangeTime = Date.now();
    let allCoords: { x: number; y: number }[][] = [];

    let mouse = { x: -1000, y: -1000, radius: 100 };

    class Particle {
      x: number;
      y: number;
      vx: number = 0;
      vy: number = 0;
      targetX: number;
      targetY: number;
      size: number;
      density: number;
      color: string;
      alpha: number;
      friction: number;
      spring: number;

      constructor(x: number, y: number) {
        // Start scattered from random locations on screen
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.targetX = x;
        this.targetY = y;
        this.size = Math.random() * 2 + 0.5;
        this.density = Math.random() * 15 + 5;
        this.color = Math.random() > 0.7 ? "#0284c7" : "#10b981";
        this.alpha = Math.random() * 0.6 + 0.4;
        this.friction = Math.random() * 0.1 + 0.75; // 0.75 - 0.85
        this.spring = Math.random() * 0.05 + 0.05; // 0.05 - 0.10
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.alpha;
        ctx.fillRect(
          this.x - this.size,
          this.y - this.size,
          this.size * 2,
          this.size * 2,
        );
        ctx.globalAlpha = 1.0;
      }

      update() {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          let forceDirectionX = dx / distance;
          let forceDirectionY = dy / distance;
          let force = (mouse.radius - distance) / mouse.radius;
          this.vx -= forceDirectionX * force * this.density;
          this.vy -= forceDirectionY * force * this.density;
        }

        let targetDx = this.targetX - this.x;
        let targetDy = this.targetY - this.y;

        this.vx += targetDx * this.spring;
        this.vy += targetDy * this.spring;

        this.vx *= this.friction;
        this.vy *= this.friction;

        this.x += this.vx;
        this.y += this.vy;

        // slight wriggle to make it look alive
        if (Math.random() > 0.92) {
          this.vx += (Math.random() - 0.5) * 0.5;
          this.vy += (Math.random() - 0.5) * 0.5;
        }
      }
    }

    const getTextCoordinates = (
      text: string,
      width: number,
      height: number,
    ) => {
      ctx.clearRect(0, 0, width, height);

      let fontSize = 160;
      if (text.length === 1) {
        fontSize = Math.min(width * 0.4, 180);
      } else {
        fontSize = width < 600 ? 80 : 160;
      }

      ctx.font = `900 ${fontSize}px "Inter", sans-serif`;

      // Ensure text fits within 94% of canvas width to prevent clipping
      let textWidth = ctx.measureText(text).width;
      while (textWidth > width * 0.94 && fontSize > 10) {
        fontSize -= 2;
        ctx.font = `900 ${fontSize}px "Inter", sans-serif`;
        textWidth = ctx.measureText(text).width;
      }

      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      ctx.fillText(text, width / 2, height / 2);

      const textCoordinates = ctx.getImageData(0, 0, width, height);
      let coords = [];
      const step = width < 600 ? 2 : 3;

      for (let y = 0; y < textCoordinates.height; y += step) {
        for (let x = 0; x < textCoordinates.width; x += step) {
          const alpha =
            textCoordinates.data[y * 4 * textCoordinates.width + x * 4 + 3];
          if (alpha > 128) {
            coords.push({
              x: x + (Math.random() - 0.5) * (step * 0.5),
              y: y + (Math.random() - 0.5) * (step * 0.5),
            });
          }
        }
      }
      ctx.clearRect(0, 0, width, height);
      return coords;
    };

    const init = () => {
      const width = canvas.width;
      const height = canvas.height;
      if (width === 0 || height === 0) return;

      allCoords = sequence.map((txt) => getTextCoordinates(txt, width, height));

      const maxParticles = Math.max(...allCoords.map((c) => c.length));

      particles = [];
      const initialCoords = allCoords[0];
      if (!initialCoords || initialCoords.length === 0) return;

      for (let i = 0; i < maxParticles; i++) {
        const coord = initialCoords[i % initialCoords.length];
        particles.push(new Particle(coord.x, coord.y));
      }

      currentStep = 0;
      lastChangeTime = Date.now();
    };

    let canvasRect = { left: 0, top: 0, width: 0, height: 0 };

    const handleResize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight || 200;
        canvasRect = canvas.getBoundingClientRect();
        init();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const now = Date.now();
      const currentDuration = currentStep === sequence.length - 1 ? 5000 : 700; // 5s for full word, 0.7s for letters

      if (now - lastChangeTime > currentDuration && allCoords.length > 0) {
        currentStep = (currentStep + 1) % sequence.length;
        lastChangeTime = now;

        const newCoords = allCoords[currentStep];
        if (newCoords && newCoords.length > 0) {
          for (let i = 0; i < particles.length; i++) {
            const coordIdx = Math.floor(Math.random() * newCoords.length);
            const coord = newCoords[coordIdx];
            particles[i].targetX = coord.x;
            particles[i].targetY = coord.y;
          }
        }
      }

      for (let i = 0; i < particles.length; i++) {
        particles[i].draw();
        particles[i].update();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.offsetX;
      mouse.y = e.offsetY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    setTimeout(() => {
      handleResize();
      animate();
    }, 100);

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="w-full relative group">
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 60%)",
        }}
      ></div>
      <canvas
        ref={canvasRef}
        className="w-full h-[120px] md:h-[200px] cursor-crosshair z-10 relative"
      />
    </div>
  );
};
