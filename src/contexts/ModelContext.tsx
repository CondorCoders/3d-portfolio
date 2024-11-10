import { createContext, useState } from "react";
import { Animations } from "./ModelContext.types";

interface ModelContextType {
  activeAnimation: Animations;
  currentSection: string;
  setActiveAnimation: (animation: Animations) => void;
  setCurrentSection: (section: string) => void;
}

const defaultValue = {
  activeAnimation: Animations.STANDING,
  currentSection: "profile",
  setActiveAnimation: () => null,
  setCurrentSection: () => null,
};

export const ModelContext = createContext<ModelContextType>(defaultValue);

export const ModelProvider = ({ children }: React.PropsWithChildren) => {
  const [activeAnimation, setActiveAnimation] = useState<Animations>(
    defaultValue.activeAnimation
  );
  const [currentSection, setCurrentSection] = useState<string>(
    defaultValue.currentSection
  );

  return (
    <ModelContext.Provider
      value={{
        activeAnimation,
        setActiveAnimation,
        currentSection,
        setCurrentSection,
      }}
    >
      {children}
    </ModelContext.Provider>
  );
};
