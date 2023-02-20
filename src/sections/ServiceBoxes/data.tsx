import { graphql, useStaticQuery } from 'gatsby';
import { ImageObject } from '../../gatsby-theme-portfolio-minimal/types';

interface ServiceBoxesSectionQueryResult {
    allServiceboxesJson: {
        sections: {
            serviceboxes: {
                image: ImageObject;
                label: string;
                url: string;
            }[];
        }[];
    };
}

export const useLocalDataSource = (): ServiceBoxesSectionQueryResult => {
   
    return useStaticQuery(graphql`
        query ServiceBoxesSectionQuery {
            allServiceboxesJson {
                sections: nodes {
                    serviceboxes {
                        image {
                            alt
                            src {
                                childImageSharp {
                                    gatsbyImageData(width: 300, height: 300)
                                }
                            }
                        }
                        label
                        url
                    }
                }
            }
        }
    `);
};
// i cant edit this at all... not sure why ???
// i want to do 200 not 20 for img size
// and add a url, this used to be here at one point but no longer