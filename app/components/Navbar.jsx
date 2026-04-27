"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "./ThemeContext";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const { dark, setDark } = useTheme();

  return (
    <>
      

        {/* NAVBAR */}
      <header
  style={{
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 60px",
  zIndex: 9999,

  background: dark ? "#0d0d0d" : "#ffffffee",

  borderBottom: dark
    ? "1px solid rgba(255,255,255,0.08)"
    : "1px solid rgba(0,0,0,0.06)",

  boxShadow: dark
    ? "0 6px 30px rgba(0,0,0,0.6)"
    : "0 6px 30px rgba(0,0,0,0.08)"
}}
>
        <Link href="/" style={{ textDecoration: "none" }}>
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "10px",
      cursor: "pointer"
    }}
  >
    {/* LOGO IMAGE */}
    <img
      src="/hero.png"
      alt="hero"
      style={{
        width: "35px",
        height: "35px",
        objectFit: "contain"
      }}
    />

    {/* TEXT */}
    <h1 style={{ color: "#00a86b", margin: 0, fontSize: "20px" }}>
      Archindo GeoIntelligence
    </h1>
  </div>
</Link>

        <nav style={{ display: "flex", gap: "20px", alignItems: "center" }}>
         
          {/* TOGGLE */}
<div
  onClick={() => setDark(!dark)}
  style={{
    width: "55px",
    height: "26px",
    borderRadius: "20px",
    background: dark ? "#00a86b" : "#ddd",
    display: "flex",
    alignItems: "center",
    padding: "3px",
    cursor: "pointer",
    position: "relative",
    boxShadow: "0 0 5px rgba(255, 255, 255, 0.3)"
  }}
>
  {/* ICON KIRI (MOON) */}
  <span
    style={{
      position: "absolute",
      left: "8px",
      fontSize: "12px",
      opacity: dark ? 1 : 0.5
    }}
  >
    🌙
  </span>

  {/* ICON KANAN (SUN) */}
  <span
    style={{
      position: "absolute",
      right: "8px",
      fontSize: "12px",
      opacity: dark ? 0.5 : 1
    }}
  >
    ☀️
  </span>

  {/* BULATAN */}
  <div
    style={{
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      background: "white",
      transform: dark ? "translateX(28px)" : "translateX(0)",
      transition: "0.3s",
      boxShadow: "0 2px 5px rgba(0,0,0,0.4)"
    }}
  />
</div>
          <div
  style={{ position: "relative" }}
  onClick={() => setOpenMenu(!openMenu)}
>
  <span style={{ cursor: "pointer", color: dark ? "white" : "black" }}>
    Home ▾
  </span>
  {/* DROPDOWN */}
  <div
  style={{
    position: "absolute",
    top: "30px",
    left: 0,
    background: "#00a86b",
    borderRadius: "10px",
    padding: "10px 0",
    width: "180px",

    // 🔥 CONTROL SHOW / HIDE
    opacity: openMenu ? 1 : 0,
    transform: openMenu ? "translateY(0)" : "translateY(-10px)",
    transition: "all 0.3s ease",

    pointerEvents: openMenu ? "auto" : "none"
  }}
>
    <a href="/about">
    <div
  style={{
    padding: "10px 20px",
    color: "white",
    cursor: "pointer",
    transition: "0.2s"
  }}
  onMouseEnter={(e) => (e.currentTarget.style.background = "#2a8ec0")}
  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
>
  About Us!
</div></a>
<a href="/visionmission">
    <div
  style={{
    padding: "10px 20px",
    color: "white",
    cursor: "pointer",
    transition: "0.2s"
  }}
  onMouseEnter={(e) => (e.currentTarget.style.background = "#2a8ec0")}
  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
>
  Vision & Missions
</div>
</a>
<a href="/staff">
<div
  style={{
    padding: "10px 20px",
    color: "white",
    cursor: "pointer",
    transition: "0.2s"
  }}
  onMouseEnter={(e) => (e.currentTarget.style.background = "#2a8ec0")}
  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
>
  Our Team
</div>
</a>
  </div>
</div>
          <a href="/services" style={{ color: dark ? "white" : "black" }}>Services</a>
          <a href="/portofolio" style={{ color: dark ? "white" : "black" }}>Portfolio</a>
          <a href="/contact" style={{ color: dark ? "white" : "black" }}>Contact</a>
        </nav>
      </header>

    </>
  );
}