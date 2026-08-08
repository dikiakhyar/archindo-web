import Image from "next/image";

/**
 * Banner atas untuk halaman dalam.
 * Menggantikan blok `backgroundImage: url(...)` yang dulu diulang
 * di enam halaman, sekaligus membuat gambarnya lewat next/image
 * agar ukurannya menyesuaikan lebar layar.
 */
export default function PageHero({
  image,
  title,
  subtitle,
}: {
  image: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="page-hero">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="page-hero__img"
      />

      <div className="page-hero__inner">
        <h1>{title}</h1>
        {subtitle ? <p>{subtitle}</p> : null}
      </div>
    </section>
  );
}
