"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export interface Links {
  id: number;
  path: string;
  text: string;
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links: Links[] = [
    {
      id: 1,
      path: "/login",
      text: "Login",
    },
    {
      id: 2,
      path: "/signup",
      text: "Sign Up",
    },
  ];

  // JSX
  return (
    <nav
      className={
        scrolled
          ? `${styles.container} ${styles.glassMorphism}`
          : styles.container
      }
    >
      <h1 className={styles.logo}>
        <Link href="/">Wallet</Link>
      </h1>
      <ul className={styles.links}>
        {links.map((link: Links) => (
          <li key={link.id}>
            <Link href={link.path} className={styles.link}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
