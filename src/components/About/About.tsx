import { FC } from "react";
import React from "react";
import Wrapper from "../Wrapper";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import { IAbout } from "../../type";
import { iconGenerator } from "../../utils/iconGenerator";

const Content = styled.div`
  /* text-align: center; */
  width: 60%;
  padding: 3rem;
  line-height: 1.5;
  font-weight: ${theme.fontWeights.regular};

  h1 {
    font-weight: ${theme.fontWeights.regular};
    font-size: ${theme.fontSizes.mediumLarge};
  }

  p {
    padding-bottom: 5%;
    margin-bottom: 5%;
    border-bottom: 1px solid white;
  }
`;

const Skills = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.096);
  div {
  }

  div > h2 {
    padding: 0;
    margin: 5px 0;
  }
  div > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  div > div > img {
    margin-left: 5px;
  }
`;

type AboutProps = {
  data: IAbout;
};

const About: FC<AboutProps> = ({ data }) => {
  const title = data.markdownRemark.frontmatter.title;
  const html = data.markdownRemark.html;
  const { backend, frontend, language } =
    data.markdownRemark.frontmatter.skills;
  return (
    <Wrapper opaque fullHeight fullWidth>
      <Content>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />

        <Skills>
          <div>
            <h2>Language</h2>
            <div>{language.map((l) => iconGenerator(l))}</div>
          </div>
          <div>
            <h2>Frontend</h2>
            <div>{frontend.map((f) => iconGenerator(f))}</div>
          </div>
          <div>
            <h2>Backend</h2>
            <div>{backend.map((b) => iconGenerator(b))}</div>
          </div>
        </Skills>
      </Content>
    </Wrapper>
  );
};

export default About;
