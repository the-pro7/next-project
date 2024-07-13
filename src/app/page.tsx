import Image from "next/image";
import styles from "./home.module.css";
import Link from "next/link";
import heroImage from "../../public/landing-image.svg";
import brandsImage from "../../public/Logos.png";

export default function Home() {
  return (
    <main>
      <section className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.header}>
            Well Janice doesn't believe I'm done!
          </h1>
          <p className={styles.description}>
            This is a template Figma file, turned into code using my own skills.
            Learn more at{" "}
            <Link href="#" className={styles.meLink}>
              opoku-ameyaw.tech
            </Link>
          </p>
          <Link href="/get-started" className={styles.heroCta}>
            Get Started
          </Link>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={heroImage}
            alt="Landing page image"
            width={700}
            height={700}
            // fill
            className={styles.image}
          />
        </div>
      </section>
      <section className={styles.brandsSection}>
        <Image
          src={brandsImage}
          fill
          className={styles.brandImage}
          alt="Brand Images"
        />
      </section>
    </main>
  );
}
