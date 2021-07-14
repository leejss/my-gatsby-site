import { FluidObject } from "gatsby-image";

type URL = string;

export interface IAbout {
  markdownRemark: {
    frontmatter: {
      title: string;
      skills: {
        backend: string[];
        frontend: string[];
        language: string[];
      };
    };
    html: string;
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
