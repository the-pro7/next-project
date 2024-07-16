import React from "react";
import styles from "./Footer.module.css";
import { Links } from "../navbar/Navbar";
import Link from "next/link";
import Form from "../form/Form";

const Footer = () => {
  const links: Links[] = [
    {
      id: 1,
      path: "/login",
      text: "Privacy Policy",
    },
    {
      id: 2,
      path: "/signup",
      text: "Terms of use",
    },
    {
      id: 3,
      path: "/signup",
      text: "Cookie Policy",
    },
  ];

  return (
    <footer className={styles.container}>
      <span className={styles.seperator}></span>
      <div className={styles.text}>
        <h1 className={styles.logo}>
          <Link href="/">Wallet</Link>
        </h1>
        <ul className={styles.links}>
          <li className={styles.attribution}>© Walltet 2024</li>
          {links.map((link: Links) => (
            <li key={link.id}>
              <Link href={link.path} className={styles.link}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Form />
    </footer>
  );
};

export default Footer;
