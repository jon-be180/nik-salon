import React from "react";
import { Page } from "../../components/Page";
import { Section } from "../../components/Section";
import { Seo } from "../../components/Seo";
import { ServiceCard } from "../../components/ServiceCard";
import { ServiceTemplateData } from "../Service/data";
import { SpacerHeroSection } from "./../../../sections/SpacerHero";
import * as classes from "./style.module.css";

interface ServiceListingTemplateProps {
  pageContext: {
    articles: ServiceTemplateData[];
  };
}

export default function ServiceListingTemplate(
  props: ServiceListingTemplateProps
): React.ReactElement {
  const ARTICLES_PER_PAGE = 999;
  const articles = props.pageContext.articles;

  const [shownArticlesNumber, setShownArticlesNumber] =
    React.useState<number>(ARTICLES_PER_PAGE);

  // Check if at least one filter option is selected. If so, create an array of all article ids that
  // are selected based on the current filter option selection. We use this later on to easily check
  // which articles to show.
  let selectedArticleIds: string[] = [];

  return (
    <>
      <Seo title="Nuestros Servicios" useTitleTemplate={true} />
      <Page>
        <SpacerHeroSection />
        <Section anchor="articleListing" heading="Nuestros Servicios">
          <p>
            ¡Bienvenido a nuestro exclusivo salón! Ofrecemos una amplia gama de
            servicios excepcionales para ayudarte a lograr el look perfecto.
            Nuestro experimentado personal está dedicado a brindar tratamientos
            de alta calidad que se adaptan a tus necesidades únicas. Desde
            cortes de cabello hasta tratamientos faciales, depilación y
            maquillaje, ofrecemos todo lo que necesitas para lucir y sentirte lo
            mejor posible. Utilizamos solo productos de la más alta calidad y
            nos mantenemos al día con las últimas tendencias y técnicas para
            asegurarnos de que recibas el mejor servicio posible. Ven a
            visitarnos hoy y experimenta lo último en belleza y relajación.
            Reserva tu cita ahora y prepárate para disfrutar de un merecido
            mimo.
          </p>
          <div className={classes.Listing}>
            {articles.slice(0, shownArticlesNumber).map((article, key) => {
              return (
                <ServiceCard
                  key={key}
                  showBanner={true}
                  data={{
                    image: article.banner,
                    title: article.title,
                    category: article.categories.join(" / "),
                    publishedAt: new Date(article.date.replace(/-/g, "/")),
                    link: article.slug,
                    readingTime: article.readingTime.text,
                  }}
                />
              );
            })}
          </div>
        </Section>
      </Page>
    </>
  );
}
