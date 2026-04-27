"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useTheme } from "../components/ThemeContext";

export default function ServicesPage() {
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
          backgroundImage: "url('/4.jpeg')",
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
            Services
          </h1>

          <p style={{ color: "#ddd" }}>
            Delivering geospatial intelligence and AI-driven solutions
          </p>
        </div>
      </section>

      {/* 🔥 SERVICES SECTION */}
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
      background: "rgba(0,168,107,0.25)",
      borderRadius: "50%",
      filter: "blur(120px)",
      top: "-120px",
      left: "-120px"
    }}
  />

  {/* 🔥 TITLE */}
  <div className="reveal" style={{ textAlign: "center", marginBottom: "50px" }}>
    <h2 style={{ fontSize: "36px", color: dark ? "#fff" : "#111" }}>
      Our Services
    </h2>

    <p style={{ color: dark ? "#aaa" : "#555" }}>
      Delivering geospatial and AI-driven solutions with precision and innovation.
    </p>
  </div>

  {/* 🔥 GRID */}
  <div
    style={{
      maxWidth: "1100px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "30px"
    }}
  >
    <ServiceCard
      image="/21.jpeg"
      title="Remote Sensing & Geo-Data Analytics"
      desc="Advanced geospatial data analytics integrating GIS, satellite imagery, and machine learning for environmental monitoring and decision support"
      dark={dark}
    />

    <ServiceCard
      image="/18.jpeg"
      title="Computer Vision Solutions"
      desc="AI-powered geospatial solutions leveraging deep learning for automated feature extraction, object detection, and spatial pattern recognition"
      dark={dark}
    />

    <ServiceCard
      image="/p10.jpg"
      title="Geovisualizations & Software Development"
      desc="Interactive geovisualization platforms and custom software tools enabling dynamic spatial analysis, research dissemination, and project outreach"
      dark={dark}
    />
    
    <ServiceCard
      image="/22.jpeg"
      title="Mapping & Drone Solutions"
      desc="Integrated geospatial intelligence solutions combining satellite imagery, drone analytics, and smart city mapping to deliver precise spatial insights for agriculture, infrastructure, and environmental planning."
      dark={dark}
    />

    <ServiceCard
      image="/19.jpeg"
      title="AI & Environmental Solutions"
      desc="AI-driven geospatial intelligence for environmental monitoring, sustainability analytics, and resilient infrastructure planning"
      dark={dark}
    />

    <ServiceCard
      image="/16.jpeg"
      title="AI/ML Pipeline & Data Services"
      desc="End-to-end machine learning pipelines integrating data ingestion, model training, and automated deployment for accelerated innovation."
      dark={dark}
    />

    <ServiceCard
      image="/17.jpeg"
      title="Geovisualization & WebGIS"
      desc="Interactive WebGIS ecosystems delivering dynamic dashboards, spatial analytics, and real-time geovisualization for decision support."
      dark={dark}
    />

    <ServiceCard
      image="/13.jpeg"
      title="Training & Consulting"
      desc="Professional training in geospatial and AI technologies."
      dark={dark}
    />
  </div>
</section>

        <section
  className="reveal"
  style={{
  marginTop: "20px",
  marginBottom: "50px",
  marginLeft: "auto",
  marginRight: "auto",
    padding: "40px 20px", // 🔥 ini jarak dari layar
    borderRadius: "50px",
    textAlign: "center",
    maxWidth: "900px", // 🔥 ini kunci utama

    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    color: "white",

    boxShadow: "0 30px 80px rgba(0,0,0,0.3)",
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
</section>
    </div>
  );
}

function ServiceCard({
  title,
  desc,
  dark,
  image
}: {
  title: string;
  desc: string;
  dark: boolean;
  image: string;
}) {
  return (
    <div
      className="service-card reveal"
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
      {/* 🔥 IMAGE */}
      <div style={{ overflow: "hidden" }}>
        <img
          src={image}
          alt={title}
          className="img-hover"
          style={{
            width: "100%",
            height: "180px",
            objectFit: "cover",
            transition: "0.6s ease"
          }}
        />
      </div>

      {/* 🔥 CONTENT */}
      <div style={{ padding: "22px" }}>
        <h3 style={{ marginBottom: "10px", color: dark ? "#fff" : "#111" }}>
          {title}
        </h3>

        <p style={{ color: dark ? "#aaa" : "#555", lineHeight: "1.7" }}>
          {desc}
        </p>
      </div>
    </div>
  );
}