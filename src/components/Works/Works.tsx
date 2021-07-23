import React, { useEffect, useRef, useState } from "react";
import { WorksQueryData } from "../../types";
import styled from "styled-components";
import Work from "./Work";
import ButtonActions from "./ButtonActions";

type WorksProps = {
  readonly data: WorksQueryData;
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Works: React.FC<WorksProps> = ({ data }) => {
  const edges = data.allMarkdownRemark.edges;
  const screensRef = useRef<HTMLDivElement>(null);
  const [viewIndex, setViewIndex] = useState<number>(0);

  function moveTo(
    index: number
  ): React.MouseEventHandler<HTMLDivElement> | undefined {
    return function () {
      if (screensRef.current) {
        Array.from(screensRef.current.children)[index].scrollIntoView({
          behavior: "smooth",
        });
      }
    };
  }

  useEffect(() => {
    // Observer
    const scrollOberser = new IntersectionObserver(
      (entries) => {
        const { target } = entries.find((entry) => entry.isIntersecting) || {};
        // view index 설정
        if (target && screensRef.current) {
          const index = Array.from(screensRef.current.children).indexOf(target);
          setViewIndex(index);
        }
      },
      {
        root: null,
        threshold: 0.5,
      }
    );
    
    if (screensRef.current) {
      Array.from(screensRef.current.children).forEach((item) => {
        scrollOberser.observe(item);
      });
    }
    return () => {
      if (screensRef.current) {
        Array.from(screensRef.current.children).forEach((item) => {
          scrollOberser.unobserve(item);
        });
      }
    };
  }, []);

  return (
    <>
      <ButtonActions moveTo={moveTo} viewIndex={viewIndex} />
      <Container ref={screensRef}>
        {edges.map((edge) => (
          <Work key={edge.node.id} edge={edge} />
        ))}
      </Container>
    </>
  );
};

export default Works;
