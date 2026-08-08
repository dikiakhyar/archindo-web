import type { Metadata } from "next";
import Image from "next/image";
import CtaPanel from "../components/CtaPanel";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Our Team",
  description: "The people behind innovation and impact at Archindo Geointelligence.",
};

const TEAM = [
  {
    name: "Dr.Sc. Sanjiwana Arjasakusuma, S.Si., M.GIS.",
    badge: "Founder",
    image: "/sanjiwana2.webp",
  },
  {
    name: "Marzuki, S.Kel., M.Sc.",
    badge: "Remote Sensing & GIS Analyst",
    image: "/marzuki2.webp",
  },
  {
    name: "Nur Laila Eka Utami, S.Si.",
    badge: "Remote Sensing & GIS Analyst",
    image: "/23.webp",
  },
];

export default function TeamPage() {
  return (
    <div className="page">
      <div className="nav-offset" />

      <PageHero image="/20.webp" title="Our Team" />

      <section className="section section--overlap">
        <div className="orb orb--green" />

        <div className="section-head reveal">
          <h2>Meet Our Team</h2>
          <p>The people behind innovation and impact</p>
        </div>

        <div className="container card-grid card-grid--team">
          {TEAM.map((member) => (
            <article key={member.name} className="card team-card reveal">
              <div className="card__media card__media--portrait">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 92vw, 320px"
                  className="img-hover"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className="card__body team-card__body">
                <h3>{member.name}</h3>
                <span className="tag">{member.badge}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaPanel
        title="Want to work with us?"
        desc="Let’s collaborate and create impactful solutions together."
      />
    </div>
  );
}
