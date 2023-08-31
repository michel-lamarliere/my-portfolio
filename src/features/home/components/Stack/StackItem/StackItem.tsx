import React from "react";
import Image, { StaticImageData } from "next/image";

import classes from "./StackItem.module.scss";

type StackItemProps = {
  text: string;
  img: string | StaticImageData;
};

export function StackItem({ text, img }: StackItemProps) {
  return (
    <div className={classes.wrapper}>
      {typeof img === "string" ? (
        <img src={img} alt={text} className={classes.img} />
      ) : (
        <Image src={img} alt={text} className={classes.img} />
      )}
      <div className={classes.text}>{text}</div>
    </div>
  );
}
