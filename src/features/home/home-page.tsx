"use client";

import React, { useRef } from "react";

import { Hero } from "@/features/home/components/Hero/Hero";
import { AboutMe } from "@/features/home/components/AboutMe/AboutMe";
import { Socials } from "@/features/home/components/Socials/Socials";
import { ContactDetails } from "@/features/home/components/ContactDetails/ContactDetails";
import { Form } from "@/features/contact/components/ContactForm/ContactForm";
import { TitleLine } from "@/components/UI/TitleLine/TitleLine";
import { technologies } from "@/features/projects/constants/technologies";
import { StackItem } from "@/features/home/components/StackItem/StackItem";
import { projects } from "@/features/projects/constants/projects";
import { Project } from "@/features/projects/components/Project/Project";

import classes from "./home-page.module.scss";

export function HomePage() {
  const projectsRef = useRef<HTMLDivElement>(null);

  const arrowHandler = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <div className={classes.wrapper}>
      <Hero arrowHandler={arrowHandler} />
      <AboutMe ref={projectsRef} />
      <div className={classes.stackWrapper}>
        <TitleLine text={"Mes compétences"} />
        <div className={classes.stack}>
          {technologies.map(({ name, icon }, index) => (
            <StackItem key={`${name}-${index}`} img={icon} text={name} />
          ))}
        </div>
      </div>
      <div className={classes.projectsWrapper}>
        <TitleLine text={"Projets"} />
        <div className={classes.projects}>
          {projects.map(props => (
            <Project key={props.id} {...props} />
          ))}
        </div>
      </div>
      <div className={classes.contactWrapper}>
        <TitleLine text="Contact" className={classes.title} />
        <div className={classes.contact}>
          <div className={classes.contact_text}>
            <Socials />
            <ContactDetails />
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
}
