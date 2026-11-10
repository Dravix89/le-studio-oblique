"use client";

import { useState } from "react";

const projects = [
  {
    name: "The Company",
    type: "01 / E-COMMERCE · IDENTITÉ",
    description: "Une présence digitale pensée comme un objet de désir.",
    tone: "#c44501",
    photo:
      "https://images.unsplash.com/photo-1690627931320-16ac56eb2588?auto=format&fit=crop&w=1800&q=88",
  },
  {
    name: "Artistique",
    type: "02 / SITE INTERNET · DIRECTION ARTISTIQUE",
    description: "Une marque vivante, une expérience sans détour.",
    tone: "#0187c6",
    photo:
      "https://images.unsplash.com/photo-1725347740937-e9ecf9cef2b2?auto=format&fit=crop&w=1800&q=88",
  },
  {
    name: "Branding",
    type: "03 / E-COMMERCE · BRANDING",
    description: "Le caractère d'une marque, jusque dans le moindre détail.",
    tone: "#1cae65",
    photo:
      "https://images.unsplash.com/photo-1694878981856-7fb3b09598a5?auto=format&fit=crop&w=1800&q=88",
  },
];

export default function ProjectSlider() {
  const [current, setCurrent] = useState(0);
  const project = projects[current];
  const move = (step: number) =>
    setCurrent((value) => (value + step + projects.length) % projects.length);

  return (
    <section className="work-stage" aria-label="Sélection de projets">
      <div className="stage-meta">
        <span>STUDIO CRÉATIF INDÉPENDANT</span>
        <span>PARIS · FRANCE</span>
      </div>
      {projects.map((item, index) => (
        <article
          key={item.name}
          className={`project-slide ${index === current ? "is-active" : ""}`}
          style={
            {
              "--tone": item.tone,
              "--photo": `url('${item.photo}')`,
            } as React.CSSProperties
          }
          aria-hidden={index !== current}
        >
          <div className="project-photo" />
          <div className="project-cut" />
          <div className="project-content">
            <p className="eyebrow">{item.type}</p>
            <h1>{item.name}</h1>
            <p className="project-bottom">{item.description}</p>
            <a className="project-link" href="/contact">
              DÉCOUVRIR LE PROJET <span>↗</span>
            </a>
          </div>
        </article>
      ))}
      <div className="side-caption">FAIRE SIMPLE. FAIRE JUSTE.</div>
      <div className="stage-controls">
        <button
          className="arrow prev"
          aria-label="Projet précédent"
          onClick={() => move(-1)}
        >
          ←
        </button>
        <span className="counter">
          <b>{String(current + 1).padStart(2, "0")}</b>
          <i />
          03
        </span>
        <button
          className="arrow next"
          aria-label="Projet suivant"
          onClick={() => move(1)}
        >
          →
        </button>
      </div>
      <div className="progress">
        <span
          style={{ width: `${((current + 1) / projects.length) * 100}%` }}
        />
      </div>
    </section>
  );
}
