import { links, projectsData } from "./data";

export type SectionName = typeof links[number]["name"];

export type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

export type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export type SectionHeadingProps = {
  children: React.ReactNode;
};

export type ProjectsProps = typeof projectsData[number];

export type Theme = "light" | "dark";