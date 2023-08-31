"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import githubIcon from "@/assets/icons/github.svg";
import linkedinIcon from "@/assets/icons/linkedin.svg";
import maltIcon from "@/assets/icons/malt.svg";

import classes from "./Footer.module.scss";

export function Footer() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.links}>
          <a
            href="https://www.linkedin.com/in/michel-lamarliere/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={linkedinIcon}
              alt={"Linkedin"}
              className={classes.links_logo}
            />
          </a>
          <a
            href="https://www.malt.fr/dashboard/freelancer"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={maltIcon} alt="Malt" className={classes.links_logo} />
          </a>
          <a
            href="https://github.com/michel-lamarliere"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={githubIcon}
              alt="GitHub"
              className={classes.links_logo}
            />
          </a>
          <Link href="/legal-notice" className={classes.links_text}>
            Mentions Légales
          </Link>
        </div>
        <div className={classes.shoutOut}>
          Par
          <span className={classes.shoutOut_text}>&nbsp;Michel Lamarlière</span>
        </div>
        <div className={classes.shoutOut}>
          <div>
            Logo et Web Design par
            <a
              href="https://www.enolalouge.com"
              target="_blank"
              rel="noreferrer"
              className={classes.shoutOut_link}
            >
              &nbsp;Enola Louge
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
