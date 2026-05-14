'use client';
import { useEffect } from 'react';

/**
 * Mounts all scroll-driven animations (reveal, counters, skill bars, card tilt).
 * Kept in a single client component so every other component can be a server component.
 */
export default function RevealInit() {
  useEffect(() => {
    const fmt = (n: number) =>
      n >= 1000 ? Math.round(n).toLocaleString() : String(Math.round(n));

    // ── Reveal on scroll ──────────────────────────────────────────
    const revealIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            revealIO.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => revealIO.observe(el));

    // ── Counter animation ─────────────────────────────────────────
    const counterIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          const target = Number(el.dataset.target ?? 0);
          const dur = 1600;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / dur);
            const eased = 1 - Math.pow(1 - t, 3);
            el.textContent = fmt(target * eased);
            if (t < 1) requestAnimationFrame(tick);
            else el.textContent = fmt(target);
          };
          requestAnimationFrame(tick);
          counterIO.unobserve(e.target);
        });
      },
      { threshold: 0.3 }
    );
    document.querySelectorAll('.counter').forEach((el) => counterIO.observe(el));

    // ── Skill bar + number animation ──────────────────────────────
    const barIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const attr = e.target as HTMLElement;
          const bar = attr.querySelector('.bar-fill') as HTMLElement | null;
          const num = attr.querySelector('.attr-val') as HTMLElement | null;
          if (bar) bar.style.width = (bar.dataset.fill ?? '0') + '%';
          if (num) {
            const target = Number(num.dataset.skill ?? 0);
            const dur = 1400;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / dur);
              const eased = 1 - Math.pow(1 - t, 3);
              num.textContent = String(Math.round(target * eased));
              if (t < 1) requestAnimationFrame(tick);
              else num.textContent = String(target);
            };
            requestAnimationFrame(tick);
          }
          barIO.unobserve(e.target);
        });
      },
      { threshold: 0.4 }
    );
    document.querySelectorAll('.attr').forEach((el) => barIO.observe(el));

    // ── Player card 3-D tilt ──────────────────────────────────────
    const cardWrap = document.querySelector('.player-card') as HTMLElement | null;
    const cardInner = document.querySelector('.card-inner') as HTMLElement | null;
    const onMove = (ev: MouseEvent) => {
      if (!cardWrap || !cardInner) return;
      const r = cardWrap.getBoundingClientRect();
      const x = (ev.clientX - r.left) / r.width - 0.5;
      const y = (ev.clientY - r.top) / r.height - 0.5;
      cardInner.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
    };
    const onLeave = () => { if (cardInner) cardInner.style.transform = ''; };
    cardWrap?.addEventListener('mousemove', onMove);
    cardWrap?.addEventListener('mouseleave', onLeave);

    return () => {
      revealIO.disconnect();
      counterIO.disconnect();
      barIO.disconnect();
      cardWrap?.removeEventListener('mousemove', onMove);
      cardWrap?.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return null;
}
