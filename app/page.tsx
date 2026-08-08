import Image from "next/image";
import Link from "next/link";
import HeroParallax from "./components/HeroParallax";
import TiltImage from "./components/TiltImage";

/* ---------------- Data ---------------- */

const FEATURES = [
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

const LINES_OF_BUSINESS = [
  {
    icon: "🎓",
    title: "AGI Academy",
    desc: "GIS & AI bootcamps, geospatial certification programs, and satellite data training.",
  },
  {
    icon: "🔬",
    title: "AGI Research & Innovation",
    desc: "Advanced Geospatial AI research for environmental analysis and Earth observation.",
  },
  {
    icon: "🌍",
    title: "AGI Solutions",
    desc: "Innovative technology solutions and consulting services powered by geospatial data.",
  },
];

const SERVICES = [
  {
    title: "Remote Sensing & Geo-Data Analytics",
    desc: "Advanced geospatial data analytics integrating GIS, satellite imagery, and machine learning for environmental monitoring and decision support",
    image: "/21.webp",
  },
  {
    title: "Computer Vision Solutions",
    desc: "AI-powered geospatial solutions leveraging deep learning for automated feature extraction, object detection, and spatial pattern recognition",
    image: "/18.webp",
  },
  {
    title: "Geovisualizations & Software Development",
    desc: "Interactive geovisualization platforms and custom software tools enabling dynamic spatial analysis, research dissemination, and project outreach",
    image: "/p10.webp",
  },
];

/* ---------------- Halaman ---------------- */

export default function Home() {
  return (
    <div className="page">
      <div className="nav-offset" />

      <HeroSection />
      <LineOfBusinessSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}

/* ---------------- Hero ---------------- */

function HeroSection() {
  return (
    <section className="hero">
      <HeroParallax className="hero__bg">
        <Image
          src="/5.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </HeroParallax>

      <div className="hero__overlay" />

      <div className="hero__inner">
        <div className="hero__text">
          <h1>Archindo GeoIntelligence</h1>
          <p>
            &quot;Mapping the future, empowering people, driving
            sustainability.&quot;
          </p>
          <Link href="/portofolio" className="btn">
            Discover Our Solutions
          </Link>
        </div>

        <div className="hero__art">
          <div className="hero__art-glass" aria-hidden="true" />
          <Image
            src="/hero.webp"
            alt="Logo Archindo GeoIntelligence"
            width={323}
            height={308}
            priority
            sizes="(max-width: 768px) 200px, 350px"
            className="hero__art-img"
          />
        </div>
      </div>

      <div className="hero__features">
        <div className="hero__features-line" aria-hidden="true" />
        {FEATURES.map((item) => (
          <div key={item.title} className="feature-item">
            <span className="icon" aria-hidden="true">
              ➤
            </span>
            <h3>{item.title}</h3>
            <span className="feature-item__desc">{item.desc}</span>
            <div className="popup">{item.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Line of Business ---------------- */

function LineOfBusinessSection() {
  return (
    <section className="lob">
      <Image
        src="/15.webp"
        alt=""
        fill
        sizes="100vw"
        className="lob__bg"
        style={{ objectFit: "cover" }}
      />
      <div className="lob__veil" />
      <div className="orb orb--green" />
      <div className="orb orb--blue" />

      <div className="section-head" style={{ position: "relative", zIndex: 2 }}>
        <h2>Line of Business</h2>
        <p>Our core pillars in delivering geospatial intelligence and innovation</p>
      </div>

      <div className="container card-grid">
        {LINES_OF_BUSINESS.map((item) => (
          <div key={item.title} className="lob-card">
            <div className="icon" aria-hidden="true">
              {item.icon}
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */

function ServicesSection() {
  return (
    <section className="section">
      <div className="orb orb--green" />

      <div className="section-head reveal">
        <h2>Our Services</h2>
        <p>Delivering geospatial and AI-driven solutions with precision and innovation.</p>
      </div>

      <div className="container card-grid">
        {SERVICES.map((item) => (
          <article key={item.title} className="card service-card reveal">
            <div className="card__media">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 92vw, (max-width: 1100px) 46vw, 350px"
                className="img-hover"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="card__body">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="section__actions">
        <Link href="/services" className="btn">
          Read More..
        </Link>
      </div>
    </section>
  );
}

/* ---------------- About ---------------- */

function AboutSection() {
  return (
    <section className="about">
      <Image
        src="/1.webp"
        alt=""
        fill
        sizes="100vw"
        className="about__bg"
        style={{ objectFit: "cover" }}
      />
      <div className="about__overlay" />

      <div className="about__inner">
        <div className="about__panel">
          <h2>
            <b>About Us</b>
          </h2>
          <p>
            Archindo Geointelligence (AGI) is a visionary geospatial and AI solutions
            start-up based in Yogyakarta, Indonesia, dedicated to supporting a
            sustainable environment and human development.
          </p>
          <p>
            We harness state-of-the-art geospatial data analytics and artificial
            intelligence to develop innovative solutions that help communities,
            governments, and industries make smarter, data-driven decisions. Our team
            combines expertise in remote sensing, AI/ML, geospatial analytics, and data
            science to deliver impactful solutions. From high-resolution mapping and
            drone surveys to AI-powered environmental monitoring, WebGIS platforms, and
            sustainability reporting, we provide end-to-end services that transform
            complex data into actionable insights for sustainable development.
          </p>
        </div>

        <TiltImage className="about__media">
          <Image
            src="/11.webp"
            alt="Kegiatan lapangan Archindo Geointelligence"
            fill
            sizes="(max-width: 900px) 92vw, 600px"
            style={{ objectFit: "cover" }}
          />
        </TiltImage>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */

function ContactSection() {
  return (
    <section className="section contact">
      <div className="orb orb--green" />
      <div className="orb orb--blue" />

      <div className="container contact__inner">
        <div className="contact__text">
          <span className="pill">Open for Collaboration</span>

          <h2>Let&apos;s Build Something Meaningful Together</h2>

          <p>
            We collaborate on geospatial intelligence, remote sensing, and AI-driven
            solutions. If you&apos;re working on impactful research or innovative ideas,
            we&apos;d love to connect.
          </p>

          <div className="email-card">
            <span className="email-card__label">Contact us at</span>
            <a href="mailto:archindo.geo@gmail.com" className="email-card__mail">
              archindo.geo@gmail.com
            </a>
            <span className="email-card__cc">CC: sanjiwana@live.com</span>
          </div>
        </div>

        <div className="glass-card">
          <Image
            src="/2.webp"
            alt="Tim Archindo Geointelligence"
            fill
            sizes="(max-width: 900px) 92vw, 520px"
            className="img-hover"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}
