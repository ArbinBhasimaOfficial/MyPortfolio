import { useEffect, useRef } from "react";
import * as THREE from "three";


const COLORS = [
  new THREE.Color("#00e5c8"),
  new THREE.Color("#00b8a0"),
  new THREE.Color("#4466cc"),
  new THREE.Color("#8338ec"),
  new THREE.Color("#0088cc"),
];

export default function Particles2({ count = 120, mode = "float" }) {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -999, y: -999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let W, H, particles = [], animId;

    const resize = () => {
      W = canvas.width = canvas.offsetWidth * devicePixelRatio;
      H = canvas.height = canvas.offsetHeight * devicePixelRatio;
    };

    class Particle {
      constructor(init = false) {
        this.x = Math.random() * W;
        this.y = init ? Math.random() * H : -5;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.size = Math.random() * 2.5 + 0.5;
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        this.alpha = Math.random() * 0.7 + 0.3;
        this.life = Math.random() * 300 + 200;
        this.age = init ? Math.random() * this.life : 0;
        this.angle = Math.random() * Math.PI * 2;
        this.orbitR = Math.random() * 80 + 20;
        this.orbitSpeed = (Math.random() - 0.5) * 0.04;
        this.twinkle = Math.random() * 0.02 + 0.005;
        this.shape = Math.random() < 0.15 ? "diamond" : "circle";
      }
      update() {
        this.age++;
        const mx = mouse.current.x * devicePixelRatio;
        const my = mouse.current.y * devicePixelRatio;
        const dx = this.x - mx, dy = this.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const repelR = 120 * devicePixelRatio;

        if (mode === "float") {
          this.x += this.vx;
          this.y += this.vy;
          if (dist < repelR) {
            const f = (repelR - dist) / repelR * 2;
            this.x += (dx / dist) * f;
            this.y += (dy / dist) * f;
          }
        } else if (mode === "vortex") {
          const a = Math.atan2(dy, dx);
          const pull = dist < 200 * devicePixelRatio
            ? (200 * devicePixelRatio - dist) / (200 * devicePixelRatio) : 0;
          this.x += (-Math.sin(a) * pull * 2 - (dx / dist) * pull * 0.5);
          this.y += (Math.cos(a) * pull * 2 - (dy / dist) * pull * 0.5);
          this.x += this.vx * 0.5;
          this.y += this.vy * 0.5;
        }

        if (this.x < -20) this.x = W + 20;
        if (this.x > W + 20) this.x = -20;
        if (this.y < -20) this.y = H + 20;
        if (this.y > H + 20) this.y = -20;
        if (this.age > this.life) Object.assign(this, new Particle());
      }
      draw() {
        const fade = Math.min(1, this.age / 30) * Math.min(1, (this.life - this.age) / 30);
        const twinkle = 0.6 + 0.4 * Math.sin(this.age * this.twinkle);
        ctx.globalAlpha = this.alpha * fade * twinkle;
        ctx.fillStyle = this.color;
        if (this.shape === "diamond") {
          ctx.beginPath();
          ctx.moveTo(this.x, this.y - this.size * 2);
          ctx.lineTo(this.x + this.size, this.y);
          ctx.lineTo(this.x, this.y + this.size * 2);
          ctx.lineTo(this.x - this.size, this.y);
          ctx.closePath();
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.globalAlpha = 1;
      }
    }

    const drawConnections = () => {
      const maxD = 100 * devicePixelRatio;
      for (let i = 0; i < particles.length; i++)
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < maxD) {
            ctx.globalAlpha = (1 - d / maxD) * 0.25;
            ctx.strokeStyle = "#00e5c8";
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      ctx.globalAlpha = 1;
    };

    const loop = () => {
      ctx.fillStyle = "#040810";
      ctx.fillRect(0, 0, W, H);
      drawConnections();
      particles.forEach(p => { p.update(); p.draw(); });
      animId = requestAnimationFrame(loop);
    };

    resize();
    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", e => {
      const r = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    });
    canvas.addEventListener("mouseleave", () => {
      mouse.current = { x: -999, y: -999 };
    });

    for (let i = 0; i < count; i++) particles.push(new Particle(true));
    loop();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [count, mode]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100%", display: "block", background: "#040810" }}
    />
  );
}