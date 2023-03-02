import React from "react";
import {
  ContactSection,
  Page,
  Seo,
  Section
} from "gatsby-theme-portfolio-minimal";

import '@fontsource/halant' // raleway is also nice but sans-serif
import GoogleMap from '../components/GoogleMap'

import { ReviewsSection} from "../sections/Reviews"
import { SpacerHeroSection } from "../sections/SpacerHero";

import * as classes from './reservar.module.css';

export default function IndexPage() {
  return (
    <>
      <Seo title="Reserva tu cita de belleza hoy" useTitleTemplate={true} />
      <Page>
        <SpacerHeroSection/>
        <Section anchor="" heading="Reserva Tu Cita de Belleza Hoy en Nik Salon">
        <p>No esperes más para regalarte la belleza y el relax que mereces. ¡Reserva tu cita hoy mismo en Nik Salon! Nuestro equipo de profesionales estará encantado de ayudarte a conseguir el look perfecto y la máxima relajación.</p>
        <p>Contacta con nosotros hoy mismo para reservar tu cita. ¡Te esperamos en Nik Salon!</p>
        </Section>
        <Section anchor="" heading="">

    <iframe
      className={classes.Iframe}
      id="JotFormIFrame-230596760337058"
      title="Booking Form"
      src="https://form.jotform.com/230596760337058"
      frameborder="0"
      scrolling="no"
    >
    </iframe>
    <div style={{ width: "100%", height: "4rem", background: "var(--background-color)", position: "relative", top: "-4rem"}}>
      &nbsp;
    </div>
    
        </Section>
        <ReviewsSection sectionId="reviews" heading="Reseñas de clientes" />
        <GoogleMap/>
      </Page>
    </>
  );
}