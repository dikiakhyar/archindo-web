"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "./components/ThemeContext";

export default function Home() {
  const { dark } = useTheme();
  const [show, setShow] = useState(false);
  const bgRef = useRef<HTMLDivElement>(null);
  const heroBgRef = useRef<HTMLDivElement>(null);

  // Data
  const items = [
    {
      title: "Geospatial Solutions",
      desc: "Advanced mapping, remote sensing, and spatial analytics for better decision-making.",
    },
    {
      title: "AI Development",
      desc: "Building intelligent AI models for environmental monitoring and data-driven insights.",
    },
    {
      title: "Human Capital",
      desc: "Empowering people through training, research, and capacity building in geospatial and AI.",
    },
  ];

  const services = [
    {
      title: "Remote Sensing & Geo-Data Analytics",
      desc: "Advanced geospatial data analytics integrating GIS, satellite imagery, and machine learning for environmental monitoring and decision support",
      image: "/21.jpeg",
    },
    {
      title: "Computer Vision Solutions",
      desc: "AI-powered geospatial solutions leveraging deep learning for automated feature extraction, object detection, and spatial pattern recognition",
      image: "/18.jpeg",
    },
    {
      title: "Geovisualizations & Software Development",
      desc: "Interactive geovisualization platforms and custom software tools enabling dynamic spatial analysis, research dissemination, and project outreach",
      image: "/p10.jpg",
    },
  ];

  // 3D Tilt Effect
  useEffect(() => {
    const el = document.querySelector(".hover-wrap") as HTMLElement;
    const img = document.querySelector(".hover-img") as HTMLElement;

    if (!el || !img) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const midX = rect.width / 2;
      const midY = rect.height / 2;
      const rotateY = ((x - midX) / midX) * 6;
      const rotateX = -((y - midY) / midY) * 6;

      img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    };

    const reset = () => {
      img.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", reset);

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", reset);
    };
  }, []);

  // Mouse Parallax
  useEffect(() => {
    const elements = document.querySelectorAll(".parallax-bg");
    let ticking = false;

    const handleMove = (e: { clientX: number; clientY: number }) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          elements.forEach((el, i) => {
            const speed = (i + 1) * 5;
            const x = (window.innerWidth - e.clientX * speed) / 120;
            const y = (window.innerHeight - e.clientY * speed) / 120;
            (el as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  // Scroll Parallax - Background
  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current) return;
      const offset = window.scrollY;
      bgRef.current.style.transform = `translateY(${offset * 0.2}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll Parallax - Hero
  useEffect(() => {
    const handleScroll = () => {
      if (!heroBgRef.current) return;
      const offset = window.scrollY;
      heroBgRef.current.style.transform = `translate3d(0,${offset * 0.25}px,0)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reveal Animation
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  // Initial Show
  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div
      style={{
        background: dark ? "#0d0d0d" : "#f1f3f5",
        color: dark ? "#e5e5e5" : "#222",
        minHeight: "100vh",
        transition: "0.3s",
      }}
    >
      {/* NAVBAR SPACER */}
      <div style={{ height: "128px" }} />

      {/* HERO SECTION */}
      <section
        style={{
          minHeight: "84vh",
          padding: "60px 80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
          color: "white",
        }}
      >
        {/* Parallax Background */}
        <div
          ref={heroBgRef}
          style={{
            position: "absolute",
            top: "-10%",
            left: 0,
            width: "100%",
            height: "120%",
            backgroundImage: "url('/5.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: "translateY(0)",
            willChange: "transform",
          }}
        />

        {/* Overlay */}
        <div
          style={{
            position: "absolute",marginTop: "-64px",
            inset: 0,
            background: "rgba(0, 0, 0, 0.2)",
          }}
        />

        {/* Left - Text */}
        <div
          style={{
            position: "relative",
            marginTop: "-40px",
            maxWidth: "550px",
          }}
        >
          <h1 style={{ fontSize: "45px", fontWeight: "bold" }}>
            Archindo GeoIntelligence
          </h1>
          <p style={{ marginTop: "1px", color: "#ffffff" }}>
            "Mapping the future, empowering people, driving sustainability."
          </p>
          <Link href="/portofolio">
            <button
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                background: "#00a86b",
                border: "none",
                borderRadius: "20px",
                color: "white",
                cursor: "pointer",
              }}
            >
              Discover Our Solutions
            </button>
          </Link>
        </div>

        {/* Right - Image */}
        <div
          style={{
            position: "relative",
            marginTop: "-120px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transform: show
              ? "translateX(0) scale(1)"
              : "translateX(80px) scale(0.95)",
            opacity: show ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.2s",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "450px",
              height: "450px",
              borderRadius: "20px",
              background: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
              border: "1px solid rgba(255,255,255,0.3)",
            }}
          />
          <img
            src="/hero.png"
            alt="hero"
            style={{
              width: "350px",
              position: "relative",
              filter:
                "brightness(1.3) contrast(1.1) drop-shadow(0 0 25px rgba(255,255,255,0.6))",
              transition: "0.6s ease",
            }}
          />
        </div>

        {/* Feature Strip */}
        <div
          style={{
            position: "absolute",
            bottom: "35px",
            left: "50%",
            transform: show ? "translate(-50%, 0)" : "translate(-50%, 30px)",
            opacity: show ? 1 : 0,
            transition: "all 0.8s ease",
            width: "80%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "white",
            fontSize: "14px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-50%",
              left: 0,
              right: 0,
              height: "3px",
              background: "rgba(255,255,255,0.3)",
              zIndex: 0,
            }}
          />

          {items.map((item, i) => (
            <div
              key={i}
              className="feature-item"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                position: "relative",
                zIndex: 1,
                cursor: "pointer",
                background: "rgba(0,0,0,0.3)",
                backdropFilter: "blur(6px)",
                borderRadius: "20px",
                padding: "10px 20px",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = dark
                  ? "0 10px 30px rgba(0,0,0,0.5)"
                  : "0 10px 25px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: "#00a86b",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                }}
              >
                ➤
              </div>
              <h3 style={{ marginBottom: "0px" }}>{item.title}</h3>
              <div className="popup">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* LINE OF BUSINESS SECTION */}
      <section
        style={{
          position: "relative",
          padding: "60px 20px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/15.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 100,
            filter: "blur(2px)",
            transform: "scale(1.05)",
            zIndex: 0,
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: dark
              ? "linear-gradient(180deg, rgba(13,13,13,0.6), rgba(17,17,17,0.75))"
              : "linear-gradient(180deg, rgba(255,255,255,0.7), rgba(245,247,250,0.85))",
            zIndex: 1,
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "350px",
            height: "350px",
            background: "rgba(0,168,107,0.15)",
            borderRadius: "50%",
            filter: "blur(120px)",
            top: "-80px",
            left: "-100px",
            zIndex: 1,
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "300px",
            height: "300px",
            background: "rgba(0,112,243,0.12)",
            borderRadius: "50%",
            filter: "blur(120px)",
            bottom: "-80px",
            right: "-80px",
            zIndex: 1,
          }}
        />

        <div
          style={{
            textAlign: "center",
            marginBottom: "60px",
            position: "relative",
            zIndex: 2,
          }}
        >
          <h2 style={{ fontSize: "36px", letterSpacing: "-0.5px" }}>
            Line of Business
          </h2>
          <p style={{ color: dark ? "#aaa" : "#666" }}>
            Our core pillars in delivering geospatial intelligence and
            innovation
          </p>
        </div>

        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div className="lob-card">
            <div className="icon">🎓</div>
            <h3>AGI Academy</h3>
            <p>
              Bootcamp GIS & AI, sertifikasi keahlian geospasial, dan pelatihan
              data satelit.
            </p>
          </div>

          <div className="lob-card">
            <div className="icon">🔬</div>
            <h3>AGI Research & Innovation</h3>
            <p>
              Riset berbasis Geospatial AI untuk studi lingkungan dan earth
              observation.
            </p>
          </div>

          <div className="lob-card">
            <div className="icon">🌍</div>
            <h3>AGI Solutions</h3>
            <p>
              Solusi teknologi dan jasa konsultansi berbasis data geospasial.
            </p>
          </div>
        </div>

        <style jsx>{`
          .lob-card {
            padding: 32px;
            border-radius: 22px;
            background: rgba(255, 255, 255, 0.06);
            border: 1px solid rgba(255, 255, 255, 0.12);
            backdrop-filter: blur(14px);
            transition: all 0.35s ease;
            text-align: left;
          }

          .lob-card .icon {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: rgba(0, 168, 107, 0.15);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            margin-bottom: 15px;
          }

          .lob-card h3 {
            font-size: 18px;
            margin-bottom: 12px;
          }

          .lob-card p {
            font-size: 14px;
            color: ${dark ? "#aaa" : "#555"};
            line-height: 1.7;
          }

          .lob-card:hover {
            transform: translateY(-12px) scale(1.02);
            box-shadow: 0 30px 80px rgba(0, 0, 0, 0.25);
          }
        `}</style>
      </section>

      {/* OUR SERVICES SECTION */}
      <section
        style={{
          position: "relative",
          padding: "70px 20px 40px",
          background: dark
            ? "linear-gradient(180deg, #0d0d0d, #111)"
            : "linear-gradient(180deg, #fafafa, #f1f3f5)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            background: "rgba(0,168,107,0.25)",
            borderRadius: "50%",
            filter: "blur(120px)",
            top: "-100px",
            left: "-100px",
            transform: "translateZ(0)",
          }}
          className="parallax-bg"
        />

        <div
          className="reveal"
          style={{ textAlign: "center", marginBottom: "50px" }}
        >
          <h2
            style={{
              fontSize: "36px",
              color: dark ? "#fff" : "#111",
              marginBottom: "5px",
            }}
          >
            Our Services
          </h2>
          <p style={{ color: dark ? "#aaa" : "#555", fontSize: "15px" }}>
            Delivering geospatial and AI-driven solutions with precision and
            innovation.
          </p>
        </div>

        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
          }}
        >
          {services.map((item, i) => (
            <div
              key={i}
              className="service-card reveal"
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                position: "relative",
                background: dark
                  ? "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))"
                  : "linear-gradient(180deg, rgba(255,255,255,0.8), rgba(255,255,255,0.6))",
                border: dark
                  ? "1px solid rgba(255,255,255,0.08)"
                  : "1px solid rgba(0,0,0,0.05)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              <div style={{ overflow: "hidden" }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    transition: "0.8s ease",
                  }}
                  className="img-hover"
                />
              </div>
              <div style={{ padding: "22px" }}>
                <h3
                  style={{
                    marginBottom: "10px",
                    fontSize: "18px",
                    color: dark ? "#fff" : "#111",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    color: dark ? "#aaa" : "#555",
                    fontSize: "14px",
                    lineHeight: "1.7",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <style jsx global>{`
          .reveal {
            opacity: 0;
            transform: translateY(40px);
            transition: all 0.8s ease;
          }

          .reveal.active {
            opacity: 1;
            transform: translateY(0);
          }

          .service-card:hover {
            transform: translateY(-10px) scale(1.01);
            box-shadow: 0 30px 80px rgba(0, 0, 0, 0.2);
          }

          .service-card:hover .img-hover {
            transform: scale(1.1);
          }
        `}</style>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <Link href="/services">
            <button
              style={{
                padding: "10px 20px",
                background: "#00a86b",
                border: "none",
                borderRadius: "20px",
                color: "white",
                cursor: "pointer",
              }}
            >
              Read More..
            </button>
          </Link>
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section
        style={{
          position: "relative",
          padding: "80px 20px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0%",
            left: 0,
            width: "100%",
            height: "125%",
            backgroundImage: "url('/1.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: "translateY(0)",
            willChange: "transform",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.15)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: "40px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              flex: 1,
              maxWidth: "520px",
              padding: "35px",
              borderRadius: "20px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
              position: "relative",
              zIndex: 2,
            }}
          >
            <h2
              style={{
                fontSize: "36px",
                marginBottom: "15px",
                color: "#fff",
                letterSpacing: "-0.5px",
              }}
            >
              <b>About Us</b>
            </h2>
            <p
              style={{
                lineHeight: "1.6",
                color: "#ddd",
                fontSize: "15px",
              }}
            >
              Archindo Geointelligence (AGI) is a visionary geospatial and AI
              solutions start-up based in Yogyakarta, Indonesia, dedicated to
              supporting a sustainable environment and human development.
            </p>
            <p
              style={{
                marginTop: "15px",
                lineHeight: "1.6",
                color: "#e6e6e6",
                fontSize: "15px",
              }}
            >
              We harness state-of-the-art geospatial data analytics and
              artificial intelligence to develop innovative solutions that help
              communities, governments, and industries make smarter, data-driven
              decisions. Our team combines expertise in remote sensing, AI/ML,
              geospatial analytics, and data science to deliver impactful
              solutions. From high-resolution mapping and drone surveys to
              AI-powered environmental monitoring, WebGIS platforms, and
              sustainability reporting, we provide end-to-end services that
              transform complex data into actionable insights for sustainable
              development.
            </p>
          </div>

          <div
            className="hover-wrap"
            style={{
              position: "absolute",
              right: "85px",
              top: "50%",
              transform: "translateY(-50%) translateX(15%)",
              width: "600px",
              height: "350px",
              zIndex: 3,
              perspective: "1000px",
            }}
          >
            <img
              src="/11.jpeg"
              alt="about"
              className="hover-img"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "18px",
                boxShadow: "0 25px 60px rgba(0,0,0,0.45)",
                transition: "transform 0.2s ease-out",
              }}
            />
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        style={{
          position: "relative",
          padding: "120px 20px",
          background: dark
            ? "linear-gradient(180deg, #0d0d0d, #111)"
            : "linear-gradient(180deg, #fafafa, #f1f3f5)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            background: "rgba(0,168,107,0.25)",
            borderRadius: "50%",
            filter: "blur(120px)",
            top: "-100px",
            left: "-100px",
            transform: "translateZ(0)",
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
            right: "-80px",
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
            zIndex: 2,
          }}
        >
          {/* Left */}
          <div style={{ flex: 1, minWidth: "300px" }}>
            <div
              style={{
                display: "inline-block",
                padding: "6px 14px",
                borderRadius: "999px",
                fontSize: "12px",
                background: "rgba(0,168,107,0.1)",
                color: "#00a86b",
                marginBottom: "15px",
                fontWeight: "500",
              }}
            >
              Open for Collaboration
            </div>

            <h2
              style={{
                fontSize: "42px",
                marginBottom: "15px",
                color: dark ? "#fff" : "#111",
                letterSpacing: "-1px",
                lineHeight: "1.2",
              }}
            >
              Let's Build Something Meaningful Together
            </h2>

            <p
              style={{
                color: dark ? "#aaa" : "#555",
                lineHeight: "1.8",
                marginBottom: "30px",
                maxWidth: "500px",
              }}
            >
              We collaborate on geospatial intelligence, remote sensing, and
              AI-driven solutions. If you're working on impactful research or
              innovative ideas, we'd love to connect.
            </p>

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
                transition: "0.3s",
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
                  textDecoration: "none",
                }}
              >
                archindo.geo@gmail.com
              </a>
              <div style={{ marginTop: "10px", fontSize: "14px", color: "#777" }}>
                CC: sanjiwana@live.com
              </div>
            </div>
          </div>

          {/* Right - Glass Card */}
          <div
            className="glass-card"
            style={{
              flex: 1,
              minWidth: "300px",
              borderRadius: "24px",
              overflow: "hidden",
              position: "relative",
              aspectRatio: "4 / 3",
              backdropFilter: "blur(20px)",
              background: dark
                ? "rgba(255,255,255,0.05)"
                : "rgba(255,255,255,0.6)",
              boxShadow: dark
                ? "0 20px 50px rgba(0,0,0,0.5)"
                : "0 20px 50px rgba(0,0,0,0.08)",
              transition: "0.4s",
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
                transition: "0.6s ease",
              }}
              className="img-hover"
            />
          </div>
        </div>

        <style jsx>{`
          .email-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
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
