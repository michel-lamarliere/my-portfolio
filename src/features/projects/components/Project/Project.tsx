import React from 'react';
import Image from 'next/image';

import { getTechStack } from '@/features/projects/utils/getTechStack';
import { ProjectType } from '@/features/projects/types';

import gitHubIcon from '@/assets/icons/technologies/github.svg';
import newTabIcon from '@/assets/icons/open-tab.svg';

import styles from './Project.module.scss';

export function Project({
  id,
  title,
  isPersonalProject,
  stackNames,
  img,
  websiteUrl,
  githubUrl
}: ProjectType) {
  const stack = getTechStack(stackNames);

  const description = isPersonalProject
    ? 'Projet Personnel'
    : 'Projet Professionnel';

  return (
    <div className={styles.wrapper}>
      <div className={styles.mainImg}>
        <Image className={styles.mainImg} src={img} alt={title} />
      </div>
      <div className={styles.footer}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
        <div className={styles.stack}>
          {stack.map(({ name, icon }) => (
            <Image
              key={name}
              className={styles.stack_item}
              src={icon}
              alt={name}
              title={name}
            />
          ))}
        </div>
        <div className={styles.links}>
          {githubUrl ? (
            <a href={githubUrl} target="_blank" rel="noreferrer">
              <Image src={gitHubIcon} alt={'GitHub'} />
            </a>
          ) : (
            <div className={styles.empty}></div>
          )}
          {websiteUrl ? (
            <a href={websiteUrl} target="_blank" rel="noreferrer">
              <Image src={newTabIcon} alt={'GitHub'} />
            </a>
          ) : (
            <div className={styles.empty}></div>
          )}
        </div>
      </div>
    </div>
  );
}
