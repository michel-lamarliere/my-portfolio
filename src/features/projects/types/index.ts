import { StaticImageData } from "next/image";
import { technologies } from "@/features/projects/constants/technologies";

export type ProjectType = {
  id: string;
  title: string;
  img: StaticImageData;
  stackNames: Technologies[number]["name"][];
  websiteUrl: string | null;
  githubUrl: string | null;
  isPersonalProject: boolean;
};

export type Technologies = typeof technologies;
