import EnolaImg from "@/assets/img/enola.png";
import MichelImg from "@/assets/img/michel.png";
import BetfetcherImg from "@/assets/img/betfetcher.png";

import { ProjectType } from "@/features/projects/types";

export const projects: ProjectType[] = [
  {
    id: 0,
    title: "Betfetcher",
    img: BetfetcherImg,
    stackNames: [
      "React",
      "Sass",
      "Typescript",
      "ExpressJs",
      "MongoDB",
      "Stripe"
    ],
    websiteUrl: "https://betfetcher.com",
    githubUrl: null,
    isPersonalProject: true
  },
  {
    id: 1,
    title: "Enola Louge",
    img: EnolaImg,
    stackNames: [
      "React",
      "ExpressJs",
      "NodeJs",
      "Typescript",
      "Strapi",
      "Sass"
    ],
    websiteUrl: "https://enolalouge.com",
    githubUrl: 'https://github.com/michel-lamarliere/enola-portfolio',
    isPersonalProject: false
  },
  {
    id: 2,
    title: "Mon Portfolio",
    img: MichelImg,
    stackNames: ["NextJs", "Redux", "Typescript", "Sass"],
    websiteUrl: null,
    githubUrl: "https://github.com/michel-lamarliere/my-portfolio",
    isPersonalProject: true
  }
];
