import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { WorksQueryData } from "../../types";
import Works from "./Works";

const WorksContainer: React.FC = () => {
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
