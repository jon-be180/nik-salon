import React from "react";
import { Page, Section, Seo } from "gatsby-theme-portfolio-minimal";
import { SpacerHeroSection } from "./../..//sections/SpacerHero";

export default function NotFoundPage(): React.ReactElement {
  return (
    <>
      <Seo
        title="Error 404: La página no puede ser encontrada"
        noIndex={true}
      />
      <Page>
        <SpacerHeroSection />
        <Section
          heading="Error 404: La página no puede ser encontrada"
          anchor="404"
        >
          <p>
            Lamentamos los inconvenientes. Parece que la página que intentabas
            acceder no existe o ha sido movida.
          </p>

          <p>
            Aquí hay algunas sugerencias que pueden ayudarte a encontrar lo que
            estás buscando:
          </p>
          <ul>
            <li>Verifica la URL por cualquier error o tipeo</li>
            <li>
              Regresa a la página principal y navega hasta la página deseada.
            </li>
          </ul>
        </Section>
      </Page>
    </>
  );
}
