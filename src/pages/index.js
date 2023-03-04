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

  const schema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "Nik Salon",
    image:
      "https://niksalon.com.gt/static/logo-99b6f6dab0bc5addbcd1236f9a72db52.png",
    "@id": "",
    url: "https://niksalon.com.gt",
    telephone: "+50248373865",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Km 17.4 Carretera a San Jose Pinula CC Plaza Pinula",
      addressLocality: "Guatemala City",
      postalCode: "",
      addressCountry: "GT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 14.540980012129491,
      longitude: -90.44870849730013,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Saturday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "08:30",
        closes: "18:30",
      },
    ],
    sameAs: "https://www.instagram.com/niksal0n/",
  };


  return (
    <>
      <Seo schema={schema} />
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