/**
 * @type {import('gatsby').GatsbyConfig}
 */

if (process.env.NODE_ENV !== "production") require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Thiago Villa`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-source-google-docs",
      options: {
        folder: process.env.GOOGLE_DOCS_FOLDER_ID,
      },
    },
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        mdxOptions: {
          remarkPlugins: [
            require("remark-gfm"),
            require("remark-footnotes"),
            require("remark-slug"),
            require("remark-autolink-headings"),
            require("remark-prism"),
          ],
        },
      },
    },
    {
      resolve: "gatsby-source-dropbox",
      options: {
        accessToken: process.env.DROPBOX_ACCESS_TOKEN,
        extensions: [".mdx"],
        recursive: true,
      },
    },
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: process.env.DATOCMS_API_TOKEN,
        previewMode: process.env.DRAFT_ENV === "true",
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-graphcms",
      options: {
        endpoint: process.env.GRAPHCMS_ENDPOINT,
        queryConcurrency: +process.env.GRAPHCMS_QUERY_CONCURRENCY ?? 10,
        stages:
          process.env.DRAFT_ENV === "true"
            ? ["PUBLISHED", "DRAFT"]
            : ["PUBLISHED"],
      },
    },
  ],
};
