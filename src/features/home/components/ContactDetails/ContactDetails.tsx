import React from "react";

import { TitleLine } from "@/components/UI/TitleLine";

import classes from "src/features/home/components/ContactDetails/ContactDetails.module.scss";

export function ContactDetails() {
  return (
    <div className={classes.wrapper}>
      <TitleLine text="Mes coordonnées" />
      <div className={classes.details}>
        <div className={classes.text}>Michel Lamarlière</div>
        <div className={classes.text}>contact@michel-lamarliere.com</div>
        <div className={classes.text}>Toulouse, France</div>
      </div>
    </div>
  );
}
