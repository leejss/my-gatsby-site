import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { IWork } from "../../types";

type WorkProps = {
  edge: IWork;
};

const WorkWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .work__title {
    font-size: ${(props) => props.theme.fontSizes.small};
    margin: 10px;
  }

  .work__desc {
    max-width: 800px;
    font-size: ${(props) => props.theme.fontSizes.normal};
    color: ${(props) => props.theme.colors.medium};

    /* Media Query */
    ${(props) => props.theme.media.max.md`
    font-size: 0.825rem;
  `}
  }

  /* Media Query */
  ${(props) => props.theme.media.max.md`
    padding: 1rem 1.5rem;
  `}
`;

const Work: React.FC<WorkProps> = ({ edge }) => {
  const thumbnail = edge.node.frontmatter.thumbnail;
  const title = edge.node.frontmatter.title;
  const html = edge.node.html;
  const repo = edge.node.frontmatter.repo;
  const image = getImage(thumbnail);

  return (
    <WorkWrapper>
      {image && <GatsbyImage image={image} alt={title} />}
      <h3 className="work__title">
        <a href={repo}>{title} - Github 저장소 바로가기</a>
      </h3>
      <div className="work__desc" dangerouslySetInnerHTML={{ __html: html }} />
    </WorkWrapper>
  );
};

export default Work;
