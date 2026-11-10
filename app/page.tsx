import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ProjectSlider from "../components/ProjectSlider";

export default function HomePage() {
  return (
    <>
      <SiteHeader active="realisations" />
      <main>
        <ProjectSlider />
        <section className="work-intro">
          <p className="eyebrow dark">SÉLECTION DE PROJETS — 2021 / 2025</p>
          <div>
            <h2>
              Des idées claires.
              <br />
              <em>Des marques singulières.</em>
            </h2>
            <p>
              Nous imaginons des identités et des expériences digitales qui
              donnent du sens à votre présence, et du relief à vos ambitions.
            </p>
          </div>
        </section>
        <section className="project-grid">
          <Link className="grid-card card-one" href="/contact">
            <div className="grid-image" />
            <span>01 — THE COMPANY</span>
            <b>Identité & E-Commerce ↗</b>
          </Link>
          <Link className="grid-card card-two" href="/contact">
            <div className="grid-image" />
            <span>02 — THE ARTISTIC</span>
            <b>Direction Artistique & Web ↗</b>
          </Link>
          <Link className="grid-card card-three" href="/contact">
            <div className="grid-image" />
            <span>03 — THE BRANDING</span>
            <b>Branding & E-Commerce ↗</b>
          </Link>
        </section>
        <section className="bottom-cta">
          <p className="eyebrow">UN PROJET EN TÊTE ?</p>
          <h2>On en parle.</h2>
          <Link href="/contact" className="circle-link">
            Démarrer
            <br />
            Un Projet <span>↗</span>
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
