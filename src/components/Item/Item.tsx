import React from "react";
import type { FC } from "react";
import { IWork } from "../../type";
import styled from "styled-components";
import Img from "gatsby-image";
import { theme } from "../../styles/theme";

type ItemProps = {
  work: IWork;
};

const ItemWrapper = styled.section`
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.1);
`;

const ItemBox = styled.div`
  overflow-y: hidden;
  width: 50%;
  text-align: center;
`;

const ItemTitle = styled.h1`
  transition: 0.1s ease;

  padding: 1rem 2rem;
`;

const ItemContent = styled.p`
  line-height: 1.5;
  text-align: start;
`;

const ItemLink = styled.a`
  font-size: ${theme.fontSizes.mediumLarge};
  &:hover {
    color: #47eb5d;
  }
`;

const Item: FC<ItemProps> = ({ work }) => {
  const fluid = work.node.frontmatter.thumbnail.childImageSharp.fluid;
  const title = work.node.frontmatter.title;
  const content = work.node.internal.content;
  const repoUrl = work.node.frontmatter.repo;
  return (
    <>
      <ItemWrapper>
        <ItemBox>
          <Img fluid={fluid} fadeIn />
          <ItemTitle>{title}</ItemTitle>
          <ItemContent>{content}</ItemContent>
          <ItemLink href={repoUrl} target="_blank">
            Github Repository 바로가기
          </ItemLink>
        </ItemBox>
      </ItemWrapper>
    </>
  );
};

export default Item;
