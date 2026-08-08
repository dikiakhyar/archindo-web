import Link from "next/link";

/**
 * Panel ajakan kolaborasi di bagian bawah halaman.
 * Dulu blok ini disalin-tempel di lima halaman dengan gaya sedikit berbeda.
 */
export default function CtaPanel({
  title = "Ready to collaborate?",
  desc = "Let’s build impactful geospatial and AI solutions together.",
  action = "Contact Us",
  href = "/contact",
}: {
  title?: string;
  desc?: string;
  action?: string;
  href?: string;
}) {
  return (
    <section className="cta reveal">
      <h2>{title}</h2>
      <p>{desc}</p>
      <Link href={href} className="btn">
        {action}
      </Link>
    </section>
  );
}
