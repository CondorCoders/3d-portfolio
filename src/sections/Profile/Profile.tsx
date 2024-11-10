import { Section } from "../../components/Section/Section";
import { TechLabel } from "../../components/TechLabel/TechLabel";
import { Animations } from "../../contexts/ModelContext.types";
import styles from "./Profile.module.css";

export const Profile = () => {
  return (
    <Section
      id="profile"
      heading="Sofia"
      prefix="Frontend Developer"
      animation={Animations.STANDING}
    >
      <p className={styles.wrapper}>
        I create web experiences that bring design and engineering together to
        craft functional and engaging software. My passion for web development
        has led me to work across diverse fields, from startups and
        design-centric web applications to finance. Currently, I’m channeling my
        creativity into shaping the online reading experience at ABC News.
      </p>
      <h3 className={styles.subheading}>Current Build</h3>

      <div className={styles.techWrapper}>
        <TechLabel technology="Typescript" variant="stack" />
        <TechLabel technology="CSS" variant="stack" />
        <TechLabel technology="Nextjs" variant="stack" />
        <TechLabel technology="Storybook" variant="stack" />
        <TechLabel technology="GraphQL" variant="stack" />
        <TechLabel technology="React" variant="stack" />
        <TechLabel technology="Jest" variant="stack" />
      </div>
    </Section>
  );
};
