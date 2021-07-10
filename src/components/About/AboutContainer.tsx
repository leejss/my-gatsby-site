import { graphql, useStaticQuery } from "gatsby";
import { FC, useEffect } from "react";
import React from "react";
import { IAbout } from "../../type";
import About from "./About";
import { useMove } from "../../contexts/useMove";

const AboutContainer: FC = () => {
  const { setMove } = useMove();
  useEffect(() => {
    setMove(false);
  }, []);
  const data: IAbout = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "about" } }) {
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
