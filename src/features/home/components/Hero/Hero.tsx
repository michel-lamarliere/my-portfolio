import React from "react";
import Image from "next/image";

import { MLLogo } from "@/features/home/components/Hero/MLLogo";

import arrow from "@/assets/icons/arrow.svg";

import styles from "./Hero.module.scss";

type Props = {
  arrowHandler: () => void;
};

export const Hero = ({ arrowHandler }: Props) => {
  return (
    <div className={ styles.wrapper }>
      <div className={ styles.container }>
        <MLLogo className={ styles.logo }/>
        <div className={ styles.name }>Michel Lamarlière</div>
        <div className={ styles.title }>DÉVELOPPEUR FULL STACK</div>
        <button className={ styles.slideButton } onClick={ arrowHandler }>
          <Image className={ styles.slideButton_img } src={ arrow } alt="Flèche"/>
        </button>
      </div>
    </div>
  );
};
