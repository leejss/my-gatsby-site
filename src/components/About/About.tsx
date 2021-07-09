import { FC, useEffect } from "react";
import React from "react";
import Opaque from "../Opaque";
import Wrapper from "../Wrapper";
import styled from "styled-components";
import { theme } from "../../styles/theme";

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

const About: FC = () => {
  return (
    <>
      <Opaque />
      <Wrapper>
        <Content>
          <h1>안녕하세요. 이종서입니다.</h1>
          <p>
            새로운 것을 배우는 것을 좋아합니다.새로운 것을 배우는 것을
            좋아합니다.새로운 것을 배우는 것을 좋아합니다.새로운 것을 배우는
            것을 좋아합니다.새로운 것을 배우는 것을 좋아합니다.새로운 것을
            배우는 것을 좋아합니다.새로운 것을 배우는 것을 좋아합니다.새로운
            것을 배우는 것을 좋아합니다.새로운 것을 배우는 것을 좋아합니다.
          </p>
        </Content>
      </Wrapper>
    </>
  );
};

export default About;
