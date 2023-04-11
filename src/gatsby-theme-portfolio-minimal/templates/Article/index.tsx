import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Page } from "../../components/Page";
import { Seo } from "../../components/Seo";
import { AuthorSnippet } from "../../components/AuthorSnippet";
import { ArticleTemplateData } from "./data";
import { SpacerHeroSection } from "./../../../sections/SpacerHero";
import * as classes from "./style.module.css";

// Reference to the local prismjs theme (Modified)
require("../../globalStyles/prism.css");

interface ArticleTemplateProps {
  pageContext: {
    article: ArticleTemplateData;
    listingPagePath: string;
  };
}

export default function ArticleTemplate(
  props: ArticleTemplateProps
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
          <section className={classes.Header}>
            <span className={classes.Category}>
              {article.categories.join(" / ")}
            </span>
            <h1>{article.title}</h1>
            <div className={classes.Details}>{article.date}</div>
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
