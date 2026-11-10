import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer>
      <Link
        className="footer-brand"
        href="/"
        aria-label="Le Studio Oblique, accueil"
      >
        <Image
          src="/logo.png"
          alt="Le Studio Oblique"
          width={200}
          height={80}
          className="footer-logo"
        />
      </Link>
      <span>STUDIO CRÉATIF INDÉPENDANT — PARIS</span>
      <a href="mailto:bonjour@lestudio.oblique">BONJOUR@LESTUDIO.OBLIQUE ↗</a>
      <span>© {new Date().getFullYear()}</span>
    </footer>
  );
}
