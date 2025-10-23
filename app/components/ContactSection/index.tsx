"use client"

import { FormEvent, useState } from "react";
import styles from './style.module.css';

export default function ContactSection() {

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setSuccess(null);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      console.log(data)
      if (!res.ok) throw new Error(data?.error || 'Något gick fel');
      setSuccess('Tack! Jag hör av mig så snart jag kan.');
      form.reset();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Kunde inte skicka meddelandet. Försök igen.';
      setError(message);
    } finally {
      setSending(false);
    }
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
              <label htmlFor="name" className={styles.label}>
                Namn
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                E-post
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                Meddelande
              </label>
              <textarea
                id="message"
                name="message"
                required
                className={styles.textarea}
              />
            </div>
            <div className={styles.formActions}>
              <button className={styles.btn} type="submit" disabled={sending}>
                {sending ? 'Skickar…' : 'Skicka'}
              </button>
            </div>
            {success && <p role="status" aria-live="polite" className={styles.success}>{success}</p>}
            {error && <p role="alert" aria-live="assertive" className={styles.error}>{error}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}