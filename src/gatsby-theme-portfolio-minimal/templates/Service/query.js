module.exports = {
    ServiceTemplateQuery: `
        query ServiceTemplateQuery {
            allService(sort: {date: DESC}) {
                services: nodes {
                    banner {
                        alt
                        caption
                        src {
                            childImageSharp {
                                gatsbyImageData(width: 660, height: 400, placeholder: TRACED_SVG)
                            }
                        }
                    }
                    body
                    categories
                    date(formatString: "MMMM DD, YYYY")
                    description
                    id
                    keywords
                    slug
                    title
                    readingTime {
                        text
                      }
                }
            }
        }  
    `,
};