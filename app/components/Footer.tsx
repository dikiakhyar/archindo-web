"use client";
export default function Footer() {
  return (
    <>
      {/* 🔥 FOOTER (DEEP BLUE CLEAN FINAL) */}
      <footer
  style={{
    position: "relative",
    overflow: "hidden",
    background: "linear-gradient(180deg, #0f172a, #1e293b)",
    padding: "80px 20px 30px"
  }}
>
  {/* 🔥 GLOW */}
  <div
    style={{
      position: "absolute",
      width: "400px",
      height: "400px",
      background: "rgba(14,165,164,0.15)",
      borderRadius: "50%",
      filter: "blur(140px)",
      top: "-120px",
      left: "-120px"
    }}
  />

  <div
    style={{
      position: "absolute",
      width: "300px",
      height: "300px",
      background: "rgba(59,130,246,0.15)",
      borderRadius: "50%",
      filter: "blur(140px)",
      bottom: "-100px",
      right: "-100px"
    }}
  />

  {/* 🔥 CONTENT */}
  <div
    style={{
      position: "relative",
      zIndex: 2,
      maxWidth: "1100px",
      margin: "0 auto",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      gap: "50px"
    }}
  >
    {/* 🔥 BRAND */}
    <div style={{ flex: 1, minWidth: "260px" }}>
      
      {/* ✅ LOGO BADGE (FIXED) */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          padding: "8px 14px",
          borderRadius: "999px",
          background: "rgba(255, 255, 255, 0.32)",
          border: "1px solid rgba(255,255,255,0.12)"
        }}
      >
        <img
          src="/hero.png"
          alt="logo"
          style={{
            width: "26px",
            height: "26px",
            objectFit: "contain"
          }}
        />

        <span
          style={{
            fontSize: "14px",
            fontWeight: "500",
            color: "#e2e8f0"
          }}
        >
          Archindo Geointelligence
        </span>
      </div>

      {/* 🔥 DESCRIPTION (TETAP ADA) */}
      <p
        style={{
          marginTop: "15px",
          color: "#94a3b8",
          fontSize: "14px",
          lineHeight: "1.7",
          maxWidth: "320px"
        }}
      >
        Advancing geospatial intelligence and AI-driven solutions for impactful
        research and real-world applications.
      </p>
    </div>

    {/* 🔥 NAV */}
    <div>
      <h4 className="footer-title">Navigation</h4>
      <div className="footer-col">
        <a href="/" className="footer-link">Home</a>
        <a href="/about" className="footer-link">About</a>
        <a href="/portofolio" className="footer-link">Portofolio</a>
        <a href="/contact" className="footer-link">Contact</a>
      </div>
    </div>

    {/* 🔥 CONTACT */}
    <div>
      <h4 className="footer-title">Contact</h4>
      <div className="footer-col">
        <a href="mailto:archindo.geo@gmail.com" className="footer-link">
          archindo.geo@gmail.com
        </a>
        <span className="footer-sub">CC: sanjiwana@live.com</span>
      </div>
    </div>
  </div>

  {/* 🔥 DIVIDER */}
  <div className="footer-divider" />

  {/* 🔥 BOTTOM */}
  <div className="footer-bottom">
    © {new Date().getFullYear()} Archindo Geointelligence. All rights reserved.
  </div>
      </footer>
    </>
  );
}