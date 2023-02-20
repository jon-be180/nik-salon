import React from "react";
import {
  ContactSection,
  Page,
  Seo,
} from "gatsby-theme-portfolio-minimal";

import '@fontsource/halant' // raleway is also nice but sans-serif
import GoogleMap from '../components/GoogleMap'

import { ReviewsSection} from "../sections/Reviews"

export default function IndexPage() {
  return (
    <>
      <Seo title="Reserva Ahora" />
      <Page>
        <ContactSection sectionId="contacto" heading="Reserva Ahora" />
        <ReviewsSection sectionId="reviews" heading="Reseñas de clientes" />
        <GoogleMap/>
      </Page>
    </>
  );
}