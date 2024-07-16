"use client";
import React, { useState } from "react";
import styles from "./Form.module.css";

export default function Form() {
  const [email, setEmail] = useState<string>("");

  function handleEmailChange({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) {
    setEmail(value);
  }

  //   npm install eslint-plugin-jsdoc

  return (
    <form className={styles.container}>
      <span>Updates right in you inbox</span>
      <div className={styles.formControl}>
        <input
          placeholder="Enter your email address..."
          value={email}
          onChange={handleEmailChange}
        />
        <button type="submit">Send</button>
      </div>
    </form>
  );
}
