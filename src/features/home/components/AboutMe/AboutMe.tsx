import React, { forwardRef } from 'react';
import Image from 'next/image';

import { TitleLine } from '@/components/TitleLine/TitleLine';

import mlImg from 'src/assets/img/photo-profil.jpg';

import styles from './AboutMe.module.scss';

// eslint-disable-next-line react/display-name
export const AboutMe = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className={styles.wrapper} ref={ref}>
      <TitleLine text={'Qui suis-je?'} />
      <div className={styles.content}>
        <div className={styles.img}>
          <Image src={mlImg} alt={'Moi'} className={styles.img_img} />
        </div>
        <div className={styles.text_wrapper}>
          <div className={styles.text}>
            💻 Développeur Full-Stack Passionné | Spécialisé en Front-End 🚀
            <br />
            <br />
            🌟 Polyvalent
            <br />
            Bonjour, je suis un développeur Full-Stack spécialisé en Front-End
            passionné par l&apos;innovation et prêt à relever de nouveaux défis.
            Mes compétences s&apos;étendent de l&apos;intégration de
            fonctionnalités à la conception de produits, couvrant tout, du
            développement front-end (React) à la gestion avancée de bases de
            données.
            <br />
            <br />
            🚀 Technologies Maîtrisées
            <ul>
              <li>Général: TypeScript, JavaScript, Zod, Yup</li>
              <li>
                Front-end : React, Redux, TanStack Query, Sass, TailwindCss,
                styled-components
              </li>
              <li>Back-end : Node, Express, passport, Stripe</li>
              <li>Base de données: MongoDB, Firebase</li>
              <li>
                Workflow : Git, Github Actions, AWS, Heroku, Vercel, Slack
              </li>
              <li>Testing : Jest, Vitest, Cypress, react-testing-library</li>
              <li>CMS : Wordpress, Strapi</li>
              <li>Analytics: Google Analytics, Vercel, Plausible</li>
              <li>
                Langues : Anglais et Espagnol professionnel. Français et
                Portugais en langue maternelle.
              </li>
            </ul>
            <br />
            💡 Atouts
            <br />
            Rigoureux, passionné, curieux et efficace dans mon travail, je
            m&apos;adapte constamment pour créer des sites web rapides,
            esthétiques, responsives et sécurisés.
            <br />
            <br />
            🤝 Expérience Freelance et Co-fondateur
            <br />
            Freelance depuis 3 ans et co-fondateur d’un site d&apos;analyse
            statistiques sportives, j’ai acquis de solides compétences.
            <br />
            <br />
            🤝 Compétences Sociales
            <br />
            Autonome, ambitieux et réaliste dans la gestion de mes projets,
            j&apos;ai dirigé des projets clients en collaboration avec des
            designers et développeurs. J&apos;ai développé un excellent
            relationnel, proposant une expérience axée sur la communication,
            l’écoute, l’adaptation, la flexibilité et la qualité.
            <br />
            <br />
            🌍 Objectifs professionnels
            <br />
            Aujourd’hui, mon objectif est de développer pour une entreprise dont
            les valeurs me ressemblent, de rejoindre une équipe solidaire et
            ambitieuse, et surtout de continuer d’apprendre et m’améliorer.
          </div>
        </div>
      </div>
    </div>
  );
});
