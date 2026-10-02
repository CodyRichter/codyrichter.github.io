import { FaAmazon, FaBookOpen, FaSearch } from "react-icons/fa";
import { MdComputer, MdEngineering, MdSecurity } from "react-icons/md";

import { AffirmIcon } from "@/sections/timeline/AffirmIcon";
import type { Experience } from "@/types";

const amazon = {
  icon: FaAmazon,
  iconGradient: { from: "yellow", to: "orange" },
};
const mathworks = {
  icon: MdEngineering,
  iconGradient: { from: "yellow", to: "blue" },
};
const umass = { iconGradient: { from: "darkred", to: "red" } };

export const experiences: Experience[] = [
  {
    name: "Affirm",
    title: "Software Development Engineer II",
    time: "Winter 2024 - Present",
    location: "Fully Remote & Seattle, WA",
    icon: AffirmIcon,
    iconGradient: { from: "white", to: "lightblue" },
  },
  {
    ...amazon,
    name: "Amazon",
    title: "Software Development Engineer",
    time: "Summer 2023 - Winter 2024",
    location: "Seattle, WA",
  },
  {
    ...umass,
    name: "Rescue Lab - UMass Amherst",
    title: "Graduate Research Assistant",
    time: "Fall 2021 - Spring 2023",
    location: "Amherst, MA",
    icon: FaSearch,
  },
  {
    ...amazon,
    name: "Amazon",
    title: "Software Development Engineer Intern",
    time: "Summer 2022",
    location: "Seattle, WA",
  },
  {
    ...mathworks,
    name: "Mathworks",
    title: "Software Engineering Intern",
    time: "Summer 2021",
    location: "Fully Remote",
  },
  {
    ...umass,
    name: "Rescue Lab - UMass Amherst",
    title: "Undergraduate Research Assistant",
    time: "Winter 2020 - Spring 2021",
    location: "Fully Remote",
    icon: FaSearch,
  },
  {
    ...umass,
    name: "College of Information and Computer Science - UMass Amherst",
    title: "Undergraduate Course Assistant",
    time: "Fall 2019 - Winter 2020",
    location: "Amherst, MA",
    icon: FaBookOpen,
  },
  {
    ...mathworks,
    name: "Mathworks",
    title: "Software Engineering Intern",
    time: "Summer 2020",
    location: "Fully Remote",
  },
  {
    name: "ISO New England",
    title: "Cybersecurity Intern",
    time: "Summer 2019",
    location: "Holyoke, MA",
    icon: MdSecurity,
    iconGradient: { from: "indigo", to: "gray" },
  },
  {
    name: "Altek Electronics",
    title: "IT Intern",
    time: "Summer 2018",
    location: "Torrington, CT",
    icon: MdComputer,
    iconGradient: { from: "orange", to: "teal" },
  },
];
