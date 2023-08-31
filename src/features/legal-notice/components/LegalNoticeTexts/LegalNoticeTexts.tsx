import React from "react";

import classes from "./LegalNoticeTexts.module.scss";

type LegalNoticeTextsProps = {
  text: string;
};

export function LegalNoticeTitle({ text }: LegalNoticeTextsProps) {
  return <div className={classes.title_wrapper}>{text}</div>;
}

export function LegalNoticeSection({ text }: LegalNoticeTextsProps) {
  return <div className={classes.section_wrapper}>{text}</div>;
}

export function LegalNoticeText({ text }: LegalNoticeTextsProps) {
  return <div className={classes.text_wrapper}>{text}</div>;
}
