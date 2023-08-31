"use client";

import React from "react";

import { StackItem } from "@/features/home/components/Stack/StackItem/StackItem";
import { TitleLine } from "@/components/UI/TitleLine/TitleLine";

import sassIcon from "src/assets/icons/sass.svg";
import javascriptIcon from "src/assets/icons/javascript.svg";
import typescriptIcon from "src/assets/icons/typescript.svg";
import reactIcon from "src/assets/icons/react.svg";
import reduxIcon from "src/assets/icons/redux.svg";
import firebaseIcon from "src/assets/icons/firebase.svg";
import googleCloudIcon from "src/assets/icons/googlecloud.svg";
import gitIcon from "src/assets/icons/git.svg";
import wordpressIcon from "src/assets/icons/wordpress.svg";
import nodejsIcon from "src/assets/icons/nodejs.svg";
import expressjsIcon from "src/assets/icons/express.png";
import mongodbIcon from "src/assets/icons/mongodb.svg";
import gitHubIcon from "src/assets/icons/github.svg";

import classes from "./Stack.module.scss";

// TODO ADD NEXTJS VITE ZUSTAND TAILWINDCSS REACT QUERY HEROKU

export function Stack() {
  return (
    <div className={classes.wrapper}>
      <TitleLine text={"Mes compétences"} />
      <div className={classes.stack}>
        <StackItem img={javascriptIcon} text="JavaScript" />
        <StackItem img={typescriptIcon} text="TypeScript" />
        <StackItem img={reactIcon} text="React" />
        <StackItem img={reduxIcon} text="Redux" />
        {/*<StackItem img={htmlIcon} text="HTML" />
        <StackItem img={cssIcon} text="CSS" />*/}
        <StackItem img={sassIcon} text="Sass" />
        <StackItem img={nodejsIcon} text="NodeJS" />
        <StackItem img={expressjsIcon} text="ExpressJS" />
        <StackItem img={mongodbIcon} text="MongoDB" />
        <StackItem img={googleCloudIcon} text="Google Cl." />
        <StackItem img={firebaseIcon} text="Firebase" />
        <StackItem img={gitIcon} text="git" />
        <StackItem img={gitHubIcon} text="GitHub" />
        <StackItem img={wordpressIcon} text="Wordpress" />
        {/*<StackItem img={npmIcon} text="npm" />*/}
        {/*<StackItem img={webpackIcon} text="Webpack" />*/}
      </div>
    </div>
  );
}
