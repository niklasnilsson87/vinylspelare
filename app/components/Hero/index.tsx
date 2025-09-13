import Image from "next/image";
import styles from "./style.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero} aria-label="Introduktion">
      <div id="hero-top-sentinel" className={styles.ioSentinel} aria-hidden />
      <div className={styles.heroMedia} aria-hidden>
        <Image
          src="/vinyl.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div className={styles.heroOverlay} />
      </div>

      <div className={styles.heroInner}>
        <div className={styles.heroCard}>
          <h1 className={styles.heroH1}>Hantverk med hjärta och precision</h1>
          <p className={styles.heroP}>
            Jag renoverar och återställer klassiska skrivspelare och skapar
            hållbara detaljer i trä – byggda för att älskas länge.
          </p>
          <a className={styles.cta} href="#kontakt">Kontakta mig</a>
        </div>
      </div>
    </section>
  );
}
