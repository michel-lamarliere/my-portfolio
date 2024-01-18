import React from 'react';

import { TitleLine } from '@/components/TitleLine';

import styles from './ContactDetails.module.scss';

export function ContactDetails() {
  return (
    <div className={styles.wrapper}>
      <TitleLine text="Mes coordonnées" />
      <div className={styles.details}>
        <div className={styles.text}>Michel Lamarlière</div>
        <a
          href={'mailto:contact@michel-lamarliere.com'}
          className={styles.text}
        >
          contact@michel-lamarliere.com
        </a>
        <a href={'tel:+330673318675'} className={styles.text}>
          +33 06 73 31 86 75
        </a>
        <div className={styles.text}>Toulouse, France</div>
      </div>
    </div>
  );
}
