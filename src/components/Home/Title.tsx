import React from "react";
import styled from "styled-components";

type TitleProps = {
  title: string;
};

const TitleWrapper = styled.header`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  /* Media Query */
  ${(props) => props.theme.media.max.sm`
    justify-content: center;
  `}
`;

const Text = styled.span`
  font-size: ${(props) => props.theme.fontSizes.medium};
  padding: 2rem 3rem;

  /* Media Query */
  ${(props) => props.theme.media.max.sm`
    font-size: 1rem;
    padding: 1rem 1.5rem;
  `}
`;

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <TitleWrapper>
      <Text>{title}</Text>
    </TitleWrapper>
  );
};

export default Title;
