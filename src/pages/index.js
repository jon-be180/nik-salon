import React from "react";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  Page,
  Seo,
} from "gatsby-theme-portfolio-minimal";

import '@fontsource/halant' // raleway is also nice but sans-serif
import GoogleMap from '../components/GoogleMap'

import { ReviewsSection } from "../sections/Reviews"
import { ServiceBoxesSection } from '../sections/ServiceBoxes'

export default function IndexPage() {
  return (
    <>
      <Seo />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="sobre" heading="Sobre Nosotras" />
        <ReviewsSection sectionId="reseñas" heading="Reseñas de clientes" />
        <ServiceBoxesSection sectionId="servicios" heading="Nuestros servicios de belleza" />
        <ContactSection sectionId="contacto" heading="Reserva Ahora" />
        <GoogleMap/>
      </Page>
    </>
  );
}