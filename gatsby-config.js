module.exports = {
  siteMetadata: {
    siteUrl: "https://thisisleejss.gatsbyjs.io/",
    title: "leejss",
    author: {
      name: "Lee Jongseo",
      email: "goldemshine@gmail.com",
      url: "https://leejss.github.io/",
    },
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve(`./src/layouts/index.tsx`),
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
        background_color: "#255799",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
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
      resolve: "gatsby-source-filesystem",
      options: {
        name: "about",
        path: `${__dirname}/src/contents/about`,
      },
      __key: "about",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "works",
        path: `${__dirname}/src/contents/works`,
      },
      __key: "works",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "contact",
        path: `${__dirname}/src/contents/contact`,
      },
      __key: "contact",
    },
  ],
};
