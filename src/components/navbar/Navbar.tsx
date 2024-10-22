"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { useTheme } from "@/src/context/ThemeProvider";

export interface Links {
  id: number;
  path: string;
  text: string;
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme()!;

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
        <li>
          <button onClick={toggle} title="Change theme">
            {theme == "dark" ? "Dark" : "Light"}
          </button>
        </li>
        {/* <li>
          <Link href="/dashboard">Dashboard</Link>
        </li> */}
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
