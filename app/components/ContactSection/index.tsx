"use client"

import { FormEvent } from "react";
import styles from './style.module.css';

export default function ContactSection() {

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Här kan du skicka data till en API-route /actions etc.
    alert('Tack! Jag hör av mig så snart jag kan.');
  }
  return (
    <section
      id="kontakt"
      className={styles.section}
      aria-labelledby="kontakt-title"
    >
      <div className="wrapper">
        <h2 id="kontakt-title">Kontakta mig</h2>
        <div className={styles.card}>
          <form onSubmit={onSubmit} className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label htmlFor="namn" className={styles.label}>
                Namn
              </label>
              <input
                id="namn"
                name="namn"
                type="text"
                required
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="epost" className={styles.label}>
                E-post
              </label>
              <input
                id="epost"
                name="epost"
                type="email"
                required
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="meddelande" className={styles.label}>
                Meddelande
              </label>
              <textarea
                id="meddelande"
                name="meddelande"
                required
                className={styles.textarea}
              />
            </div>
            <div className={styles.formActions}>
              <button className={styles.btn} type="submit">
                Skicka
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}