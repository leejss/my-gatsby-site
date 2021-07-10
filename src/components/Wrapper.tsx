import styled from "styled-components";

type WrapperProps = {
  fullHeight?: boolean;
  midlleHeight?: boolean;
  fullWidth?: boolean;
  middleWidth?: boolean;
  opaque?: boolean;
};

const Wrapper = styled.section<WrapperProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${(props) =>
    props.fullWidth ? "100%" : props.middleWidth ? "60%" : "auto"};
  height: ${(props) =>
    props.fullHeight ? "100%" : props.midlleHeight ? "60%" : "auto"};

  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 1%;
  z-index: 1;
  background: ${(props) => props.opaque && `rgba(0,0,0,0.3)`};
`;

export default Wrapper;
