import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Page } from "../../components/Page";
import { Seo } from "../../components/Seo";
import { AuthorSnippet } from "../../components/AuthorSnippet";
import { ServiceTemplateData } from "./data";
import { SpacerHeroSection } from "./../../../sections/SpacerHero";
import * as classes from "./style.module.css";

// Reference to the local prismjs theme (Modified)
require("../../globalStyles/prism.css");

interface ServiceTemplateProps {
  pageContext: {
    article: ServiceTemplateData;
    listingPagePath: string;
  };
}

export default function ServiceTemplate(
  props: ServiceTemplateProps
): React.ReactElement {
  const article = props.pageContext.article;
  return (
    <>
      <Seo
        title={article.title}
        description={article.description || undefined}
        useTitleTemplate={true}
      />
      <Page>
        <SpacerHeroSection />
        <article className={classes.Article}>
          <div className={classes.Breadcrumb}>
            <Link
              to={props.pageContext.listingPagePath}
              title="Volver a Servicios"
            >
              <span className={classes.BackArrow}>&#10094;</span>
              Todos los Servicios
            </Link>
          </div>
          <section className={classes.Header}>
            <h1>{article.title}</h1>
          </section>
          {article.banner && article.banner.src && (
            <section className={classes.Banner}>
              <GatsbyImage
                image={article.banner.src.childImageSharp.gatsbyImageData}
                alt={article.banner.alt || `Image for ${article.title}`}
                imgClassName={classes.BannerImage}
              />
              {article.banner.caption && (
                <span
                  className={classes.BannerCaption}
                  dangerouslySetInnerHTML={{ __html: article.banner.caption }}
                />
              )}
            </section>
          )}
          <section className={classes.Body}>
            <div
              className={classes.Content}
              dangerouslySetInnerHTML={{ __html: article.body }}
            />
          </section>
        </article>
      </Page>
    </>
  );
}
