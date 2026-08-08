"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "./ThemeContext";

type NavItem = { href: string; label: string };

const ABOUT_LINKS: NavItem[] = [
  { href: "/about", label: "About Us" },
  { href: "/visionmission", label: "Vision & Missions" },
  { href: "/staff", label: "Our Team" },
];

// Catatan: menu "Latest News" dihapus sementara karena halamannya belum ada
// (dulu tautannya mengarah balik ke "/"). Begitu halaman berita dibuat,
// cukup tambahkan { href: "/news", label: "Latest News" } di bawah ini.
const MAIN_LINKS: NavItem[] = [
  { href: "/services", label: "Services" },
  { href: "/portofolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { dark, toggle } = useTheme();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Tutup semua menu tiap kali pindah halaman.
  // Disesuaikan saat render (bukan di dalam effect) agar tidak memicu
  // render berantai — pola resmi React untuk "state turunan dari props".
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setDrawerOpen(false);
    setDropdownOpen(false);
  }

  // Kunci scroll body saat drawer terbuka.
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  // Tutup dropdown saat klik di luar atau tekan Escape.
  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setDropdownOpen(false);
      setDrawerOpen(false);
    };

    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header className="nav">
        <Link href="/" className="nav__brand" aria-label="Archindo GeoIntelligence — beranda">
          <Image
            src="/hero.webp"
            alt=""
            width={35}
            height={35}
            priority
            style={{ width: 35, height: 35, objectFit: "contain" }}
          />
          <span>Archindo GeoIntelligence</span>
        </Link>

        <div className="nav__right">
          {/* ---- Menu desktop ---- */}
          <nav className="nav__links" aria-label="Menu utama">
            <div className="nav__dropdown" ref={dropdownRef}>
              <button
                type="button"
                className="nav__dropdown-btn"
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
                onClick={() => setDropdownOpen((open) => !open)}
              >
                Home <span aria-hidden="true">▾</span>
              </button>

              <div className="nav__menu" data-open={dropdownOpen} role="menu">
                {ABOUT_LINKS.map((item) => (
                  <Link key={item.href} href={item.href} role="menuitem">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {MAIN_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav__link"
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <ThemeToggle dark={dark} onToggle={toggle} />

          {/* ---- Hamburger (hanya muncul di layar kecil) ---- */}
          <button
            type="button"
            className="nav__burger"
            aria-label={drawerOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={drawerOpen}
            aria-controls="mobile-drawer"
            onClick={() => setDrawerOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* ---- Drawer mobile ---- */}
      <div
        className="drawer-scrim"
        data-open={drawerOpen}
        onClick={() => setDrawerOpen(false)}
        aria-hidden="true"
      />

      <aside
        id="mobile-drawer"
        className="drawer"
        data-open={drawerOpen}
        aria-hidden={!drawerOpen}
        inert={!drawerOpen}
      >
        <nav aria-label="Menu mobile">
          <Link href="/" aria-current={isActive("/") ? "page" : undefined}>
            Home
          </Link>

          <p className="drawer__group-title">Tentang</p>
          {ABOUT_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="is-sub"
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}

          <div className="drawer__divider" />

          {MAIN_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}

function ThemeToggle({ dark, onToggle }: { dark: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      role="switch"
      suppressHydrationWarning
      aria-checked={dark}
      aria-label="Ganti mode terang / gelap"
    >
      <span className="theme-toggle__icon theme-toggle__icon--moon" aria-hidden="true">
        🌙
      </span>
      <span className="theme-toggle__icon theme-toggle__icon--sun" aria-hidden="true">
        ☀️
      </span>
      <span className="theme-toggle__knob" />
    </button>
  );
}
