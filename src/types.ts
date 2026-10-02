import type { IconType } from "react-icons";

export interface Project {
  title: string;
  description: string;
  githubLink?: string;
  /** File name of a paper served through the presigned-URL lambda. */
  paperName?: string;
  icon: IconType;
  iconColor: string;
}

export interface Experience {
  name: string;
  title: string;
  time: string;
  location: string;
  icon: IconType;
  iconGradient: { from: string; to: string };
}
