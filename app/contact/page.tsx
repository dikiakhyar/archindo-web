"use client";

import { useTheme } from "../components/ThemeContext";

export default function ContactPage() {
  const { dark } = useTheme();

  return (
    <div
  style={{
    background: dark
      ? "#0d0d0d"
      : "#f1f3f5", // 🔥 GANTI DARI PUTIH
    color: dark ? "#e5e5e5" : "#222",
    minHeight: "100vh",
    transition: "0.3s"
  }}
>
      {/* OFFSET NAVBAR */}
      <div style={{ height: "66px" }} />

      {/* 🔥 HERO */}
      <section
        style={{
          height: "300px",
          backgroundImage: "url('/3.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center"
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.5)"
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          <h1 style={{ color: "white", fontSize: "42px" }}>
            Contact Us
          </h1>
          <p style={{ color: "#ddd" }}>
            Let’s build something impactful together
          </p>
        </div>
      </section>
        {/* 🔥 CONTACT SECTION (PREMIUM GLASS - LIGHT BG) */}
<section
  style={{
    position: "relative",
    padding: "120px 20px",
    background: dark
      ? "linear-gradient(180deg, #0d0d0d, #111)"
      : "linear-gradient(180deg, #fafafa, #f1f3f5)",
    overflow: "hidden"
  }}
>
  {/* 🔥 SOFT BACKGROUND ORBS (PARALLAX EFFECT) */}
  <div
    style={{
      position: "absolute",
      width: "400px",
      height: "400px",
      background: "rgba(0,168,107,0.15)",
      borderRadius: "50%",
      filter: "blur(120px)",
      top: "-100px",
      left: "-100px",
      transform: "translateZ(0)"
    }}
    className="parallax-bg"
  />

  <div
    style={{
      position: "absolute",
      width: "300px",
      height: "300px",
      background: "rgba(0,112,243,0.15)",
      borderRadius: "50%",
      filter: "blur(120px)",
      bottom: "-80px",
      right: "-80px"
    }}
    className="parallax-bg"
  />

  <div
    style={{
      maxWidth: "1100px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "50px",
      flexWrap: "wrap",
      position: "relative",
      zIndex: 2
    }}
  >
    {/* LEFT */}
    <div style={{ flex: 1, minWidth: "300px" }}>
  {/* 🔥 BADGE */}
  <div
    style={{
      display: "inline-block",
      padding: "6px 14px",
      borderRadius: "999px",
      fontSize: "12px",
      background: "rgba(0,168,107,0.1)",
      color: "#00a86b",
      marginBottom: "15px",
      fontWeight: "500"
    }}
  >
      Open for Collaboration
  </div>

  {/* 🔥 TITLE */}
  <h2
    style={{
      fontSize: "42px",
      marginBottom: "15px",
      color: dark ? "#fff" : "#111",
      letterSpacing: "-1px",
      lineHeight: "1.2"
    }}
  >
    Let’s Build Something Meaningful Together
  </h2>

  {/* 🔥 DESC */}
  <p
    style={{
      color: dark ? "#aaa" : "#555",
      lineHeight: "1.8",
      marginBottom: "30px",
      maxWidth: "500px"
    }}
  >
    We collaborate on geospatial intelligence, remote sensing, and AI-driven
    solutions. If you're working on impactful research or innovative ideas,
    we’d love to connect.
  </p>

  {/* 🔥 EMAIL CARD */}
  <div
    style={{
      padding: "18px 20px",
      borderRadius: "14px",
      background: dark
        ? "rgba(255,255,255,0.04)"
        : "rgba(0,0,0,0.03)",
      border: dark
        ? "1px solid rgba(255,255,255,0.08)"
        : "1px solid rgba(0,0,0,0.06)",
      backdropFilter: "blur(10px)",
      transition: "0.3s"
    }}
    className="email-card"
  >
    <span style={{ fontSize: "12px", color: "#888" }}>
      Contact us at
    </span>

    <br />

    <a
      href="mailto:archindo.geo@gmail.com"
      style={{
        fontSize: "20px",
        fontWeight: "600",
        color: "#00a86b",
        textDecoration: "none"
      }}
    >
      archindo.geo@gmail.com
    </a>

    <div style={{ marginTop: "10px", fontSize: "14px", color: "#777" }}>
      CC: sanjiwana@live.com
    </div>
  </div>
</div>

    {/* RIGHT - GLASS CARD */}
    <div
      className="glass-card"
      style={{
  flex: 1,
  minWidth: "300px",
  borderRadius: "24px",
  overflow: "hidden",
  position: "relative",

  aspectRatio: "4 / 3", // 🔥 ini kunci

  backdropFilter: "blur(20px)",
  background: dark
    ? "rgba(255,255,255,0.05)"
    : "rgba(255,255,255,0.6)",
  boxShadow: dark
    ? "0 20px 50px rgba(0,0,0,0.5)"
    : "0 20px 50px rgba(0,0,0,0.08)",
  transition: "0.4s"
}}
    >
      <img
        src="/2.jpeg"
        alt="contact"
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          objectFit: "cover",
          transition: "0.6s ease"
        }}
        className="img-hover"
      />
    </div>
  </div>

  {/* 🔥 STYLE */}
  <style jsx>{`
    .email-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
}

    .glass-card:hover {
      transform: translateY(-8px) scale(1.02);
      box-shadow: 0 30px 80px rgba(0, 0, 0, 0.15);
    }

    .glass-card:hover .img-hover {
      transform: scale(1.08);
    }

    .hover-link:hover {
      opacity: 0.7;
      letter-spacing: 0.3px;
    }
  `}</style>
</section>
      </div>
    
  );
}