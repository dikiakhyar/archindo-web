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
    badge: "Research Officer",
    image: "/marzuki2.webp",
  },
  {
    name: "Maulydia Febrianti Pratiwi, S.Si.",
    badge: "Research Officer",
    image: "/maulydia-febrianti-pratiwi.jpeg",
  },
  {
    name: "Nur Laila Eka Utami, S.Si.",
    badge: "Consultant",
    image: "/23.webp",
  },
  {
    name: "Mulyadi Alwi, S.Si., M.Sc.",
    badge: "Consultant",
    image: "/mulyadi-alwi.jpg",
  },
  {
    name: "Daniel Valerie Sahat Hutahaean",
    badge: "INTERNSHIP",
    image: "/daniel-valerie-sahat-hutahaean.jpeg",
  },
  {
    name: "Ageng Haryo Widagdo",
    badge: "INTERNSHIP",
    image: "/ageng-haryo-widagdo.jpeg",
  },
];

const TEAM_GROUPS = [
  { id: "founder", title: "Founder", badge: "Founder" },
  { id: "research-officer", title: "Research Officer", badge: "Research Officer" },
  { id: "consultant", title: "Consultant", badge: "Consultant" },
  { id: "interns", title: "Interns", badge: "INTERNSHIP" },
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

        <div className="container team-groups">
          {TEAM_GROUPS.map((group) => (
            <section
              key={group.id}
              className={`team-group${group.id === "founder" || group.id === "interns" ? " team-group--full" : ""}`}
              aria-labelledby={`team-${group.id}`}
            >
              <h3 id={`team-${group.id}`} className="team-group__title reveal">{group.title}</h3>
              <div className="card-grid card-grid--team">
                {TEAM.filter((member) => member.badge === group.badge).map((member) => (
                  <article key={member.name} className="card team-card reveal">
                    <div className="card__media card__media--portrait">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes={
                          member.name === "Daniel Valerie Sahat Hutahaean"
                            ? "(max-width: 640px) 294.4vw, 1024px"
                            : member.name === "Mulyadi Alwi, S.Si., M.Sc."
                              ? "(max-width: 640px) 124vw, 432px"
                            : "(max-width: 640px) 92vw, 320px"
                        }
                        className="img-hover"
                        style={{ objectFit: "cover" }}
                      />
                    </div>

                    <div className="card__body team-card__body">
                      <h4>{member.name}</h4>
                    </div>
                  </article>
                ))}
              </div>
            </section>
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
