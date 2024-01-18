import React from "react";

import styles from "./TitleLine.module.scss";

type Props = {
  text: string;
  className?: string;
};

export function TitleLine({ text, className }: Props) {
  return (
    <div className={ className }>
      <div className={ styles.title }>{ text }</div>
      <span className={ styles.line }/>
    </div>
  );
}
