import { FC } from "react";
import React from "react";
import Wrapper from "../Wrapper";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import { IAbout } from "../../type";

const Content = styled.div`
  /* text-align: center; */
  padding: 3rem;
  line-height: 1.5;
  font-weight: ${theme.fontWeights.regular};
  h1 {
    font-weight: ${theme.fontWeights.regular};
    font-size: ${theme.fontSizes.mediumLarge};
  }

  p {
  }
`;

type AboutProps = {
  data: IAbout;
};

const About: FC<AboutProps> = ({ data }) => {
  return (
    <Wrapper opaque fullHeight fullWidth>
      <Content>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <p>{data.markdownRemark.excerpt}</p>
      </Content>
    </Wrapper>
  );
};

export default About;
