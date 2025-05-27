/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Thiago Villa - Senior Fullstack Software Engineer`,
    siteUrl: `https://thiagovilla.com`,
    author: {
      name: `Thiago Villa`,
      role: `Senior Fullstack Software Engineering Consultant`,
      bio: `I build sturdy, structured, and scalable software designed to grow, adapt, and withstand the test of time.`,
      email: `thiago@thiagovilla.com`,
      social: {
        linkedin: `https://linkedin.com/in/othiagovilla`,
        github: `https://github.com/thiagovilla`,
        twitter: `https://twitter.com/othiagovilla`
      }
    },
  },
  plugins: [
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `./content/blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    // For JSON FAQs
    {
      resolve: 'gatsby-source-filesystem',
      options: { path: './src/data/' },
    },
    'gatsby-transformer-json',
  ],
};
