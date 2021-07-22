import React from "react";
import styled from "styled-components";

const IntroduceWrapper = styled.div`
  width: 50%;
  font-size: ${(props) => props.theme.fontSizes.normal};

  h1 {
    font-size: ${(props) => props.theme.fontSizes.large};
    margin-bottom: 0.825rem;
  }

  p {
    color: ${(props) => props.theme.colors.medium};
  }

  /* Media Query */
  ${(props) => props.theme.media.max.md`
      width: 80%;
      font-size: 0.825rem;
      p {
          line-height: 1.6;
      }
  `}
`;

const Introduce: React.FC = () => {
  return (
    <IntroduceWrapper>
      <h1>안녕하세요. 배움을 즐기는 개발자 이종서입니다.</h1>
      <p>
        저는 새로운 기술을 탐구하는 것을 즐기는 개발자입니다. Javascript와
        Typescript를 주 언어로 사용하여 프론트 엔드 개발을 하고 있습니다.
        React를 주로 다루며 styled-components, redux, redux-saga 등 관련
        라이브러리와 함께 사용하고 있습니다. 백엔드 쪽으로 Express와
        Mongodb,Graphql를 다루고 있습니다. 최근에는 Firebase와 AWS의 클라우드
        서비스 또한 익히고 있습니다.
      </p>
    </IntroduceWrapper>
  );
};

export default Introduce;
