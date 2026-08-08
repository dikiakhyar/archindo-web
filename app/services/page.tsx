import type { Metadata } from "next";
import Image from "next/image";
import CtaPanel from "../components/CtaPanel";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Delivering geospatial and AI-driven solutions with precision and innovation.",
};

const SERVICES = [
  {
    image: "/21.webp",
    title: "Remote Sensing & Geo-Data Analytics",
    desc: "Advanced geospatial data analytics integrating GIS, satellite imagery, and machine learning for environmental monitoring and decision support",
  },
  {
    image: "/18.webp",
    title: "Computer Vision Solutions",
    desc: "AI-powered geospatial solutions leveraging deep learning for automated feature extraction, object detection, and spatial pattern recognition",
  },
  {
    image: "/p10.webp",
    title: "Geovisualizations & Software Development",
    desc: "Interactive geovisualization platforms and custom software tools enabling dynamic spatial analysis, research dissemination, and project outreach",
  },
  {
    image: "/22.webp",
    title: "Mapping & Drone Solutions",
    desc: "Integrated geospatial intelligence solutions combining satellite imagery, drone analytics, and smart city mapping to deliver precise spatial insights for agriculture, infrastructure, and environmental planning.",
  },
  {
    image: "/19.webp",
    title: "AI & Environmental Solutions",
    desc: "AI-driven geospatial intelligence for environmental monitoring, sustainability analytics, and resilient infrastructure planning",
  },
  {
    image: "/16.webp",
    title: "AI/ML Pipeline & Data Services",
    desc: "End-to-end machine learning pipelines integrating data ingestion, model training, and automated deployment for accelerated innovation.",
  },
  {
    image: "/17.webp",
    title: "Geovisualization & WebGIS",
    desc: "Interactive WebGIS ecosystems delivering dynamic dashboards, spatial analytics, and real-time geovisualization for decision support.",
  },
  {
    image: "/13.webp",
    title: "Training & Consulting",
    desc: "Professional training in geospatial and AI technologies.",
  },
];

export default function ServicesPage() {
  return (
    <div className="page">
      <div className="nav-offset" />

      <PageHero
        image="/4.webp"
        title="Services"
        subtitle="Delivering geospatial intelligence and AI-driven solutions"
      />

      <section className="section section--overlap">
        <div className="orb orb--green" />

        <div className="section-head reveal">
          <h2>Our Services</h2>
          <p>
            Delivering geospatial and AI-driven solutions with precision and
            innovation.
          </p>
        </div>

        <div className="container card-grid">
          {SERVICES.map((item, index) => (
            <article key={item.title} className="card service-card reveal">
              <div className="card__media">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  // Tiga kartu pertama biasanya sudah terlihat tanpa scroll.
                  loading={index < 3 ? "eager" : "lazy"}
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
      </section>

      <CtaPanel />
    </div>
  );
}
