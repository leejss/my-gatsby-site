import type { FC } from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";
import React from "react";

type TitleProps = {
  title: string;
};

const TitleWrapper = styled.header`
  position: fixed;
  top: 5%;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const TitleHeader = styled.h1`
  font-size: ${theme.fontSizes.mediumLarge};
  margin-right: 3%;
`;
const Title: FC<TitleProps> = ({ title }) => {
  return (
    <TitleWrapper>
      <TitleHeader>{title}</TitleHeader>
    </TitleWrapper>
  );
};

export default Title;
