"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Satu observer untuk seluruh situs.
 * Sebelumnya tiap halaman menulis ulang IntersectionObserver yang sama.
 * Dipasang sekali di layout, jadi halaman tidak perlu mengurus animasi lagi.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const targets = document.querySelectorAll<HTMLElement>(".reveal");

    if (reduceMotion) {
      targets.forEach((el) => el.classList.add("active"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("active");
          // Sekali muncul, berhenti diamati — hemat kerja browser saat scroll.
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // Dijalankan ulang tiap pindah halaman agar elemen baru ikut teramati.
  }, [pathname]);

  return null;
}
