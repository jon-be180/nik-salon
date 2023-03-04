import React from "react";
import { Animation } from "../../components/Animation";
import { Section } from "../../components/Section";
import { useSiteConfiguration } from "../../hooks/useSiteConfiguration";
import { useLocalDataSource } from "./data";
import { PageSection } from "../../types";
import * as classes from "./style.module.css";

export function ContactSection(props: PageSection): React.ReactElement {
  const response = useLocalDataSource();
  const siteConfiguration = useSiteConfiguration();
  const data = response.allContactJson.sections[0];

  return (
    <Animation type="fadeUp">
      <Section
        anchor={props.sectionId}
        heading={props.heading}
        additionalClasses={[classes.Contact]}
      >
        {data.description && (
          <p className={classes.Description}>{data.description}</p>
        )}

        <a
          href={siteConfiguration.navigation.ctaButton.url}
          target={
            siteConfiguration.navigation.ctaButton.openNewTab
              ? "_blank"
              : undefined
          }
          rel="noopener noreferrer"
          className={classes.CtaButton}
        >
          {siteConfiguration.navigation.ctaButton.label}
        </a>
      </Section>
    </Animation>
  );
}
