import { Animations } from "../../contexts/ModelContext.types";
import { Card } from "../Card/Card";
import { Section } from "./Section/Section";
import { Wrapper } from "./Wrapper/Wrapper";

export const Content = () => {
  return (
    <>
      <Section
        heading="Sofia"
        prefix="Frontend Developer"
        animation={Animations.STANDING}
      >
        <Wrapper>
          <p>
            I create web experiences that bring design and engineering together
            to craft functional and engaging software. My passion for web
            development has led me to work across diverse fields, from startups
            and design-centric web applications to finance. Currently, I’m
            channeling my creativity into shaping the online reading experience
            at ABC News.
          </p>
        </Wrapper>
      </Section>
      <Section
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
            designers, and product managers—to ensure accessibility best
            practices and to implement A/B testing strategies. Recently, I was
            also involved in a complete site redesign.
          </p>
        </Card>
        <Card
          label="2018 - 2021"
          heading="Fullstack Developer ⋅ National Transport Insurance (NTI)"
          link="https://insurance-sdi.nti.com.au/#/quote/get-quote"
        >
          <p>
            Developed and maintained internal software like CRMs and insurance
            systems. Built external platforms for brokers and customers like
            quote generators and claim lodgements. Hosted a ‘Design Sprints’ by
            Google Venture.
          </p>
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
        </Card>
      </Section>
      <Section
        heading="Highlights"
        prefix="Projects and Awards"
        animation={Animations.HAPPY}
      >
        <Card
          label="Project"
          heading="Rubber Ducking AI"
          link="https://rubberduckingai.condorcoders.com/"
          imgUrl="./public/images/RubberDuckingAI.webp"
        >
          <p>
            Developed a chat assistant for developers using Gemini AI, inspired
            by the "rubber ducking" method.
          </p>
        </Card>
        <Card
          label="Project"
          heading="Twitch Overlay !HACK"
          link="https://twitch-chat-users.vercel.app/"
          imgUrl="./public/images/TwitchOverlay.webp"
        >
          <p>
            Created an old-style computer overlay that reacts to Twitch. When
            users type !hack, their profile photo appears inside the computer
            screen, simulating a "hack" effect. Designed for use with OBS, this
            overlay brings a fun, retro touch to live streams.
          </p>
        </Card>
        <Card
          label="Award"
          heading="FemHack 2022"
          link="https://www.nuwe.io/hackathons/femhack?section=overview"
          imgUrl="./public/images/FemHack2022.webp"
        >
          <p>3rd place in the App Development challenge.</p>
        </Card>
      </Section>
      <Section
        heading="Contact"
        prefix="Want to chat?"
        animation={Animations.HEADNOD}
      ></Section>
    </>
  );
};
