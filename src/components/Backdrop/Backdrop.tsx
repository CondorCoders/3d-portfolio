import { useContext } from "react";
import { Scene } from "../Scene/Scene";
import styles from "./Backdrop.module.css";
import { ModelContext } from "../../contexts/ModelContext";

export const Backdrop = () => {
  const { skin } = useContext(ModelContext);

  return (
    <div className={styles.backdrop}>
      <img
        src="/images/Backdrop.webp"
        alt="TechLayer"
        className={`${styles.backdropImage} ${
          skin === "dev" ? styles.visible : ""
        }`}
      />
      <img
        src="/images/Room.webp"
        alt="TechLayer"
        className={`${styles.backdropImage} ${
          skin === "creator" ? styles.visible : ""
        }`}
      />

      <Scene />
    </div>
  );
};
