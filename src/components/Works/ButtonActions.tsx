import React from "react";
import styled from "styled-components";
import { Circle } from "../../styles/Common";
import { getArray } from "../../utils/utils";

const ScrollButtonActions = styled.div`
  position: fixed;
  z-index: 10;
  top: 50px;
  left: 20px;
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  pointer-events: visible;

  ${(props) => props.theme.media.max.md`
    flex-direction: row;
    top: 10px;
    left: 10px;
  `}

  div {
    margin: 10px;
    ${(props) => props.theme.media.max.md`
    margin: 0;
    margin-left: 5px;
  `}
  }
`;

type ButtonActionsProps = {
  moveTo: (
    index: number
  ) => React.MouseEventHandler<HTMLDivElement> | undefined;
  viewIndex: number;
};

const ButtonActions: React.FC<ButtonActionsProps> = ({ moveTo, viewIndex }) => {
  return (
    <ScrollButtonActions>
      {getArray(3).map((_, i) => (
        <Circle
          key={i}
          onClick={moveTo(i)}
          className={viewIndex === i ? "fill" : ""}
        />
      ))}
    </ScrollButtonActions>
  );
};

export default ButtonActions;
