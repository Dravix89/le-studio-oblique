import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <SiteHeader active="contact" />
      <main>
        <section className="contact-hero">
          <div className="contact-title">
            <p className="eyebrow">03 / 03 — PRENONS CONTACT</p>
            <h1>
              Et si on
              <br />
              <em>se parlait ?</em>
            </h1>
            <p>
              Une idée, un besoin, une envie de faire mieux ? Racontez-nous ce
              que vous avez en tête. Nous reviendrons vers vous rapidement.
            </p>
          </div>
          <div className="contact-aside">
            <span>
              DISPONIBLE POUR
              <br />
              DE NOUVEAUX PROJETS
            </span>
            <a href="mailto:bonjour@lestudio.oblique">
              BONJOUR@LESTUDIO.OBLIQUE ↗
            </a>
            <span>
              PARIS, FRANCE
              <br />À DISTANCE, PARTOUT
            </span>
          </div>
        </section>
        <section className="contact-main">
          <div className="contact-info">
            <p className="eyebrow dark">LE PREMIER PAS</p>
            <h2>
              Parlons de
              <br />
              <em>votre projet.</em>
            </h2>
            <p>
              Décrivez-nous votre projet en quelques lignes. Chaque
              collaboration commence par un échange simple et sans engagement.
            </p>
            <a className="email-link" href="mailto:bonjour@lestudio.oblique">
              bonjour@lestudio.oblique ↗
            </a>
            <div className="social-note">
              INSTAGRAM&nbsp;&nbsp; ↗<br />
              LINKEDIN&nbsp;&nbsp; ↗
            </div>
          </div>
          <form
            className="contact-form"
            action="mailto:bonjour@lestudio.oblique"
            method="post"
            encType="text/plain"
          >
            <label>
              VOTRE NOM
              <input
                name="Nom"
                type="text"
                placeholder="Comment vous appelez-vous ?"
                required
              />
            </label>
            <label>
              VOTRE EMAIL
              <input
                name="Email"
                type="email"
                placeholder="vous@exemple.com"
                required
              />
            </label>
            <label>
              SUJET DU PROJET
              <select name="Sujet" defaultValue="">
                <option value="" disabled>
                  Choisir un sujet
                </option>
                <option>Identité de marque</option>
                <option>Site internet</option>
                <option>E-commerce</option>
                <option>Conseil & stratégie</option>
                <option>Autre demande</option>
              </select>
            </label>
            <label>
              QUELQUES MOTS SUR VOTRE PROJET
              <textarea
                name="Message"
                rows={4}
                placeholder="Le contexte, vos envies, votre calendrier…"
                required
              />
            </label>
            <button type="submit" className="submit-btn">
              ENVOYER LE MESSAGE <span>↗</span>
            </button>
            <p className="form-note">
              En envoyant ce formulaire, vous acceptez d'être recontacté au
              sujet de votre demande.
            </p>
          </form>
        </section>
        <section className="contact-bottom">
          <span>UNE BONNE RENCONTRE PEUT TOUT CHANGER.</span>
          <a href="/">RETOURNER AUX PROJETS ↑</a>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
