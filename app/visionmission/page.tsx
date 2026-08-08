import type { Metadata } from "next";
import CtaPanel from "../components/CtaPanel";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Vision & Mission",
  description:
    "Driving innovation through geospatial intelligence and AI for sustainable environmental development and human capital advancement.",
};

const MISSIONS = [
  {
    title: "Geospatial Solutions",
    desc: "Providing reliable and precise mapping solutions using state-of-the-art geospatial data analytics and remote sensing technology.",
  },
  {
    title: "AI Development",
    desc: "Contributing to the development of multimodal AI (vision and language) to support sustainable development.",
  },
  {
    title: "Human Capital",
    desc: "Developing the foundation of human capital in geospatial and AI through research, education, and innovation.",
  },
];

export default function VisionMissionPage() {
  return (
    <div className="page">
      <div className="nav-offset" />

      <PageHero
        image="/20.webp"
        title="Vision & Mission"
        subtitle="Driving innovation through geospatial intelligence and AI"
      />

      <section className="section section--overlap">
        <div className="orb orb--green" />

        {/* Vision */}
        <div className="vision-card reveal">
          <span className="pill pill--outline">OUR VISION</span>
          <p>
            To become the leading sector for state-of-the-art technology in the fields
            of geospatial and artificial intelligence, supporting sustainable
            environmental development and human capital advancement.
          </p>
        </div>

        {/* Missions */}
        <div className="section-head reveal">
          <span className="pill pill--outline">OUR MISSIONS</span>
        </div>

        <div className="container card-grid">
          {MISSIONS.map((item) => (
            <article key={item.title} className="card service-card reveal">
              <div className="card__body">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaPanel />
    </div>
  );
}
