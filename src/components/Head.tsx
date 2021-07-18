import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { HeadQueryData } from "../types";

type HeadProps = {
  readonly description?: string;
  readonly lang?: string;
  readonly keywords?: string[];
  readonly image?: string;
  readonly title: string;
};

const Head: React.FC<HeadProps> = ({
  description,
  lang: metalang,
  keywords,
  title,
  image,
}) => {
  const { site }: HeadQueryData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author {
            name
          }
          siteUrl
        }
      }
    }
  `);

  const metaDescription = description || site.siteMetadata.description;
  const lang = metalang || "kor";
  const metaKeywords = keywords || [];
  const metaImage =
    site.siteMetadata.siteUrl + `${image || site.siteMetadata.image}`;

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `image`,
          content: metaImage,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: metaImage,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author.name,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: metaImage,
        },
        // {
        //   name: `google-site-verification`,
        //   content: site.siteMetadata.googleSiteVerification,
        // },
      ].concat(
        metaKeywords.length > 0
          ? {
              name: `keywords`,
              content: metaKeywords.join(`, `),
            }
          : []
      )}
    />
  );
};

export default Head;
