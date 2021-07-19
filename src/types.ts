import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks";

// Graphql Query Types
export interface HeadQueryData {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      author: {
        name: string;
      };
      siteUrl: string;
      image: string;
    };
  };
}

export interface IWork {
  node: {
    id: string;
    html: string;
    frontmatter: {
      repo: string;
      thumbnail: FileNode;
      title: string;
    };
  };
}

export interface WorksQueryData {
  allMarkdownRemark: {
    edges: IWork[];
  };
}

export interface ContactQueryData {
  site: {
    siteMetadata: {
      author: {
        github: string;
        email: string;
      };
    };
  };
}
