import Image from "next/image";
import styles from "./style.module.css";

const showcase = [
  { src: "/spelare-1.JPEG", alt: "Thorens TD 124 MK1 restaurerad" },
  { src: "/spelare-2.JPEG", alt: "Thorens TD 124 MK2 restaurerad" },
  { src: "/spelare-3.JPEG", alt: "Specialtillverkad plint i valnöt" },
  { src: "/spelare-4.JPEG", alt: "Restaurerad Thorens tonarm" },
  { src: "/spelare-5.JPEG", alt: "Restaurerad Thorens tonarm" },
];

export default function Showcase() {
  const big = showcase[0];
  const small = showcase.slice(1, 5);

  return (
    <section id="showcase" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Showcase</h2>
        <p className={styles.lead}>
          Här kan du se några av mina färdiga restaureringar och specialplintar.
        </p>

        <div className={styles.grid}>
          {/* Stor vänster */}
          <div className={styles.big}>
            <Image
              src={big.src}
              alt={big.alt}
              fill
              className={styles.img}
              sizes="(max-width: 1120px) 66vw, 740px"
              priority
            />
          </div>

          {/* Höger: 2x2 små */}
          <div className={styles.right}>
            {small.map((item, i) => (
              <div key={i} className={styles.small}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className={styles.img}
                  sizes="(max-width: 1120px) 34vw, 380px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
