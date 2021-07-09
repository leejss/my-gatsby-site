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
    };
  };
}

export interface IWorks {
  allMarkdownRemark: {
    edges: IWork[];
  };
}
