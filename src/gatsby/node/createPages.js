const path = require('path');
const serviceQuery = require('./../../gatsby-theme-portfolio-minimal/templates/Service/query');

// as this file is no longer part of the orignal plugin, gatsby-config settings wont get 
// passed in any more, hence i've hard coded them in here, sorry
module.exports = async ({ graphql, actions, reporter }, options) => {

    // this has also been changed as the path is now 'wrong'..
    // this is where the template component is stored
    const templateDir = path.join(__dirname, '../', '../', '../', 'src', 'gatsby-theme-portfolio-minimal', 'templates');

    options = {
          serviceSettings: {
            path: "/servicios",
            usePathPrefixForArticles: true, // Default true (i.e. path will be /services/hair-cutting)
          },
    }

   
    const serviceResponse = await graphql(serviceQuery.ServiceTemplateQuery);
    const serviceData = serviceResponse.data;

    if (serviceData.allService.services.length !== 0 && (!options.serviceSettings || !options.serviceSettings.path)) {
        throw new Error(`No path for ArticleListing page in gatsby-config specified`);
    }

    // Create ServiceListing page
    const serviceListingPageSlug = options.serviceSettings.path.replace(/\/\/+/g, '/'); // remove duplicate slashes
    reporter.info(`Creating ServiceListing page under ${serviceListingPageSlug}`);
    actions.createPage({
        path: serviceListingPageSlug,
        component: path.resolve(templateDir, 'ServiceListing', 'index.tsx'),
        context: {
            articles: serviceData.allService.services,
        },
    });

    // Create pages for each individual Article
    serviceData.allService.services.forEach((article) => {
        reporter.info(`Creating Service page under ${article.slug}`);
        actions.createPage({
            path: article.slug,
            component: path.resolve(templateDir, 'Service', 'index.tsx'),
            context: {
                article: article,
                listingPagePath: serviceListingPageSlug,
            },
        });
    });

}