"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function SiteHeader({
  active,
}: {
  active: "realisations" | "studio" | "contact";
}) {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Le Studio Oblique, accueil">
        <Image
          src="/logo3.png"
          alt="Le Studio Oblique"
          width={200}
          height={80}
          priority
          className="brand-logo"
        />
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
