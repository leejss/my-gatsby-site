import styled from "styled-components";

export const Centered = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;
  z-index: -1;
`;

export const Opaque = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -9;
`;

export const Circle = styled.div`
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid #fff;
  width: 20px;
  height: 20px;
  transition: 0.5s;

  &.fill {
    background: #ffffff;
  }
`;
