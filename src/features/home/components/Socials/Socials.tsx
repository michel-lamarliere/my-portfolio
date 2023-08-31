import React from "react";
import Image from "next/image";
import { TitleLine } from "@/components/UI/TitleLine/TitleLine";

import gitHubIcon from "@/assets/icons/github.svg";
import linkedinIcon from "@/assets/icons/linkedin.svg";
import maltIcon from "@/assets/icons/malt.svg";

import classes from "src/features/home/components/Socials/Socials.module.scss";

export function Socials() {
  return (
    <div className={classes.wrapper}>
      <TitleLine text={"Me suivre"} />
      <div className={classes.socials}>
        <a
          href="https://www.linkedin.com/in/michel-lamarliere/"
          target="_blank"
          rel="noreferrer"
          className={classes.socials__link}
        >
          <Image
            src={linkedinIcon}
            alt={"GitHub"}
            className={classes.socials__link__logo}
          />
        </a>
        <a
          href="https://www.malt.fr/dashboard/freelancer"
          target="_blank"
          rel="noreferrer"
          className={classes.socials__link}
        >
          <Image
            src={maltIcon}
            alt={"GitHub"}
            className={classes.socials__link__logo}
          />
        </a>
        <a
          href="https://github.com/michel-lamarliere"
          target="_blank"
          rel="noreferrer"
          className={classes.socials__link}
        >
          <Image
            src={gitHubIcon}
            alt={"GitHub"}
            className={classes.socials__link__logo}
          />
        </a>
      </div>
    </div>
  );
}
