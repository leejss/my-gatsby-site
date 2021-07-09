import styled from "styled-components";
import React, { FC, ImgHTMLAttributes } from "react";

const ImageWrapper = styled.div`
  max-width: 60%;
  max-height: 500px;
  background: white;
  z-index: 10;
  opacity: 0.5;
`;

type ImageCardProps = ImgHTMLAttributes<HTMLImageElement>;

const ImageCard: FC<ImageCardProps> = (props) => {
  return (
    <ImageWrapper>
      <img {...props} />
    </ImageWrapper>
  );
};

export default ImageCard;
