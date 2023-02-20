import React from 'react';
import { Animation } from '../../gatsby-theme-portfolio-minimal/components/Animation';
import { Section } from '../../gatsby-theme-portfolio-minimal/components/Section';
import { Slider } from '../../gatsby-theme-portfolio-minimal/components/Slider';
import { Review } from '../../components/Review';
import { PageSection } from 'gatsby-theme-portfolio-minimal/src/types';
import { useLocalDataSource } from './data';
import * as classes from './style.module.css';

export function ReviewsSection(props: PageSection): React.ReactElement {
    const response = useLocalDataSource();
    const data = response.allReviewsJson.sections[0];

    return (
       
        <Animation type="fadeIn">
            <Section anchor={props.sectionId} heading={props.heading}>
                <Slider additionalClasses={[classes.Reviews]}>
                    {data.reviews.map((review, key) => {
                        return review.visible ? <Review key={key} index={key} data={review} /> : null;
                    })}
                </Slider>
            </Section>
        </Animation>
    );
}