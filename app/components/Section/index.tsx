import Image from "next/image";
import styles from "./style.module.css";

type Tone = "base" | "alt";
type ImagePos = "left" | "right";

type SectionProps = {
  id?: string;
  title: string;
  tone?: Tone;
  imageSrc?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  imagePosition?: ImagePos;
  children: React.ReactNode;
};

export default function Section({
  id,
  title,
  tone = "alt",
  imageSrc,
  imageAlt = "",
  imageWidth = 1200,
  imageHeight = 800,
  imagePosition = "right",
  children,
}: SectionProps) {
  const hasImage = Boolean(imageSrc);

  return (
    <section
      id={id}
      className={`${styles.section} ${tone === "base" ? styles.toneBase : styles.toneAlt}`}
      aria-labelledby={id ? `${id}-title` : undefined}
    >
      <div className={styles.inner} data-image-pos={imagePosition} data-has-image={hasImage}>
        <div className={styles.text}>
          <h2 id={id ? `${id}-title` : undefined} className={styles.title}>{title}</h2>
          <div className={styles.content}>{children}</div>
        </div>

        {hasImage && (
          <div className={styles.imageWrap}>
            <Image
              src={imageSrc!}
              alt={imageAlt}
              width={imageWidth}
              height={imageHeight}
              className={styles.image}
            />
          </div>
        )}
      </div>
    </section>
  );
}
