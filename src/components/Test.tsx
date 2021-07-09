import type { FC } from "react";
import React from "react";
import styled from "styled-components";

const TestWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

const Test: FC = ({ children }) => {
  return <TestWrapper>{children}</TestWrapper>;
};

export default Test;
