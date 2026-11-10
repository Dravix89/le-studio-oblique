import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";

export const metadata = { title: "Le studio" };

export default function StudioPage() {
  return (
    <>
      <SiteHeader active="studio" />
      <main>
        <section className="studio-hero">
          <p className="eyebrow">QUI NOUS SOMMES — 01 / 03</p>
          <h1>
            Créer du lien.
            <br />
            <em>Créer du sens.</em>
          </h1>
          <div className="studio-hero-bottom">
            <p>
              Le Studio Oblique est un studio indépendant qui accompagne les
              marques dans leur expression, leur stratégie et leur développement
              digital.
            </p>
            <span>
              INDÉPENDANT
              <br />
              CRÉATIF
              <br />
              ENGAGÉ
            </span>
          </div>
          <div className="studio-image"></div>
        </section>
        <section className="manifesto">
          <p className="eyebrow dark">NOTRE PHILOSOPHIE</p>
          <h2>
            La bonne idée n'est pas celle qui fait du bruit. C'est celle qui{" "}
            <em>reste.</em>
          </h2>
          <p className="manifesto-copy">
            Nous croyons aux marques qui savent pourquoi elles existent. À la
            précision plutôt qu'à l'agitation. À la créativité qui sert une
            vision et à la technologie qui rend les choses plus simples.
          </p>
        </section>
        <section className="expertise">
          <div className="expertise-head">
            <p className="eyebrow dark">CE QUE NOUS FAISONS</p>
            <h2>
              Un studio, plusieurs
              <br />
              <em>terrains de jeu.</em>
            </h2>
          </div>
          <div className="service-list">
            <article>
              <span>01</span>
              <div>
                <h3>Stratégie & conseil</h3>
                <p>
                  Positionnement, plateforme de marque, architecture de contenus
                  et définition des objectifs.
                </p>
              </div>
              <b>↗</b>
            </article>
            <article>
              <span>02</span>
              <div>
                <h3>Identité & direction artistique</h3>
                <p>
                  Identité visuelle, système graphique, univers photo et
                  cohérence de marque.
                </p>
              </div>
              <b>↗</b>
            </article>
            <article>
              <span>03</span>
              <div>
                <h3>Design & développement web</h3>
                <p>
                  Sites vitrines, e-commerce et expériences digitales sur
                  mesure, rapides et accessibles.
                </p>
              </div>
              <b>↗</b>
            </article>
          </div>
        </section>
        <section className="studio-quote">
          <span>«</span>
          <blockquote>
            Un bon projet commence toujours par une bonne conversation.
          </blockquote>
          <Link href="/contact">FAISONS CONNAISSANCE ↗</Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
