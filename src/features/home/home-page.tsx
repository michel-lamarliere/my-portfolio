"use client";

import React, { useRef } from "react";

import { Hero } from "@/features/home/components/Hero/Hero";
import { Stack } from "@/features/home/components/Stack/Stack";
import { AboutMe } from "@/features/home/components/AboutMe/AboutMe";
import { Socials } from "@/features/home/components/Socials/Socials";
import { ContactDetails } from "@/features/home/components/ContactDetails/ContactDetails";
import { Form } from "@/features/contact/components/ContactForm/ContactForm";
import { Projects } from "@/features/projects/components/Projects/Projects";
import { TitleLine } from "@/components/UI/TitleLine";

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
      <Stack />
      <Projects />
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
