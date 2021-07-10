import React, { useEffect } from "react";
import type { FC } from "react";
import Works from "./Works";
import { useMove } from "../../contexts/useMove";
import { graphql, useStaticQuery } from "gatsby";
import { IWorks } from "../../type";

const WorksContainer: FC = () => {
  const { setMove } = useMove();
  useEffect(() => {
    setMove(false);
  }, []);
  const data: IWorks = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { frontmatter: { category: { eq: "works" } } }) {
        edges {
          node {
            frontmatter {
              title
              keyword
              repo
              thumbnail {
                childImageSharp {
                  fluid(maxWidth: 2000, maxHeight: 1000) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            internal {
              content
            }
            id
          }
        }
      }
    }
  `);

  return <Works data={data} />;
};

export default WorksContainer;
