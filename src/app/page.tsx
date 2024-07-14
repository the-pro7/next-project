import Image from "next/image";
import styles from "./home.module.css";
import Link from "next/link";
import heroImage from "../../public/landing-image.svg";
import brandsImage from "../../public/Logos.png";
import dashboardImage from "../../public/third.svg";
import { Cards } from "../components/card/Cards";
import { User } from "../components/user/User";

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
      <section className={styles.multiPartSection}>
        <div className={styles.brandsSection}>
          <Image
            src={brandsImage}
            className={styles.brandImage}
            alt="Brand Images"
          />
        </div>
        <div className={styles.dashboardImage}>
          <Image src={dashboardImage} alt="Wallet dashboard image" />
        </div>
        <Cards />
      </section>
      <section className={styles.testimonial}>
        <div className={styles.testimonialContainer}>
          <h3 className={styles.testimony}>
            “Wallet is a great product! All of my most important information is
            there - credit cards, transit cards, boarding passes, tickets, and
            more. And I don't need to worry because it's all in one place!
            thanks!”
          </h3>
          <User
            image="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            name="Sean Menders"
          />
        </div>
      </section>
    </main>
  );
}
