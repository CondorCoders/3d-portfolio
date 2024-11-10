import { createContext, useState } from "react";
import { Animations } from "./ModelContext.types";

type SkinType = "dev" | "creator";
interface ModelContextType {
  activeAnimation: Animations;
  currentSection: string;
  skin: SkinType;
  setActiveAnimation: (animation: Animations) => void;
  setCurrentSection: (section: string) => void;
  setSkin: (skin: SkinType) => void;
}

const defaultValue = {
  activeAnimation: Animations.STANDING,
  currentSection: "profile",
  skin: "dev" as SkinType,
  setActiveAnimation: () => null,
  setCurrentSection: () => null,
  setSkin: () => null,
};

export const ModelContext = createContext<ModelContextType>(defaultValue);

export const ModelProvider = ({ children }: React.PropsWithChildren) => {
  const [activeAnimation, setActiveAnimation] = useState<Animations>(
    defaultValue.activeAnimation
  );
  const [currentSection, setCurrentSection] = useState<string>(
    defaultValue.currentSection
  );
  const [skin, setSkin] = useState<SkinType>(defaultValue.skin);

  return (
    <ModelContext.Provider
      value={{
        activeAnimation,
        setActiveAnimation,
        currentSection,
        setCurrentSection,
        skin,
        setSkin,
      }}
    >
      {children}
    </ModelContext.Provider>
  );
};
