"use client";

import { useEffect, useState } from "react";
import styles from "./style.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const target = document.getElementById("hero-top-sentinel");
    if (!target) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        // När sentineln inte längre syns => vi har scrollat minst 1px
        setScrolled(!entry.isIntersecting);
      },
      { root: null, threshold: 0 }
    );

    io.observe(target);
    return () => io.disconnect();
  }, []);

  return (
    <header className={`${styles.siteHeader} ${scrolled ? styles.scrolled : styles.atTop}`}>
      <div className={styles.inner}>
        <nav className={styles.nav} aria-label="Huvudnavigation">
          <a href="#hantverket">Hantverket</a>
          <a href="#thorens">Thorens</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </div>
    </header>
  );
}
