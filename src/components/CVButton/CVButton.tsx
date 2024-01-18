"use client";

import styles from "./CVButton.module.scss";

export function CVButton() {
  return (
    <a
      href="/cv-michel-lamarliere.pdf"
      download={ "cv-michel-lamarlière-développeur.pdf" }
      className={ styles.wrapper }
    >
      CV
    </a>
  );
}
