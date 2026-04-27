"use client";

import { useTheme } from "../components/ThemeContext";
import Link from "next/link";

export default function AboutPage() {
  const { dark } = useTheme();

  return (
    <div
      style={{
        background: dark ? "#0d0d0d" : "#f1f3f5",
        color: dark ? "#e5e5e5" : "#222",
        minHeight: "100vh"
      }}
    >
      {/* OFFSET */}
      <div style={{ height: "66px" }} />

      {/* 🔥 HERO */}
      <section
        style={{
          height: "300px",
          backgroundImage:
            "url('/12.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.5)"
          }}
        />

        <h1 style={{ color: "white", fontSize: "42px", zIndex: 1 }}>
          About Us
        </h1>
      </section>

      {/* 🔥 MAIN */}
      <section
        style={{
          position: "relative",
          padding: "100px 20px 60px",
          background: dark
            ? "linear-gradient(180deg, #0d0d0d, #111)"
            : "linear-gradient(180deg, #fafafa, #f1f3f5)",
          marginTop: "-40px"
        }}
      >
        {/* 🔥 ORB */}
        <div
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

        {/* 🔥 TAGLINE (UPGRADE) */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "80px",
            maxWidth: "700px",
            marginInline: "auto"
          }}
        >
          <h3
            style={{
              color: "#3b82f6",
              fontWeight: "600",
              fontSize: "30px",
              letterSpacing: "0.5px"
            }}
          >
            "Empowering Decisions Through
            <br></br>
            Geospatial Intelligence & Artificial Intelligence"
          </h3>

        </div>

        {/* 🔥 CONTENT */}
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "60px",
            alignItems: "center"
          }}
        >
          {/* 🔥 LOGO */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                padding: "40px",
                borderRadius: "24px",
                position: "relative",

                background: dark
                  ? "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))"
                  : "rgba(255,255,255,0.7)",

                backdropFilter: "blur(12px)",
                boxShadow: "0 25px 60px rgba(0,0,0,0.25)"
              }}
            >
              {/* glow */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(59, 131, 246, 0.04)",
                  filter: "blur(80px)",
                  borderRadius: "24px"
                }}
              />

              <img
                src="/hero.png"
                alt="logo"
                style={{
                  width: "180px",
                  position: "relative"
                }}
              />
            </div>
          </div>

          {/* 🔥 STORY */}
          <div style={{ lineHeight: "1.8" }}>
            {/* BLOCK 1 */}
            <p>
              Archindo Geointelligence (AGI) is a visionary geospatial and AI
              solutions start-up based in Yogyakarta, Indonesia, dedicated to
              supporting a sustainable environment and human development.
            </p>
<br></br>
            <p>
              The name Archindo carries our philosophy. “Arch” reflects both
              archery, symbolizing precision, focus, and accuracy, and
              archipelago, representing Indonesia’s vast geography. “Indo”
              signifies our roots, while Geointelligence reflects our expertise
              in transforming geospatial data into meaningful insights.
            </p>
<br></br>
            <p>
              We harness state-of-the-art geospatial analytics and artificial
              intelligence to help communities, governments, and industries make
              smarter decisions through data-driven insights.
            </p>
<br></br>
            <p>
              We are equally committed to empowering people through training,
              research, and innovation, building the next generation of
              professionals in AI and geospatial technologies.
            </p>
<br></br>
            <p>
              At AGI, we believe technology is most powerful when used to protect
              the planet and improve lives.
            </p>

          </div>
        </div>
      </section>

      {/* 🔥 CTA */}
      <section
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
                cursor: "pointer"
              }}
            >
              Contact Us
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}