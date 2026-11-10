import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer>
      <Link className="footer-brand" href="/">
        LE STUDIO OBLIQUE<span>®</span>
      </Link>
      <span>STUDIO CRÉATIF INDÉPENDANT — PARIS</span>
      <a href="mailto:bonjour@lestudio.oblique">BONJOUR@LESTUDIO.OBLIQUE ↗</a>
      <span>© {new Date().getFullYear()}</span>
    </footer>
  );
}
