import React from "react";
import { LegalSection, Page, Seo } from "gatsby-theme-portfolio-minimal";
import { SpacerHeroSection } from '../sections/SpacerHero';

export default function PrivacyPage() {
  return (
    <>
      <Seo title="Privacy Policy" useTitleTemplate={true} noIndex={true} />
      <Page>
        <SpacerHeroSection/>
        <LegalSection sectionId="privacy" heading="Privacy Policy" />
      </Page>
    </>
  );
}
