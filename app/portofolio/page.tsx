"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "../components/ThemeContext";

export default function PortfolioPage() {
  const { dark } = useTheme();
  const [selectedProject, setSelectedProject] = useState<any>(null);

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

  const projects = [
    {
      title: "Crop Commodity Mapping using Machine Learning Approach",
      desc: "National-scale crop monitoring using multi-sensor satellite data and machine learning to detect planting phases and support data-driven agricultural planning.",
      detail: `Developed a national-scale crop planting phase monitoring system using multi-sensor satellite data and machine learning to support data-driven agricultural planning. The project integrates Sentinel-1, Sentinel-2, Landsat, and MODIS imagery to generate dense NDVI time series and accurately detect planting dates (H0) across agricultural areas. By combining deep learning–based SAR-to-NDVI reconstruction and spatio-temporal data fusion, the system reduces cloud-related data gaps and improves temporal monitoring of crop growth. The resulting model enables more precise identification of planting cycles, supporting efficient fertilizer allocation, agricultural monitoring, and national food security planning.`,
      image: "/1. Crop Commodity Mapping using Machine Learning Approach/Deep Learning NDVI.png",
      images: ["/1. Crop Commodity Mapping using Machine Learning Approach/ESTARFM.png", "/1. Crop Commodity Mapping using Machine Learning Approach/Grafik Karanganyar.png", "/1. Crop Commodity Mapping using Machine Learning Approach/Grrafik Magetan.png"],
      tags: ["GIS", "Remote Sensing", "Geo AI", "Crop Mapping","Spatial Modelling"]
    },
    {
      title: "Deep Learning for Forest Cover Mapping",
      desc: "Geo-AI solutions for LULC and biomass mapping using LiDAR and multispectral data, supporting Indonesia’s FOLU Net Sink 2030 with validated, policy-ready insights.",
      detail: `Supporting national climate targets through Indonesia’s FOLU Net Sink 2030 program by providing Geo-AI solutions for natural resource and carbon mapping. This project focuses on developing machine learning and deep learning-based workflows that integrate LiDAR data and multispectral imagery for high-precision Land Use/Land Cover (LULC) modeling and above-ground biomass (AGB) estimation. The reliability of these inference models has been tested and validated through extensive field surveys, yielding accurate forest inventory data and land use metrics to support ecosystem evaluation policies in Indonesia.`,
      image: "/2. Deep Learning for Forest Cover Mapping/LULC_prediction.png",
      images: ["/2. Deep Learning for Forest Cover Mapping/paper 2.jpg", "/2. Deep Learning for Forest Cover Mapping/paper1.jpg", "/2. Deep Learning for Forest Cover Mapping/WhatsApp Image 2024-09-22 at 07.19.19_f7b5f3a5.jpg", "/2. Deep Learning for Forest Cover Mapping/WhatsApp Image 2024-09-25 at 12.38.33_7f81943e.jpg", "/2. Deep Learning for Forest Cover Mapping/WhatsApp Image 2025-05-21 at 13.26.59_bbda2855.jpg", "/2. Deep Learning for Forest Cover Mapping/WhatsApp Image 2024-09-25 at 12.55.37_c85a8034.jpg"],
      tags: ["GIS", "Remote Sensing", "Geo AI", "Forest Cover"]
    },
    {
      title: "Seaweed Cover Mapping",
      desc: "Deep learning–based satellite analysis to map seaweed production and monitor dynamic changes driven by market and climate factors.",
      detail: `This project develops a deep learning-based tool for automatically analyzing satellite imagery, specifically designed to map and measure seaweed production areas in South Sulawesi. Through this tool, we successfully identified drastic data fluctuations: there was a surge in production area expansion during the 2022–2023 period due to high market prices, which then plummeted by up to 50% in 2024 due to falling prices and extreme weather challenges. This solution offers a practical foundation for the Indonesian government to manage the seaweed industry amid the threat of climate change, and these findings will be published online to support better policy-making.`,
      image: "/3. Seaweed Cover Mapping/Output/PREVIEW BENCHMARK.png",
      images: ["/3. Seaweed Cover Mapping/Output/2024.png", "/3. Seaweed Cover Mapping/Output/augment_sam_2.jpg",  "/3. Seaweed Cover Mapping/Output/layout peta report koneksi.png", "/3. Seaweed Cover Mapping/P6150514.jpg", "/3. Seaweed Cover Mapping/P6120181.jpg", "/3. Seaweed Cover Mapping/P6140271.jpg", "/3. Seaweed Cover Mapping/PA160003.jpg", "/3. Seaweed Cover Mapping/PA160163.jpg", "/3. Seaweed Cover Mapping/PA160157.jpg"],
      tags: ["GIS", "Remote Sensing", "Geo AI", "Seaweed"]
    },
    {
      title: "Workshop: Geo-AI System for Carbon Storage Assessment",
      desc: "Delivered Geo-AI and remote sensing training for forest carbon monitoring, enabling practitioners to apply AI-driven geospatial methods in support of Indonesia’s FOLU Net Sink 2030 initiative.",
      detail: `Delivered a technical training program on Geo-AI, remote sensing, and machine learning for forest carbon monitoring, supporting Indonesia’s FOLU Net Sink 2030 initiative. Designed and facilitated hands-on sessions covering deep learning land-cover classification, UAV/LiDAR data acquisition, and carbon stock estimation workflows using Python, R, and Google Colab. Enabled researchers and practitioners to apply data-driven geospatial methods for scalable forest carbon assessment and environmental monitoring.`,
      image: "/4. GeoAI/DSC07120.jpg",
      images: ["/4. GeoAI/DSC07120.jpg", "/4. GeoAI/DSC07393.jpg", "/4. GeoAI/DSC07392.jpg", "/4. GeoAI/DSC08240.jpg", "/4. GeoAI/DSC07771.jpg", "/4. GeoAI/DSC07529.jpg"],
      tags: ["GIS", "Remote Sensing", "Geo AI", "Workshop"]
      
    }
  ];

  return (
    <div
      style={{
        background: dark ? "#0d0d0d" : "#f1f3f5",
        color: dark ? "#e5e5e5" : "#222",
        minHeight: "100vh",
        transition: "0.3s"
      }}
    >
      {/* OFFSET NAVBAR */}
      <div style={{ height: "66px" }} />

      {/* HERO */}
      <section
        style={{
          height: "300px",
          backgroundImage: "url('/9.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center"
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <h1 style={{ color: "white", fontSize: "42px" }}>Portfolio</h1>
          <p style={{ color: "#ddd" }}>
            Showcasing our geospatial and AI-driven projects
          </p>
        </div>
      </section>

      {/* PORTFOLIO */}
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
        {/* SOFT ORB */}
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

        {/* TITLE */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "50px" }}>
          <h2 style={{ fontSize: "36px" }}>Our Projects</h2>
          <p style={{ color: dark ? "#aaa" : "#555" }}>
            Showcasing our geospatial and AI-driven work
          </p>
        </div>

        {/* GRID */}
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px"
          }}
        >
          {projects.map((item, i) => (
            <PortfolioCard
              key={i}
              {...item}
              dark={dark}
              onClick={() => setSelectedProject(item)}
            />
          ))}
        </div>
      </section>

      {/* CTA (INI TETAP UTUH) */}
      <section
        className="reveal"
        style={{
          marginTop: "20px",
          marginBottom: "50px",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "40px 20px",
          borderRadius: "50px",
          textAlign: "center",
          maxWidth: "900px",
          background: "linear-gradient(135deg, #0f172a, #1e293b)",
          color: "white",
          boxShadow: "0 30px 80px rgba(0,0,0,0.3)"
        }}
      >
        <h2 style={{ marginBottom: "15px" }}>Ready to collaborate?</h2>
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
      </section>

      {/* MODAL */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 999
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "80%",
              maxWidth: "900px",
              maxHeight: "85vh",
              overflowY: "auto",
              borderRadius: "20px",
              background: dark ? "#111" : "#fff",
              padding: "30px"
            }}
          >
            <img
              src={selectedProject.image}
              style={{
                width: "100%",
                height: "260px",
                objectFit: "cover",
                borderRadius: "15px",
                marginBottom: "20px"
              }}
            />

            <h2
  style={{
    fontWeight: "700",
    fontSize: "24px",
    marginTop: "-5px",
    marginBottom: "15px"
  }}
