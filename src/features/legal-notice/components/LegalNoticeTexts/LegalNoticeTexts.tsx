import React from 'react';

import styles from './LegalNoticeTexts.module.scss';

type Props = {
  text: string;
};

export function LegalNoticeTitle({ text }: Props) {
  return <div className={styles.title_wrapper}>{text}</div>;
}

export function LegalNoticeSection({ text }: Props) {
  return <div className={styles.section_wrapper}>{text}</div>;
}

export function LegalNoticeText({ text }: Props) {
  return <div className={styles.text_wrapper}>{text}</div>;
}
