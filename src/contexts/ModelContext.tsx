import { createContext, useState } from "react";
import { Animations } from "./ModelContext.types";

interface ModelContextType {
  activeAnimation: Animations;
  setActiveAnimation: (animation: Animations) => void;
}

const defaultValue = {
  activeAnimation: Animations.STANDING,
  setActiveAnimation: () => null,
};

export const ModelContext = createContext<ModelContextType>(defaultValue);

export const ModelProvider = ({ children }: React.PropsWithChildren) => {
  const [activeAnimation, setActiveAnimation] = useState<Animations>(
    defaultValue.activeAnimation
  );

  return (
    <ModelContext.Provider value={{ activeAnimation, setActiveAnimation }}>
      {children}
    </ModelContext.Provider>
  );
};
