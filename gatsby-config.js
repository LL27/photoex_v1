require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    title: "Photo Expression",
    description:
      "Le studio Photo Expression est implanté au 2 rue Beccaria en face du 128 rue de Charenton à Paris 12, pour vos photos d'identité, photographe de portrait etc. ",
    keywords: "portrait, photo d'identité, Paris 12",
  },

  plugins: [
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-sass`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-smoothscroll`,
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `${__dirname}/static/img\/.*\.svg/,`,
          omitKeys: ['xmlnsDc', 'xmlnsCc', 'xmlnsRdf', 'xmlnsSvg', 'xmlnsSodipodi', 'xmlnsInkscape'],
        }
      }
    },
    {
      resolve: "gatsby-v2-plugin-page-transitions",
      options: {
        transitionTime: 500,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },

    "gatsby-plugin-anchor-links",
    // must be after other CSS plugins
    "gatsby-plugin-netlify", // make sure to keep it last in the array
  ],
};
