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
      <h1>안녕하세요. 이종서입니다.</h1>
      <p>
        처음 자바스크립트 코딩 이후 개발자를 천직이라고 느꼈습니다. 대학을
        마치고 뛰어난 개발자가 되기 위해 열심히 노력하고 있습니다. 저는 배움을
        즐기는 개발자입니다. Javascript를 주로 사용하며 최근에는 Typescript를
        이용하여 개발 공부를 하고 있습니다. Python을 통해서 알고리즘과 자료구조
        공부도 꾸준히 하고 있습니다. 프론트엔드 쪽으로 React와 Redux를 즐겨
        사용하고 있고 백엔드 쪽으로 Express와 Mongodb를 다루고 있습니다.
        최근에는 Graphql과 Postgresql를 공부하고 있고, Firebase와 AWS의 클라우드
        서비스 또한 익히고 있습니다. 하나의 기술에만 멈춰있지 않고 새로운 기술을
        탐구하는 것을 즐기는 개발자입니다.
      </p>
    </IntroduceWrapper>
  );
};

export default Introduce;
