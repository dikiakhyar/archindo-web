"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useTheme } from "../components/ThemeContext";

export default function VisionMissionPage() {
  const { dark } = useTheme();

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    });

    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div
      style={{
        background: dark
          ? "#0d0d0d"
          : "#f1f3f5",
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
          backgroundImage: "url('/20.jpeg')",
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
            Vision & Mission
          </h1>

          <p style={{ color: "#ddd" }}>
            Driving innovation through geospatial intelligence and AI
          </p>
        </div>
      </section>

      {/* 🔥 MAIN SECTION */}
      <section
        style={{
          position: "relative",
          padding: "100px 20px 60px",
          background: dark
            ? "linear-gradient(180deg, #0d0d0d, #111)"
            : "linear-gradient(180deg, #fafafa, #f1f3f5)",
          overflow: "hidden",
          marginTop: "-40px"
        }}
      >
        {/* 🔥 SOFT ORB */}
        <div
          className="parallax-bg"
          style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            background: "rgba(0,168,107,0.2)",
            borderRadius: "50%",
            filter: "blur(120px)",
            top: "-120px",
            left: "-120px"
          }}
        />

        {/* 🔥 VISION */}
        <div
          className="reveal"
          style={{
            maxWidth: "800px",
            margin: "0 auto 80px",
            padding: "40px",
            borderRadius: "24px",
            textAlign: "center",

            background: dark
              ? "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))"
              : "rgba(255,255,255,0.7)",

            border: dark
              ? "1px solid rgba(255,255,255,0.08)"
              : "1px solid rgba(0,0,0,0.05)",

            backdropFilter: "blur(12px)",
            boxShadow: "0 25px 60px rgba(0,0,0,0.15)"
          }}
        >
          <h2
  style={{
    display: "inline-block",
    padding: "8px 18px",
    borderRadius: "999px",

    background: "rgba(0,168,107,0.15)", // 🔥 hijau transparan
    color: dark ? "#34d399" : "#059669",

    backdropFilter: "blur(8px)",
    boxShadow: "0 0 20px rgba(0,168,107,0.2)",
    WebkitBackdropFilter: "blur(8px)",

    border: "1px solid rgba(0,168,107,0.25)",

    marginBottom: "20px",
    fontSize: "14px",
    letterSpacing: "1px"
  }}
>
  OUR VISION
</h2>

          <p style={{ lineHeight: "1.8", color: dark ? "#aaa" : "#555" }}>
            To become the leading sector for state-of-the-art technology in the fields of 
            geospatial and artificial intelligence, supporting sustainable environmental 
            development and human capital advancement.
          </p>
        </div>

        {/* 🔥 MISSION TITLE */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2
  style={{
    display: "inline-block",
    padding: "8px 18px",
    boxShadow: "0 0 20px rgba(0,168,107,0.2)",
    borderRadius: "999px",

    background: "rgba(0,168,107,0.15)",
    color: dark ? "#34d399" : "#059669",

    backdropFilter: "blur(8px)",
    border: "1px solid rgba(0,168,107,0.25)",

    fontSize: "14px",
    letterSpacing: "1px"
  }}
>
  OUR MISSIONS
</h2>
        </div>

        {/* 🔥 MISSION GRID */}
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px"
          }}
        >
          <MissionCard
            title="Geospatial Solutions"
            desc="Providing reliable and precise mapping solutions using state-of-the-art geospatial data analytics and remote sensing technology."
            dark={dark}
          />

          <MissionCard
            title="AI Development"
            desc="Contributing to the development of multimodal AI (vision and language) to support sustainable development."
            dark={dark}
          />

          <MissionCard
            title="Human Capital"
            desc="Developing the foundation of human capital in geospatial and AI through research, education, and innovation."
            dark={dark}
          />
        </div>
      </section>

      {/* 🔥 CTA */}
      <section
        className="reveal"
        style={{
          marginTop: "20px",
          marginBottom: "60px",
          padding: "0 20px"
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            padding: "50px",
            borderRadius: "24px",
            textAlign: "center",

            background: "linear-gradient(135deg, #0f172a, #1e293b)",
            color: "white",

            boxShadow: "0 30px 80px rgba(0,0,0,0.3)"
          }}
        >
          <h2 style={{ marginBottom: "15px" }}>
            Ready to collaborate?
          </h2>

          <p style={{ marginBottom: "25px", color: "#cbd5f5" }}>
            Let’s build impactful geospatial and AI solutions together.
          </p>
<Link href="/contact">
          <button
            style={{
              padding: "12px 30px",
              borderRadius: "25px",
              border: "none",
              background: "#00a86b",
              color: "white",
              fontWeight: "600",
              cursor: "pointer",
              transition: "0.3s"
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            Contact Us
          </button></Link>
        </div>
      </section>
    </div>
  );
}

/* 🔥 COMPONENT */
function MissionCard({ title, desc, dark }: { title: string; desc: string; dark: boolean }) {
  return (
    <div
      className="service-card reveal"
      style={{
        borderRadius: "20px",
        padding: "25px",

        background: dark
          ? "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))"
          : "rgba(255,255,255,0.7)",

        border: dark
          ? "1px solid rgba(255,255,255,0.08)"
          : "1px solid rgba(0,0,0,0.05)",

        backdropFilter: "blur(12px)",
        transition: "0.4s",
        cursor: "pointer"
      }}
    >
      <h3 style={{ marginBottom: "10px", color: dark ? "#fff" : "#111" }}>
        {title}
      </h3>

      <p style={{ color: dark ? "#aaa" : "#555", lineHeight: "1.7" }}>
        {desc}
      </p>
    </div>
  );
}