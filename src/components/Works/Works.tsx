import React from "react";
import type { FC } from "react";
import Opaque from "../Opaque";
import Wrapper from "../Wrapper";
import { Router } from "@reach/router";
import styled from "styled-components";
import Img from "gatsby-image";
import { IWork, IWorks } from "../../type";

const ItemTitle = styled.h1`
  transition: 0.1s ease;
  padding: 1rem 2rem;
  &:hover {
    color: #47eb5d;
  }
`;

type WorksProps = {
  data: IWorks;
};

const Works: FC<WorksProps> = ({ data }) => {
  const workList: IWork[] = data.allMarkdownRemark.edges;
  return (
    <>
      <Opaque />
      <Wrapper fullHeight fullWidth>
        {workList.map((work: IWork) => (
          <ItemTitle key={work.node.frontmatter.title}>
            {work.node.frontmatter.title}
          </ItemTitle>
        ))}
      </Wrapper>

      <Router basepath="/works">
        {
          workList.map({})
        }
      </Router>
    </>
  );
};

export default Works;
