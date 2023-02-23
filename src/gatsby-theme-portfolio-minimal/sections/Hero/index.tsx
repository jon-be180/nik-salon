import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Animation } from "../../components/Animation";
import { Section } from "../../components/Section";
import { SocialProfiles } from "../../components/SocialProfiles";
import { useLocalDataSource } from "./data";
import { PageSection } from "../../types";
import { StaticImage } from "gatsby-plugin-image";

import * as classes from "./style.module.css";

import IntroVideoWebm from "./../../../../content/videos/nik-salon-intro.webm";
import IntroVideoMp from "./../../../../content/videos/nik-salon-intro.mp4";

export function HeroSection(props: PageSection): React.ReactElement {
  const response = useLocalDataSource();
  const data = response.allHeroJson.sections[0];

  // todo - i broke something and now its in the middle... oops
  return (
    <Animation type="fadeUp" delay={400} className={classes.HeroOuter}>
      <video autoPlay muted loop className={classes.Video}>
        <source src={IntroVideoWebm} type="video/webm" />
        <source src={IntroVideoMp} type="video/mp4" />
        <StaticImage
          src="./../../../../content/images/nik-salon-intro.png"
          alt="Introducing Nik Salon"
        />
      </video>
      <div className={classes.HeroContainer}>
        <Section anchor={props.sectionId} additionalClasses={[classes.Hero]}>
          <div className={classes.Intro}>
            {data.intro && (
              <span className={classes.ImagePrefix}>{data.intro}</span>
            )}
          </div>
          <h1 className={classes.Title}>{data.title}</h1>
          <h2 className={classes.Subtitle}>
            {data.subtitle.prefix}
            <u>{data.subtitle.highlight}</u>
            {data.subtitle.suffix}
          </h2>
          <p>{data.description}</p>
          <Animation type="fadeLeft" delay={600}>
            {data.socialProfiles && (
              <SocialProfiles
                from={data.socialProfiles.from}
                showIcon={data.socialProfiles.showIcons}
              />
            )}
          </Animation>
        </Section>
      </div>
    </Animation>
  );
}
