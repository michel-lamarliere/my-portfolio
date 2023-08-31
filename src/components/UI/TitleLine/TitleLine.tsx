import React from "react";

import classes from "./TitleLine.module.scss";

type TitleLineProps = {
  text: string;
  className?: string;
};

export function TitleLine({ text, className }: TitleLineProps) {
  return (
    <div className={className}>
      <div className={classes.title}>{text}</div>
      <span className={classes.line} />
    </div>
  );
}
