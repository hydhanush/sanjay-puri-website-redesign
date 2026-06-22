"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "./projects-data";
import "./projects.css";

const FILTERS = ["All", "Residential", "Cultural", "Commercial", "Hospitality"] as const;
type Filter = (typeof FILTERS)[number];

export default function ProjectsPage() {
  const [active, setActive] = useState<Filter>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <main className="projects-page">

      <div className="projects-controls">
        <nav className="projects-filters" aria-label="Filter projects by category">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              aria-pressed={active === f}
              className={`filter-btn${active === f ? " filter-btn--active" : ""}`}
            >
              {f}
            </button>
          ))}
        </nav>
      </div>

      <div className="projects-masonry" aria-label="Projects">
        {filtered.map((project, index) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="project-card"
            aria-label={project.name}
          >
            <div
              className={`project-card-image project-card-image--${
                project.tall ? "portrait" : "landscape"
              }`}
            >
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="(max-width: 600px) 100vw, 50vw"
                className="project-card-img"
                priority={index === 0}
              />
              <div className="project-card-overlay">
                <p className="project-card-name">{project.name}, {project.location}</p>
                <p className="project-card-category">{project.category}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

    </main>
  );
}
