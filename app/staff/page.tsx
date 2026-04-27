"use client";

import { useTheme } from "../components/ThemeContext";
export default function TeamPage() {
  const { dark } = useTheme();

  const team = [
  {
    name: "Dr.Sc. Sanjiwana Arjasakusuma, S.Si., M.GIS.",
    role: "Founder",
    badge: "Founder",
    image: "/sanjiwana2.jpg"
  },
  {
    name: "Marzuki, S.Kel., M.Sc.",
    role: "Remote Sensing & GIS Analyst",
    badge: "Remote Sensing & GIS Analyst",
    image: "/marzuki2.jpg"
  },
  {
    name: "Nur Laila Eka Utami, S.Si.",
    role: "Remote Sensing & GIS Analyst",
    badge: "Remote Sensing & GIS Analyst",
    image: "/23.jpeg"
  }
];

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
          backgroundImage: "url('/20.jpeg')",
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
          Our Team
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

        {/* 🔥 TITLE */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "60px"
          }}
        >
          <h2 style={{ fontSize: "32px", color: dark ? "#fff" : "#111" }}>
            Meet Our Team
          </h2>

          <p style={{ color: dark ? "#aaa" : "#555" }}>
            The people behind innovation and impact
          </p>
        </div>

        {/* 🔥 GRID */}
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "30px"
          }}
        >
          {team.map((member, i) => (
            <TeamCard key={i} {...member} dark={dark} />
          ))}
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
            Want to work with us?
          </h2>

          <p style={{ marginBottom: "25px", color: "#cbd5f5" }}>
            Let’s collaborate and create impactful solutions together.
          </p>

          <a href="/contact">
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
          </a>
        </div>
      </section>
    </div>
  );
}

/* 🔥 TEAM CARD */
interface TeamCardProps {
  name: string;
  badge: string;
  image: string;
  dark: boolean;
}

function TeamCard({ name, badge, image, dark }: TeamCardProps) {
  return (
    <div
      className="team-card"
      style={{
        borderRadius: "20px",
        overflow: "hidden",

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
      {/* IMAGE */}
      <div style={{ overflow: "hidden" }}>
        <img
          src={image}
          alt={name}
          className="img-hover"
          style={{
            width: "100%",
            height: "260px",
            objectFit: "cover",
            transition: "0.6s ease"
          }}
        />
      </div>

      {/* CONTENT */}
      <div style={{ padding: "20px", textAlign: "center" }}>
  <h3 style={{ color: dark ? "#fff" : "#111", marginBottom: "6px" }}>
    {name}
  </h3>

  {/* 🔥 BADGE */}
  <div
    style={{
      display: "inline-block",
      padding: "4px 12px",
      borderRadius: "999px",
      background: "rgba(0,168,107,0.15)",
      color: "#00a86b",
      fontSize: "14px",
      fontWeight: "600",
      marginBottom: "8px"
    }}
  >
    {badge}
  </div>
</div>
    </div>
  );
}