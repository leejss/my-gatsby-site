import React from "react";
import { WorksQueryData } from "../../types";
import styled from "styled-components";
import Work from "./Work";

type WorksProps = {
  readonly data: WorksQueryData;
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;


const Works: React.FC<WorksProps> = ({ data }) => {
  console.log(data);
  const edges = data.allMarkdownRemark.edges;

  return (
    <Container>
      {edges.map((edge) => (
        <Work key={edge.node.id} edge={edge} />
      ))}
    </Container>
  );
};

export default Works;
