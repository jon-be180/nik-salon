import { graphql, useStaticQuery } from 'gatsby';
import { Review } from '../../components/Review';

interface ReviewsSectionQueryResult {
    allReviewsJson: {
        sections: {
            reviews: Review[];
        }[];
    };
}

export const useLocalDataSource = (): ReviewsSectionQueryResult => {
    return useStaticQuery(graphql`
        query ReviewsSectionQuery {
            allReviewsJson {
                sections: nodes {
                    reviews {
                        description
                        title
                        stars
                        visible
                    }
                }
            }
        }
    `);
};