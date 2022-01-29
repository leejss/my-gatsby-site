module.exports = {
  siteMetadata: {
    title: `thisisleejss`,
    author: {
      name: `Lee Jongseo`,
      email: "goldemshine@gmail.com",
      github: "https://github.com/leejss",
    },
    description: `leejss's site`,
    siteUrl: `https://thisisleejss.com/`,
    social: [{ name: "Github", socialUrl: "https://github.com/leejss" }],
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/static/images`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "works",
        path: `${__dirname}/content/works`,
      },
      __key: "works",
    },
    {
      // Parsing Markdown
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://thisisleejss.com`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `thisisleejss`,
        short_name: `leejss`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `./static/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve(`./src/layouts/index.tsx`),
      },
    },
  ],
};
