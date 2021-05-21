module.exports = {
  siteName: "Davidian",
icon: {
  favicon: './src/assets/favicon.png',
    touchicon: './src/assets/favicon.png'
  },
touchicon: {
      src: './src/assets/favicon.png',
      sizes: [76, 152, 120, 167],
      precomposed: true
    },
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

