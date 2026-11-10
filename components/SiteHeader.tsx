"use client";

import Link from "next/link";
import { useState } from "react";

export default function SiteHeader({
  active,
}: {
  active: "realisations" | "studio" | "contact";
}) {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Le Studio Oblique, accueil">
        <span className="brand-mark">/</span>
        <span>
          LE
          <br />
          STUDIO
          <br />
          OBLIQUE
        </span>
      </Link>
      <button
        className="menu-toggle"
        aria-label="Ouvrir le menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <i />
        <i />
      </button>
      <nav className={`nav ${open ? "open" : ""}`}>
        <Link className={active === "realisations" ? "active" : ""} href="/">
          Réalisations
        </Link>
        <Link className={active === "studio" ? "active" : ""} href="/studio">
          Le Studio
        </Link>
        <Link className={active === "contact" ? "active" : ""} href="/contact">
          Contact
        </Link>
      </nav>
    </header>
  );
}
