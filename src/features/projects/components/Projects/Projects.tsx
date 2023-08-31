import React from "react";

import { TitleLine } from "@/components/UI/TitleLine";
import { projets } from "../../constants/projects";
import { Project } from "@/features/projects/components/Project/Project";

import classes from "./Projects.module.scss";

export function Projects() {
  return (
    <div className={classes.wrapper}>
      <TitleLine text={"Projets"} />
      <div className={classes.projects}>
        {projets.map(props => (
          <Project key={props.id} {...props} />
        ))}
      </div>
    </div>
  );
}
