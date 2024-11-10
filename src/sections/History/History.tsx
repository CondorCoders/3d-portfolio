import { Section } from "../../components/Section/Section";
import { Card } from "../../components/Card/Card";
import { Animations } from "../../contexts/ModelContext.types";
import { TechLabel } from "../../components/TechLabel/TechLabel";
import styles from "./History.module.css";

export const History = () => {
  return (
    <Section
      id="history"
      heading="History"
      prefix="Work Experience"
      animation={Animations.THINKING}
    >
      <Card
        label="2021 - Present"
        heading="Frontend Developer ⋅ Australian Broadcasting Corporaction (ABC)"
        link="https://abc.net.au/news"
      >
        <p>
          Develop components and create features for live content, including
          blogs and major news events such as the 2022 Australian Federal
          Elections. I work closely with cross-functional teams—developers,
          designers, and product managers—to ensure accessibility best practices
          and to implement A/B testing strategies. Recently, I was also involved
          in a complete site redesign.
        </p>
        <div className={styles.techsWrapper}>
          <TechLabel technology="Typescript" />
          <TechLabel technology="CSS" />
          <TechLabel technology="Nextjs" />
          <TechLabel technology="Storybook" />
          <TechLabel technology="GraphQL" />
          <TechLabel technology="React" />
          <TechLabel technology="Jest" />
          <TechLabel technology="Figma" />
        </div>
      </Card>
      <Card
        label="2018 - 2021"
        heading="Fullstack Developer ⋅ National Transport Insurance (NTI)"
        link="https://insurance-sdi.nti.com.au/#/quote/get-quote"
      >
        <p>
          Developed and maintained internal software like CRMs and insurance
          systems. Built external platforms for brokers and customers like quote
          generators and claim lodgements. Hosted a ‘Design Sprints’ by Google
          Venture.
        </p>
        <div className={styles.techsWrapper}>
          <TechLabel technology="Java" />
          <TechLabel technology="Spring" />
          <TechLabel technology="Angular" />
          <TechLabel technology="Jest" />
          <TechLabel technology="Figma" />
          <TechLabel technology="MySQL" />
          <TechLabel technology="Typescript" />
          <TechLabel technology="CSS" />
        </div>
      </Card>
      <Card
        label="Jun - Nov 2018"
        heading="Frontend Developer ⋅ Flamingtex"
        link="https://creator.me/"
      >
        <p>
          Developed online graphic design solutions such as creator.me and
          addtext.com.
        </p>
        <div className={styles.techsWrapper}>
          <TechLabel technology="JavaScript" />
          <TechLabel technology="CSS" />
        </div>
      </Card>
    </Section>
  );
};
