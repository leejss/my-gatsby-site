import styled from "styled-components";

export const MenuWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  // 1rem = 16px
  padding: 2rem 3rem;

  /* Media Query */
  ${(props) => props.theme.media.max.md`
    padding: 1rem 1.5rem;
    display: flex;
    justify-content: center;
    background: #090f17;
    right: 0;
    width: 100%;
  `}
`;

export const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 50%;
  max-width: 14rem;

  /* Media Query */
  ${(props) => props.theme.media.max.md`
   display: flex;
   justify-content: center;
  `}
`;

export const MenuItem = styled.li`
  padding: 1rem;
  font-size: ${(props) => props.theme.fontSizes.normal};

  /* Media Query */
  ${(props) => props.theme.media.max.md`
    font-size: 0.825rem;
  `}
`;
