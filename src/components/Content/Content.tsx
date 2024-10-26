import styles from "./Content.module.css";

export const Content = () => {
  return (
    <div className="content-container">
      <section className={styles.section}>
        <h2>About</h2>
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
    </div>
  );
};
