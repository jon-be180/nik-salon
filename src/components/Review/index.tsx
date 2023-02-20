
import React from 'react';
import { Animation } from '../../gatsby-theme-portfolio-minimal/components/Animation';
import { useMediaQuery } from '../../gatsby-theme-portfolio-minimal/hooks/useMediaQuery';
import { Rating } from 'react-simple-star-rating';
import * as classes from './style.module.css';

export interface Review {
    title: string;
    description: string;
    stars: number;
    visible: boolean;
    date: string;
    services: string;
}

interface ReviewProps {
    data: Review;
    index: number;
}

export function Review(props: ReviewProps): React.ReactElement {
    const isDesktopBreakpoint = useMediaQuery('(min-width: 992px)');

    return (
        <Animation
            type="fadeUp"
            className={classes.Project}
        >
            <div className={classes.Details}>
                <h4 className={classes.Title}>{props.data.title}</h4>
                <p>{props.data.description}</p>
                <p>{props.data.date}</p>
                <p>{props.data.services}</p>
                <Rating initialValue={props.data.stars} readonly={true} />
            </div>
          
        </Animation>
    );
}