import { graphql, useStaticQuery } from "gatsby";
import React, { useEffect } from "react";
import { useMove } from "../../contexts/useMove";
import { WorksQueryData } from "../../types";
import Works from "./Works";

const WorksContainer: React.FC = () => {
  const { setMove } = useMove();
  useEffect(() => {
    setMove(false);
  }, []);
  const data: WorksQueryData = useStaticQuery(graphql`
    query WorksQuery {
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "works" } } }
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              repo
              title
              thumbnail {
                childImageSharp {
                  gatsbyImageData(width: 800)
                }
              }
            }
          }
        }
      }
    }
  `);
  return <Works data={data} />;
};

export default WorksContainer;
