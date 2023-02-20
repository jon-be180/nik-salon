import React from 'react';
import { Page } from '../../components/Page';
import { Section } from '../../components/Section';
import { Seo } from '../../components/Seo';
import { ServiceCard } from '../../components/ServiceCard';
import { ServiceTemplateData } from '../Service/data';
import * as classes from './style.module.css';

interface ServiceListingTemplateProps {
    pageContext: {
        articles: ServiceTemplateData[];
    };
}


export default function ServiceListingTemplate(props: ServiceListingTemplateProps): React.ReactElement {
    const ARTICLES_PER_PAGE = 999;
    const articles = props.pageContext.articles;
    
    const [shownArticlesNumber, setShownArticlesNumber] = React.useState<number>(ARTICLES_PER_PAGE);

    // Check if at least one filter option is selected. If so, create an array of all article ids that
    // are selected based on the current filter option selection. We use this later on to easily check
    // which articles to show.
    let selectedArticleIds: string[] = [];

    return (
        <>
            <Seo title="All Services" useTitleTemplate={true} />
            <Page>
                <Section anchor="articleListing" heading="Our Services">
                    
                    <div className={classes.Listing}>
                        {articles
                            .slice(0, shownArticlesNumber)
                            .map((article, key) => {
                                return (
                                    <ServiceCard
                                        key={key}
                                        showBanner={true}
                                        data={{
                                            image: article.banner,
                                            title: article.title,
                                            category: article.categories.join(' / '),
                                            publishedAt: new Date(article.date.replace(/-/g, '/')),
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