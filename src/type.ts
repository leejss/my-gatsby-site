import { FluidObject } from "gatsby-image";

type URL = string;

export interface IAbout {
  markdownRemark: {
    excerpt: string;
    frontmatter: {
      title: string;
    };
  };
}

export interface IWork {
  node: {
    frontmatter: {
      title: string;
      keyword: string;
      repo: string;
      thumbnail: {
        childImageSharp: {
          fluid: FluidObject;
        };
      };
    };
    id: string;
    internal: {
      content: string;
    };
  };
}

export interface IWorks {
  allMarkdownRemark: {
    edges: IWork[];
  };
}

export interface IContactInfo {
  markdownRemark: {
    frontmatter: {
      github: URL;
      naver: URL;
      gmail: URL;
    };
  };
}
