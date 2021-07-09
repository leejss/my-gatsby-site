import type { FC } from "react";
import { theme } from "../../styles/theme";
import styled from "styled-components";
import { Link } from "gatsby";
import React from "react";

const MenuWrapper = styled.nav`
  position: fixed;
  bottom: 6%;
  left: 3%;
  /* transform: translateY(-50%); */
  width: 10%;
  display: flex;
  align-items: flex-end;
  padding: ${theme.spaces.p200};
  z-index: 10;
`;

const Nav = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  padding: 0.5rem 0;
  line-height: 1em;
  &:last-child {
    padding-bottom: 0;
  }
`;

const StyledNavlink = styled(Link)`
  font-size: ${(props) => props.theme.fontSizes.regular};
  font-weight: ${(props) => props.theme.fontWeights.regular};

  &:hover {
    color: ${(props) => props.theme.colors.lightest};
    font-weight: ${(props) => props.theme.fontWeights.bold};
  }
`;

const StyledAnchor = styled.a`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: ${(props) => props.theme.fontWeights.regular};

  &:hover {
    color: ${(props) => props.theme.colors.lightest};
    font-weight: ${(props) => props.theme.fontWeights.bold};
  }
`;
const pages = ["about", "works", "contact"];
const Menu: FC = () => {
  return (
    <MenuWrapper>
      <Nav>
        <NavItem>
          <StyledNavlink activeStyle={{ color: "#fa4a4a" }} to="/">
            HOME
          </StyledNavlink>
        </NavItem>
        {pages.map((p) => (
          <NavItem key={p}>
            <StyledNavlink activeStyle={{ color: "#fa4a4a" }} to={`/${p}`}>
              {p.toUpperCase()}
            </StyledNavlink>
          </NavItem>
        ))}
        <NavItem>
          <StyledAnchor href="https://leejss.github.io/">POSTS</StyledAnchor>
        </NavItem>
      </Nav>
    </MenuWrapper>
  );
};

export default Menu;
