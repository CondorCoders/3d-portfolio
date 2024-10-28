import styles from "./Content.module.css";

export const Content = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <span className={styles.decor}>Frontend Developer</span>
          <h2 className={styles.heading}>Sofia</h2>
          <p className={styles.description}>
            I create web experiences that bring design and engineering together
            to craft functional and engaging software. My passion for web
            development has led me to work across diverse fields, from startups
            and design-centric web applications to finance. Currently, I’m
            channeling my creativity into shaping the online reading experience
            at ABC News.
          </p>
        </div>
      </section>
      <section className={styles.section}>
        <h2>History</h2>
      </section>
      <section className={styles.section}>
        <h2>Highlights</h2>
      </section>
      <section className={styles.section}>
        <h2>Contacts</h2>
      </section>
    </>
  );
};
