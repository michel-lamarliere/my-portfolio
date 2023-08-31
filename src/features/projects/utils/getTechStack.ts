import { ProjectType } from "@/features/projects/types";
import { technologies } from "@/features/projects/constants/technologies";

export function getTechStack(
  technologyName: ProjectType["stackNames"][number][]
) {
  return technologies.filter(item => technologyName.includes(item.name));
}
