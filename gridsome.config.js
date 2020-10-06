module.exports = {
  siteName: "Davidian",

  templates: {
    ContentfulPortfolioBlog: [
      {
        path: "/blog/:title",
        component: "./src/templates/ContentfulPorfolioBlog.vue",
      },
    ],
  },
  plugins: [
    {
      use: "@gridsome/source-contentful",
      options: {
        space: process.env.CONTENTFUL_SPACE,
        accessToken: process.env.CONTENTFUL_TOKEN,
        host: "cdn.contentful.com",
        typeName: "Contentful",
      },
    },
  ],
};

