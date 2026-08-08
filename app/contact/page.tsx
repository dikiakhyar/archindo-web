import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Let’s build something impactful together — geospatial intelligence, remote sensing, and AI-driven solutions.",
};

export default function ContactPage() {
  return (
    <div className="page">
      <div className="nav-offset" />

      <PageHero
        image="/3.webp"
        title="Contact Us"
        subtitle="Let’s build something impactful together"
      />

      <section className="section contact">
        <div className="orb orb--green" />
        <div className="orb orb--blue" />

        <div className="container contact__inner">
          <div className="contact__text">
            <span className="pill">Open for Collaboration</span>

            <h2>Let&apos;s Build Something Meaningful Together</h2>

            <p>
              We collaborate on geospatial intelligence, remote sensing, and AI-driven
              solutions. If you&apos;re working on impactful research or innovative
              ideas, we&apos;d love to connect.
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
    </div>
  );
}
