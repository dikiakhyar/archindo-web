"use client";

import { useEffect, useRef } from "react";

/**
 * Efek miring 3D mengikuti kursor.
 * Hanya aktif pada perangkat dengan mouse — di layar sentuh tidak ada
 * kursor untuk diikuti, jadi listener-nya tidak dipasang sama sekali.
 */
export default function TiltImage({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const shouldSkip = !window.matchMedia("(hover: hover) and (pointer: fine)")
      .matches;
    if (shouldSkip) return;

    const inner = el.firstElementChild as HTMLElement | null;
    if (!inner) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const rotateY = ((e.clientX - rect.left - rect.width / 2) / (rect.width / 2)) * 6;
      const rotateX = -((e.clientY - rect.top - rect.height / 2) / (rect.height / 2)) * 6;
      inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    };

    const reset = () => {
      inner.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", reset);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <div ref={wrapRef} className={className}>
      <div className="tilt-inner">{children}</div>
    </div>
  );
}
