"use client";

import classes from "./CVButton.module.scss";

export function CVButton() {
  return (
    <a
      href="/cv-michel-lamarliere.pdf"
      download={"cv-michel-lamarlière-développeur.pdf"}
      className={classes.wrapper}
    >
      CV
    </a>
  );
}
