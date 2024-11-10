import { useContext, useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import { Section } from "../../components/Section/Section";
import { ModelContext } from "../../contexts/ModelContext";
import { Animations } from "../../contexts/ModelContext.types";
import styles from "./CondorCoders.module.css";

export const CondorCoders = () => {
  const { setSkin, skin } = useContext(ModelContext);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    if (skin === "creator") {
      document.body.setAttribute("data-theme", "creator");
    } else {
      document.body.removeAttribute("data-theme");
    }
  }, [skin]);

  return (
    <div className={styles.wrapper}>
      <Section
        id="condorcoders"
        heading="Condor Coders"
        prefix="Online Community"
        animation={Animations.HEADNOD}
      >
        <div className={styles.links}>
          <Card
            label="Twitch"
            heading="Live Coding"
            link="https://www.twitch.tv/condorcoders"
            className={styles.card}
          >
            <p>
              See me code live every Saturday. We learn while making fun web
              projects in a colaborative way.{" "}
            </p>
          </Card>
          <Card
            label="Discord"
            heading="Community Chat"
            link="https://discord.gg/PaED8uW4"
            className={styles.card}
          >
            <p>
              Join us and share your projects with a community that supports
              you.
            </p>
          </Card>
          <Card
            label="Instagram"
            heading="Resources and Livestyle"
            link="https://www.instagram.com/condorcoders"
            className={styles.card}
          >
            <p>
              See me code live every Saturday. We learn while making fun web
              projects in a colaborative way.{" "}
            </p>
          </Card>
        </div>
      </Section>
      <div className={styles.skinTogger}>
        {!unlocked ? (
          <button
            className={styles.unlockButton}
            onClick={() => {
              setUnlocked(true);
              setSkin("creator");
            }}
          >
            Unlock Skin
          </button>
        ) : (
          <div className={styles.skinMenu}>
            <button className={styles.skin} onClick={() => setSkin("dev")}>
              <span>Dev</span>
            </button>
            <button className={styles.skin} onClick={() => setSkin("creator")}>
              <span>Creator</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
