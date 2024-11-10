import { Section } from "../../components/Section/Section";
import { Card } from "../../components/Card/Card";
import { Animations } from "../../contexts/ModelContext.types";
import { TechLabel } from "../../components/TechLabel/TechLabel";
import styles from "./Highlights.module.css";

export const Highlights = () => {
  return (
    <Section
      id="highlights"
      heading="Highlights"
      prefix="Projects and Awards"
      animation={Animations.HAPPY}
    >
      <Card
        label="Project"
        heading="Rubber Ducking AI"
        link="https://rubberduckingai.condorcoders.com/"
        imgUrl="/images/RubberDuckingAI.webp"
      >
        <p>
          Developed a chat assistant for developers using Gemini AI, inspired by
          the "rubber ducking" method.
        </p>
        <div className={styles.techsWrapper}>
          <TechLabel technology="Nextjs" />
          <TechLabel technology="Gemini" />
          <TechLabel technology="TailwindCSS" />
        </div>
      </Card>
      <Card
        label="Project"
        heading="Twitch Overlay !HACK"
        link="https://twitchhackoverlay.condorcoders.com"
        imgUrl="/images/TwitchOverlay.webp"
      >
        <p>
          Created an old-style computer overlay that reacts to Twitch. When
          users type !hack, their profile photo appears inside the computer
          screen, simulating a "hack" effect. Designed for use with OBS, this
          overlay brings a fun, retro touch to live streams.
        </p>
        <div className={styles.techsWrapper}>
          <TechLabel technology="React" />
          <TechLabel technology="CSS" />
        </div>
      </Card>
      <Card
        label="Award"
        heading="FemHack 2023: Tracking the Growth of Internet Users Worldwide"
        link="https://github.com/sofigrijalva/frontend-femhack-challenge"
        imgUrl="/images/FemHack2023.webp"
      >
        <p>1st place in the Web Development Challenge.</p>
        <div className={styles.techsWrapper}>
          <TechLabel technology="React" />
          <TechLabel technology="CSS" />
        </div>
      </Card>
    </Section>
  );
};
