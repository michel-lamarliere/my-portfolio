import React from 'react';
import Image, { StaticImageData } from 'next/image';

import styles from './StackItem.module.scss';

type Props = {
  text: string;
  img: string | StaticImageData;
};

export function StackItem({ text, img }: Props) {
  return (
    <div className={styles.wrapper}>
      {typeof img === 'string' ? (
        <img src={img} alt={text} className={styles.img} />
      ) : (
        <Image src={img} alt={text} className={styles.img} />
      )}
      <div className={styles.text}>{text}</div>
    </div>
  );
}
