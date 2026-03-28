import { useEffect, useRef } from 'react';
import './Hero.css';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  alpha: number;
}

function createParticle(w: number, h: number): Particle {
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    r: Math.random() * 1.5 + 0.5,
    alpha: Math.random() * 0.5 + 0.1,
  };
}

function updateParticle(p: Particle, w: number, h: number) {
  p.x += p.vx;
  p.y += p.vy;
  if (p.x < 0 || p.x > w) p.vx *= -1;
  if (p.y < 0 || p.y > h) p.vy *= -1;
}

function drawParticle(ctx: CanvasRenderingContext2D, p: Particle) {
  ctx.beginPath();
  ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(168, 85, 247, ${p.alpha})`;
  ctx.fill();
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let particles: Particle[] = [];
    const COUNT = 55;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const init = () => {
      resize();
      particles = Array.from({ length: COUNT }, () =>
        createParticle(canvas.width, canvas.height)
      );
    };

    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(124, 58, 237, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        updateParticle(p, canvas.width, canvas.height);
        drawParticle(ctx, p);
      });
      drawLines();
      animId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const ro = new ResizeObserver(init);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      <canvas ref={canvasRef} className="hero__canvas" aria-hidden="true" />
      <div className="hero__glow hero__glow--1" aria-hidden="true" />
      <div className="hero__glow hero__glow--2" aria-hidden="true" />

      <div className="hero__content container">
        <p className="hero__eyebrow">
          <span className="hero__dot" />
          Available for hire
        </p>

        <h1 className="hero__title">
          v<span className="hero__title--accent">Danix</span>
        </h1>

        <p className="hero__tagline">
          Full-Stack <span className="hero__tagline--highlight">.NET Developer</span> available for hire
        </p>

        <p className="hero__sub">
          Building clean, scalable software — from backend architecture to polished frontends.
        </p>

        <div className="hero__actions">
          <a
            href="https://www.fiverr.com/daanix"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__btn hero__btn--primary"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M23 9h-1c0-3.866-3.134-7-7-7v-1c0-.552-.447-1-1-1s-1 .448-1 1v1c-3.866 0-7 3.134-7 7h-1c-.552 0-1 .448-1 1s.448 1 1 1h1v3c0 3.309 2.691 6 6 6v2c0 .552.448 1 1 1s1-.448 1-1v-2c3.309 0 6-2.691 6-6v-3h1c.553 0 1-.448 1-1s-.447-1-1-1z"/>
            </svg>
            Hire me on Fiverr
          </a>

          <a
            href="#contact"
            className="hero__btn hero__btn--secondary"
            onClick={scrollToContact}
          >
            Get in touch
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-value">2+</span>
            <span className="hero__stat-label">Projects</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-value">.NET</span>
            <span className="hero__stat-label">Specialist</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-value">Hire</span>
            <span className="hero__stat-label">via Fiverr</span>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="hero__scroll"
        onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }); }}
        aria-label="Scroll to about section"
      >
        <span className="hero__scroll-line" />
        <span className="hero__scroll-text">Scroll</span>
      </a>
    </section>
  );
}
