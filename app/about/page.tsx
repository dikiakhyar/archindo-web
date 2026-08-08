import type { Metadata } from "next";
import Image from "next/image";
import CtaPanel from "../components/CtaPanel";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Archindo Geointelligence (AGI) is a geospatial and AI solutions start-up based in Yogyakarta, Indonesia.",
};

const STORY = [
  "Archindo Geointelligence (AGI) is a visionary geospatial and AI solutions start-up based in Yogyakarta, Indonesia, dedicated to supporting a sustainable environment and human development.",
  "The name Archindo carries our philosophy. “Arch” reflects both archery, symbolizing precision, focus, and accuracy, and archipelago, representing Indonesia’s vast geography. “Indo” signifies our roots, while Geointelligence reflects our expertise in transforming geospatial data into meaningful insights.",
  "We harness state-of-the-art geospatial analytics and artificial intelligence to help communities, governments, and industries make smarter decisions through data-driven insights.",
  "We are equally committed to empowering people through training, research, and innovation, building the next generation of professionals in AI and geospatial technologies.",
  "At AGI, we believe technology is most powerful when used to protect the planet and improve lives.",
];

export default function AboutPage() {
  return (
    <div className="page">
      <div className="nav-offset" />

      <PageHero image="/12.webp" title="About Us" />

      <section className="section section--overlap">
        <div className="orb orb--green" />

        <div className="about-page__tagline reveal">
          <h2>
            “Empowering Decisions Through
            <br />
            Geospatial Intelligence &amp; Artificial Intelligence”
          </h2>
        </div>

        <div className="container about-page__grid">
          <div className="about-page__logo">
            <Image
              src="/hero.webp"
              alt="Logo Archindo Geointelligence"
              width={323}
              height={308}
              sizes="(max-width: 900px) 140px, 180px"
            />
          </div>

          <div className="about-page__story">
            {STORY.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <CtaPanel />
    </div>
  );
}
