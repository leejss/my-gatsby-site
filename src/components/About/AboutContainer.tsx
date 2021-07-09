import { graphql, useStaticQuery } from "gatsby";
import type { FC } from "react";
import React from "react";
import { IAbout } from "../../type";
import About from "./About";

const AboutContainer: FC = () => {
  const data: IAbout = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { id: { eq: "About" } }) {
        excerpt
        frontmatter {
          title
        }
      }
    }
  `);
  return <About data={data} />;
};

export default AboutContainer;
