import React from "react";
import { Animation } from "../../gatsby-theme-portfolio-minimal/components/Animation";
import { Section } from "../../gatsby-theme-portfolio-minimal/components/Section";
import { GatsbyImage } from "gatsby-plugin-image";
import { PageSection } from "../../gatsby-theme-portfolio-minimal/types";
import { useLocalDataSource } from "./data";
import * as classes from "./style.module.css";

export function ServiceBoxesSection(props: PageSection): React.ReactElement {
  const response = useLocalDataSource();
  const data = response.allServiceboxesJson.sections[0];

  return (
    <Animation type="fadeUp">
      <Section anchor={props.sectionId} heading={props.heading}>
        <div className={classes.Interests}>
          {data.serviceboxes.map((interest, key) => {
            return (
              <Animation
                key={key}
                className={classes.Interest}
                type="scaleIn"
                delay={key * 100}
              >
                <a href={interest.url}>
                  {interest.image.src && (
                    <GatsbyImage
                      image={interest.image.src.childImageSharp.gatsbyImageData}
                      className={classes.Icon}
                      alt={interest.image.alt || `Interest ${interest.label}`}
                    />
                  )}{" "}
                  <div className={classes.LabelGroup}>
                    <h4 className={classes.Label}>{interest.label}</h4>
                    <div className={classes.LearnMore}>Aprender más</div>
                  </div>
                </a>
              </Animation>
            );
          })}
        </div>
      </Section>
    </Animation>
  );
}
