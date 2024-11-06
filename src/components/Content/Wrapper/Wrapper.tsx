import styles from "./Wrapper.module.css";

export const Wrapper = ({ children }: React.PropsWithChildren) => {
  return <div className={styles.wrapper}>{children}</div>;
};
