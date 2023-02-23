import React from "react";
import {
  Page,
  ContactSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";
import { SpacerHeroSection} from '../sections/SpacerHero';

import '@fontsource/halant'

import GoogleMap from '../components/GoogleMap'

export default function SobreNosotrosPage() {
  return (
    <>
      <Seo title="Sobre Nosotros" />
      <Page>
        <SpacerHeroSection/>
        <h1>Our Story</h1>
        <h2>Our Mission</h2>
        <h2>Our Expertise</h2>
        <h2>Facilities</h2>
        <h2>Reviews</h2>
        <ContactSection sectionId="contacto" heading="Reserva Ahora" />
        <GoogleMap/>
      </Page>
    </>
  );
}