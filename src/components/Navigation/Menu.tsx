import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const MenuWrapper = styled.div`
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

const MenuList = styled.ul`
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

const MenuItem = styled.li`
  padding: 1rem;
  font-size: ${(props) => props.theme.fontSizes.normal};

  /* Media Query */
  ${(props) => props.theme.media.max.md`
    font-size: 0.825rem;
  `}
`;

const Menu: React.FC = () => {
  const pages = ["about", "works"];
  return (
    <MenuWrapper>
      <MenuList>
        <MenuItem>
          <Link to={`/`} activeStyle={{ color: "#47eb5d" }}>
            INDEX
          </Link>
        </MenuItem>
        {pages.map((page) => (
          <MenuItem key={page}>
            <Link to={`/${page}`} activeStyle={{ color: "#47eb5d" }}>
              {page.toUpperCase()}
            </Link>
          </MenuItem>
        ))}
        <MenuItem>
          <a href="https://leejss.github.io/" target="_blank" rel="noreferrer">
            POSTS
          </a>
        </MenuItem>
      </MenuList>
    </MenuWrapper>
  );
};

export default Menu;
