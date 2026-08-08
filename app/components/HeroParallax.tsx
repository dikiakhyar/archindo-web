"use client";

import { useEffect, useRef } from "react";

/**
 * Efek parallax pada latar hero.
 *
 * Dimatikan otomatis untuk layar sentuh / layar kecil dan bagi pengguna
 * yang memilih "kurangi animasi" — di HP efek ini berat dan justru
 * membuat scroll tersendat.
 */
export default function HeroParallax({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const shouldSkip = window.matchMedia(
      "(max-width: 900px), (prefers-reduced-motion: reduce)"
    ).matches;
    if (shouldSkip) return;

    let frame = 0;

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        el.style.transform = `translate3d(0, ${window.scrollY * 0.25}px, 0)`;
        frame = 0;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} className={className} aria-hidden="true">
      {children}
    </div>
  );
}
