import React from "react";
import Image from "next/image";

import { getTechStack } from "@/features/projects/utils/getTechStack";
import { ProjectType } from "@/features/projects/types";

import gitHubIcon from "@/assets/icons/github.svg";
import newTabIcon from "@/assets/icons/open-tab.svg";

import classes from "./Project.module.scss";

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
    ? "Projet Personnel"
    : "Projet Professionnel";

  return (
    <div className={classes.wrapper}>
      <div className={classes["main-img"]}>
        <Image className={classes["main-img"]} src={img} alt={title} />
      </div>
      <div className={classes.footer}>
        <div className={classes.title}>{title}</div>
        <div className={classes.description}>{description}</div>
        <div className={classes.stack}>
          {stack.map(item => (
            <Image
              key={item.name}
              className={classes.stack_item}
              src={item.icon}
              alt="logo"
            />
          ))}
        </div>
        <div className={classes.links}>
          {githubUrl ? (
            <a href={githubUrl} target="_blank" rel="noreferrer">
              <Image src={gitHubIcon} alt={"GitHub"} />
            </a>
          ) : (
            <div className={classes.empty}></div>
          )}
          {websiteUrl ? (
            <a href={websiteUrl} target="_blank" rel="noreferrer">
              <Image src={newTabIcon} alt={"GitHub"} />
            </a>
          ) : (
            <div className={classes.empty}></div>
          )}
        </div>
      </div>
    </div>
  );
}