>
  {selectedProject.title}
</h2>

<p
  style={{
    marginTop: "-10px",
    fontSize: "15px",
    fontWeight: "300",
    opacity: 0.75,
    lineHeight: "1.7"
  }}
>
  {selectedProject.desc}
</p>
<div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginTop: "-10px",
    marginBottom: "10px"
  }}
>
  {selectedProject.clientLogo && (
    <img
  src={selectedProject.clientLogo}
  style={{
    width: "60px",   // 🔥 dari 30 → 40
    height: "60px",
    marginTop: "20px",
    objectFit: "contain",
    borderRadius: "8px",
    background: "#fff",
    padding: "6px"
  }}
/>
  )}

  <span style={{ fontSize: "14px", opacity: 0.8 }}>
    <b>{selectedProject.client}</b>
  </span>
</div>
            {/* TAG */}
            <div style={{ display: "flex", gap: "8px", marginTop: "10px", flexWrap: "wrap" }}>
              {selectedProject.tags?.map((tag: string, i: number) => (
                <span
                  key={i}
                  style={{
                    fontSize: "12px",
                    padding: "5px 10px",
                    borderRadius: "12px",
                    background: "rgba(0,168,107,0.15)",
                    color: "#00a86b"
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            
            <div
  style={{
    marginTop: "0px",
    paddingTop: "20px",
    borderTop: "1px solid rgba(255,255,255,0.08)", // 🔥 pemisah halus
    fontSize: "14px",
    lineHeight: "1.8",
    opacity: 0.9,
    whiteSpace: "pre-line",
    maxWidth: "750px"
  }}
>
  {selectedProject.detail}
</div>

            {/* IMAGES */}
            <div
              style={{
                marginTop: "25px",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "15px"
              }}
            >
              {selectedProject.images?.map((img: string, i: number) => (
                <img
                  key={i}
                  src={img}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    borderRadius: "12px"
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* CARD */
function PortfolioCard({ title, desc, image, dark, onClick, tags, client, clientLogo }: any) {
  return (
    <div
      onClick={onClick}
      className="portfolio-card reveal"
      style={{
        borderRadius: "20px",
        overflow: "hidden",
        cursor: "pointer",
        background: dark
          ? "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))"
          : "rgba(255,255,255,0.7)"
      }}
    >
      <img src={image} style={{ width: "100%", height: "220px", objectFit: "cover" }} />

      <div style={{ padding: "20px" }}>
        <h3
  style={{
    fontWeight: "700",   // 🔥 lebih bold
    fontSize: "16px",
    marginBottom: "4px"
  }}
>
  {title}
</h3>

<p
  style={{
    fontSize: "13px",     // 🔥 lebih kecil
    fontWeight: "300",    // 🔥 lebih tipis
    opacity: 0.7,
    lineHeight: "1.6",
    marginBottom: "4px"
  }}
>
  {desc}
</p>

        {/* TAG */}
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
          {tags?.map((tag: string, i: number) => (
            <span
              key={i}
              style={{
                fontSize: "10px",
                padding: "4px 8px",
                borderRadius: "10px",
                background: "rgba(0,168,107,0.15)",
                color: "#00a86b"
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginTop: "10px"
  }}
>
  {clientLogo && (
    <img
  src={clientLogo}
  style={{
    width: "40px",   // 🔥 dari 20 → 28
    height: "40px",
    objectFit: "contain",
    borderRadius: "6px",
    background: "#fff",
    padding: "4px"
  }}
/>
  )}

  <span style={{ fontSize: "12px", opacity: 0.7 }}>
    {client || "-"}
  </span>
</div>

        <p style={{ fontSize: "12px", opacity: 0.5 }}>
          Click to view details →
        </p>
      </div>
    </div>
  );
}