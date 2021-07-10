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
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

const TitleHead = styled.h1`
  font-size: ${theme.fontSizes.mediumLarge};
  margin-right: 3%;
`;

const TitleHeadSub = styled.h2`
  text-align: start;
  font-size: ${theme.fontSizes.normal};
  margin: 0;
  margin-right: 3%;
`;

const Title: FC<TitleProps> = ({ title }) => {
  return (
    <TitleWrapper>
      <TitleHead>{title}</TitleHead>
      <TitleHeadSub>since 2020.02</TitleHeadSub>
    </TitleWrapper>
  );
};

export default Title;
