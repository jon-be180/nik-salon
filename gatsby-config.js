module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-portfolio-minimal",
      options: {
        siteUrl: "https://niksalon.com.gt/", // Used for sitemap generation
        manifestSettings: {
          favicon: "./content/images/favicon.png", // Path is relative to the root
          siteName: "Nik Salon", // Used in manifest.json
          shortName: "Nik", // Used in manifest.json
          startUrl: "/", // Used in manifest.json
          backgroundColor: "#FFFFFF", // Used in manifest.json
          themeColor: "#FFFFFF", // Used in manifest.json
          display: "minimal-ui", // Used in manifest.json
        },
        contentDirectory: "./content",
        blogSettings: {
          path: "/blog",
          usePathPrefixForArticles: true, // Default true (i.e. path will be /blog/first-article)
        },
        serviceSettings: {
          path: "/servicios",
          usePathPrefixForArticles: true, // Default true (i.e. path will be /services/hair-cutting)
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-DMDPNGDV0M"],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `services`,
        // Path to the directory
        path: `./content/services/`,
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: 'https://www.niksalon.com.gt',
        sitemap: 'https://www.niksalon.com.gt/sitemap-index.xml',
        policy: [
          {userAgent: '*', allow: '/'},
          {userAgent: 'ahrefsbot',  disallow: '/'},
          {userAgent: 'semrushbot', disallow: '/'},
          {userAgent: 'mj12bot',    disallow: '/'},
      ]
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://niksalon.com.gt`,
        stripQueryString: true,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          breakpoints: [400, 768, 992],
        }
      }
    },
  ]
};
