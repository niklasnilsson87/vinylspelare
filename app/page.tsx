import ContactSection from "./components/ContactSection";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Showcase from "./components/Showcase";

export default function Page() {
  return (
    <main>
      <a className="skip-link" href="#content">Hoppa till innehåll</a>

      <Header />
      <Hero />

      <div id="content">
        <Section
          id="hantverket"
          title="Hantverket"
          tone="base"
          imageSrc="/tools.png"
          imageAlt="Arbetsbänk med träplanka och sandpapper"
          imagePosition="right"
        >
          <p>
            Varje detalj är skapad med omsorg. Jag arbetar med klassiska tekniker
            och moderna metoder för att återställa och förädla träprodukter som ska
            hålla i generationer.
          </p>
        </Section>

        <Showcase />

        <Section
          id="thorens"
          title="Thorens"
          tone="base"
          imageSrc="/thorens.jpg"
          imageAlt="Närbild på skivspelare från thorens"
          imagePosition="right"
        >
          <p>
            Jag är specialiserad på att restaurera, reparera och modifiera Thorens skivspelare,
            med särskilt fokus på TD 124. Konceptet jag erbjuder är
            totalrenoveringar med ny plint i massivt trä inkluderad, samt
            restaurering av tonarmar – en komplett spelare i nyskick.
          </p>
          <p>
            Priset är alltid fast och överenskommet i förväg. Naturligtvis utför jag
            även mindre arbeten om så önskas.
          </p>
          <p>
            Jag tillverkar plintar/lådor i amerikansk valnöt, ek och bok, med stor
            variation på utförande.
          </p>
          <p>
            Läs mer om <a href="https://auralhifi.com/pages/thorens" target="_blank" rel="noopener noreferrer">
              Thorens historia
            </a>.
          </p>
        </Section>

        <ContactSection />
      </div>

      <Footer />
    </main>
  );
}

function Footer() {
  return (
    <footer className="site">
      <div className="container">
        © {new Date().getFullYear()} Mitt Hantverk
      </div>
    </footer>
  );
}
