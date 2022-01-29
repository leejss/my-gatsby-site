import { Link } from "gatsby";
import React from "react";
import { MenuItem, MenuList, MenuWrapper } from "./Styled";

const Navigation: React.FC = () => {
  return (
    <nav>
      <MenuWrapper>
        <MenuList>
          <MenuItem>
            <Link to={`/`} activeStyle={{ color: "#47eb5d" }}>
              INDEX
            </Link>
          </MenuItem>
          <MenuItem>
            <a
              href="https://leejss.github.io/"
              target="_blank"
              rel="noreferrer"
            >
              POSTS
            </a>
          </MenuItem>
        </MenuList>
      </MenuWrapper>
    </nav>
  );
};

export default Navigation;
