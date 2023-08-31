"use client";

import React from "react";
import Link from "next/link";

import classes from "./not-found.module.scss";

export default function Error404Page() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.text}>
        <div className={classes.text_error}>Erreur</div>
        <div className={classes.text_not_found}>Page introuvable !</div>
      </div>
      <div className={classes.links}>
        <Link href="/home" className={classes.links_link}>
          Accueil
        </Link>
        <span>|</span>
        <Link href="/projects" className={classes.links_link}>
          Projets
        </Link>
      </div>
    </div>
  );
}
