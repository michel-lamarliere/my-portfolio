import React from "react";
import Image from "next/image";

import { MLLogo } from "@/components/UI/SVGLogos";

import arrow from "@/assets/icons/arrow.svg";

import classes from "./Hero.module.scss";

type HeroProps = {
  arrowHandler: () => void;
};

export const Hero = ({ arrowHandler }: HeroProps) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <MLLogo className={classes.logo} />
        <div className={classes.name}>Michel Lamarlière</div>
        <div className={classes.title}>DÉVELOPPEUR FULL STACK</div>
        <button className={classes.slideButton} onClick={arrowHandler}>
          <Image className={classes.slideButton_img} src={arrow} alt="Flèche" />
        </button>
      </div>
    </div>
  );
};
