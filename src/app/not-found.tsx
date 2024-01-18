'use client';

import React from 'react';
import Link from 'next/link';

import styles from './not-found.module.scss';

export default function Error404Page() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        <div className={styles.text_error}>Erreur</div>
        <div className={styles.text_not_found}>Page introuvable !</div>
      </div>
      <div className={styles.links}>
        <Link href="/" className={styles.links_link}>
          Accueil
        </Link>
      </div>
    </div>
  );
}
