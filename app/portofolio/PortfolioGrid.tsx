"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Project } from "./projects";

export default function PortfolioGrid({ projects }: { projects: Project[] }) {
  const [selected, setSelected] = useState<Project | null>(null);

  // Kunci scroll halaman + tutup dengan Escape selama modal terbuka.
  useEffect(() => {
    if (!selected) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [selected]);

  return (
    <>
      <div className="container card-grid">
        {projects.map((project, index) => (
          <button
            key={project.title}
            type="button"
            className="card portfolio-card reveal"
            onClick={() => setSelected(project)}
          >
            <div className="card__media">
              <Image
                src={project.image}
                alt={project.title}
                fill
                loading={index < 2 ? "eager" : "lazy"}
                sizes="(max-width: 640px) 92vw, (max-width: 1100px) 46vw, 350px"
                className="img-hover"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="card__body">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>

              <div className="portfolio-card__tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              <span className="portfolio-card__hint">Click to view details →</span>
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="modal"
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
          onClick={() => setSelected(null)}
        >
          <div className="modal__panel" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal__close"
              onClick={() => setSelected(null)}
              aria-label="Tutup detail proyek"
            >
              ×
            </button>

            <div className="modal__cover">
              <Image
                src={selected.image}
                alt={selected.title}
                fill
                sizes="(max-width: 900px) 92vw, 840px"
                style={{ objectFit: "cover" }}
              />
            </div>

            <h2 className="modal__title">{selected.title}</h2>
            <p className="modal__desc">{selected.desc}</p>

            {selected.clientLogo && (
              <div className="modal__client">
                <Image
                  src={selected.clientLogo}
                  alt={selected.client ?? ""}
                  width={60}
                  height={60}
                  style={{ objectFit: "contain" }}
                />
                <b>{selected.client}</b>
              </div>
            )}

            <div className="modal__tags">
              {selected.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>

            <div className="modal__detail">{selected.detail}</div>

            <div className="modal__gallery">
              {selected.images.map((img) => (
                <div key={img} className="modal__gallery-item">
                  <Image
                    src={img}
                    alt=""
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 92vw, 280px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
