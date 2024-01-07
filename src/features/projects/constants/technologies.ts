import reactIcon from "src/assets/icons/technologies/react.svg";
import reduxIcon from "src/assets/icons/technologies/redux.svg";
import typescriptIcon from "src/assets/icons/technologies/typescript.svg";
import javascriptIcon from "src/assets/icons/technologies/javascript.svg";
import sassIcon from "src/assets/icons/technologies/sass.svg";
import tailwindCssIcon from "src/assets/icons/technologies/tailwindcss.svg";
import wordpressIcon from "src/assets/icons/technologies/wordpress.svg";
import googleCloudIcon from "src/assets/icons/technologies/googlecloud.svg";
import firebaseIcon from "src/assets/icons/technologies/firebase.svg";
import nodejsIcon from "src/assets/icons/technologies/nodejs.svg";
import strapiIcon from "src/assets/icons/technologies/strapi.svg";
import expressIcon from "src/assets/icons/technologies/express.png";
import mongodbIcon from "src/assets/icons/technologies/mongodb.svg";
import stripeIcon from "src/assets/icons/technologies/stripe.png";
import googleAnalyticsIcon from "src/assets/icons/technologies/ga.svg";
import zustandIcon from "src/assets/icons/technologies/zustand.png";
import nextJsIcon from "src/assets/icons/technologies/nextjs.svg";
import jestIcon from "src/assets/icons/technologies/jest.png";
import cypressIcon from "src/assets/icons/technologies/cypress.jpg";
import gitIcon from "src/assets/icons/technologies/git.svg";
import gitHubIcon from "src/assets/icons/technologies/github.svg";
import reactTestingLibraryIcon from "src/assets/icons/technologies/react-testing-library.png";
import viteIcon from "src/assets/icons/technologies/vite.svg";

export const technologies = [
  { name: "Javascript", icon: javascriptIcon },
  {
    name: "Typescript",
    icon: typescriptIcon
  },
  {
    name: "React",
    icon: reactIcon
  },
  {
    name: "NextJs",
    icon: nextJsIcon
  },
  {
    name: "Redux",
    icon: reduxIcon
  },
  {
    name: "Zustand",
    icon: zustandIcon
  },
  {
    name: "Sass",
    icon: sassIcon
  },
  {
    name: "Tailwind CSS",
    icon: tailwindCssIcon
  },
  {
    name: "NodeJs",
    icon: nodejsIcon
  },
  {
    name: "ExpressJs",
    icon: expressIcon
  },
  {
    name: "MongoDB",
    icon: mongodbIcon
  },
  {
    name: "Jest",
    icon: jestIcon
  },
  {
    name: "Cypress",
    icon: cypressIcon
  },
  {
    name: "React Testing Library",
    icon: reactTestingLibraryIcon
  },
  {
    name: "Stripe",
    icon: stripeIcon
  },
  {
    name: "Google Cloud",
    icon: googleCloudIcon
  },
  {
    name: "Firebase",
    icon: firebaseIcon
  },
  {
    name: "Strapi",
    icon: strapiIcon
  },
  {
    name: "Google analytics",
    icon: googleAnalyticsIcon
  },
  {
    name: "Wordpress",
    icon: wordpressIcon
  },
  { name: "git", icon: gitIcon },
  { name: "GitHub", icon: gitHubIcon },
  { name: "Vite", icon: viteIcon }
] as const;
