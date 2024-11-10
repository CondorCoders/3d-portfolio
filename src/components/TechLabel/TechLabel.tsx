import Angular from "../Icons/Angular";
import CSS from "../Icons/CSS";
import Figma from "../Icons/Figma";
import Gemini from "../Icons/Gemini";
import GraphQL from "../Icons/GraphQL";
import Java from "../Icons/Java";
import JavaScript from "../Icons/Javascript";
import Jest from "../Icons/Jest";
import MySQL from "../Icons/MySQL";
import Nextjs from "../Icons/Nextjs";
import React from "../Icons/React";
import Spring from "../Icons/Spring";
import Storybook from "../Icons/Storybook";
import TailwindCSS from "../Icons/TailwindCSS";
import TypeScript from "../Icons/Typescript";
import styles from "./TechLabel.module.css";

type TechType =
  | "Typescript"
  | "CSS"
  | "Nextjs"
  | "Storybook"
  | "GraphQL"
  | "React"
  | "Jest"
  | "Figma"
  | "Java"
  | "Spring"
  | "Angular"
  | "MySQL"
  | "JavaScript"
  | "Gemini"
  | "TailwindCSS";

interface TechLabelProps {
  technology: TechType;
  variant?: "stack" | "inline";
}

const TechLogo = {
  Typescript: TypeScript,
  CSS: CSS,
  Nextjs: Nextjs,
  Storybook: Storybook,
  GraphQL: GraphQL,
  React: React,
  Jest: Jest,
  Figma: Figma,
  Java: Java,
  Spring: Spring,
  Angular: Angular,
  MySQL: MySQL,
  JavaScript: JavaScript,
  Gemini: Gemini,
  TailwindCSS: TailwindCSS,
};

export const TechLabel = ({
  technology,
  variant = "inline",
}: TechLabelProps) => {
  const TechnologyIcon = TechLogo[technology];
  return (
    <div
      className={`${styles.container} ${
        variant === "stack" ? styles.stack : styles.inline
      }`}
    >
      <TechnologyIcon
        className={`${styles.icon} ${
          technology === "Java" ||
          technology === "MySQL" ||
          technology === "Gemini"
            ? styles.whiteIcon
            : ""
        }`}
      />
      <span className={styles.label}>{technology}</span>
    </div>
  );
};
