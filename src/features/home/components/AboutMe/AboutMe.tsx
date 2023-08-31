import React, { forwardRef } from "react";
import Image from "next/image";

import { TitleLine } from "@/components/UI/TitleLine/TitleLine";

import mlImg from "src/assets/img/ml.jpg";

import classes from "./AboutMe.module.scss";

// eslint-disable-next-line react/display-name
export const AboutMe = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className={classes.wrapper} ref={ref}>
      <TitleLine text={"Qui suis-je?"} />
      <div className={classes.content}>
        <div className={classes.img}>
          <Image src={mlImg} alt={"Moi"} className={classes.img_img} />
        </div>
        <div className={classes.text_wrapper}>
          <div className={classes.text}>
            Je m’appelle Michel et je suis un développeur full stack basé à
            Toulouse.
          </div>
          <div className={classes.text}>
            Après avoir décroché ma licence en langues étrangères, j’ai décidé
            de me réorienter et me lancer dans le développement.
          </div>
          <div className={classes.text}>
            En tant qu’autodidacte, j’ai pour objectif de m’apprendre et de
            m’améliorer jour après jour en intégrant une nouvelle technologie à
            chaque nouveau projet.
          </div>
          <div className={classes.text}>
            Rigoureux, passionné, curieux et efficace dans mon travail, je sais
            m’adapter afin de créer des sites rapides, responsives et sécurisés.
          </div>
          {/* <div className={classes.text}>
								Je peux intervenir dans des projets qui nécessitent de :
								<div style={{ marginLeft: '2rem', marginTop: '0' }}>
									- intégrer une maquette
									<br />- créer un site web responsive (blog, site
									vitrine)
									<br />- créer un site web dynamique (API, base de
									données)
								</div>
							</div> */}
          <div className={classes.text}>
            N’hésitez pas à me contacter, je ferai de mon mieux pour vous
            répondre le plus rapidement possible !
          </div>
        </div>
      </div>
    </div>
  );
});
