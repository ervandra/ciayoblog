module.exports = {
  siteMetadata: {
    title: `CIAYO Blog using React.js`,
    description: `Berisi informasi-informasi menarik tentang komik, pop culture, game, mainan, film animasi, fakta unik, tips dan para artis di dunia perkomikan.`,
    author: `@vahnisme`,
  },
  pathPrefix: "/ciayoblog",
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "blog.ciayo.com",
        protocol: "https",
        searchAndReplaceContentUrls: {
          sourceUrl: "https://blog.ciayo.com",
          replacementUrl: "https://ervandra.github.io/ciayoblog",
        },
        useACF: false,
        includedRoutes: [
          "**/posts",
          "**/pages",
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
