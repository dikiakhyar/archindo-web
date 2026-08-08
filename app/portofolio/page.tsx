import type { Metadata } from "next";
import CtaPanel from "../components/CtaPanel";
import PageHero from "../components/PageHero";
import PortfolioGrid from "./PortfolioGrid";
import { PROJECTS } from "./projects";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Showcasing our geospatial and AI-driven projects.",
};

export default function PortfolioPage() {
  return (
    <div className="page">
      <div className="nav-offset" />

      <PageHero
        image="/9.webp"
        title="Portfolio"
        subtitle="Showcasing our geospatial and AI-driven projects"
      />

      <section className="section section--overlap">
        <div className="orb orb--green" />

        <div className="section-head reveal">
          <h2>Our Projects</h2>
          <p>Showcasing our geospatial and AI-driven work</p>
        </div>

        <PortfolioGrid projects={PROJECTS} />
      </section>

      <CtaPanel />
    </div>
  );
}
