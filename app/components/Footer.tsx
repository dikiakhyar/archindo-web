import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portofolio", label: "Portofolio" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="orb orb--green" style={{ background: "rgba(14,165,164,0.15)" }} />
      <div className="orb orb--blue" style={{ background: "rgba(59,130,246,0.15)" }} />

      <div className="footer__grid">
        {/* Brand */}
        <div>
          <div className="footer__badge">
            <Image
              src="/hero.webp"
              alt=""
              width={26}
              height={26}
              style={{ width: 26, height: 26, objectFit: "contain" }}
            />
            <span>Archindo Geointelligence</span>
          </div>

          <p className="footer__desc">
            Advancing geospatial intelligence and AI-driven solutions for impactful
            research and real-world applications.
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h4 className="footer-title">Navigation</h4>
          <div className="footer-col">
            {NAV_LINKS.map((item) => (
              <Link key={item.href} href={item.href} className="footer-link">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Kontak */}
        <div>
          <h4 className="footer-title">Contact</h4>
          <div className="footer-col">
            <a href="mailto:archindo.geo@gmail.com" className="footer-link">
              archindo.geo@gmail.com
            </a>
            <span className="footer-sub">CC: sanjiwana@live.com</span>
          </div>
        </div>
      </div>

      <div className="footer-divider" />

      <div className="footer-bottom">
        © {new Date().getFullYear()} Archindo Geointelligence. All rights reserved.
      </div>
    </footer>
  );
}
