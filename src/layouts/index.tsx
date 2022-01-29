import React from "react";
import { ThemeProvider } from "styled-components";
import { Navigation } from "../components";
import { GlobalStyle } from "../styles/globalStyles";
import { theme } from "../styles/theme";
import { MoveProvider } from "../contexts/useMove";

const Layout: React.FC = ({ children }) => {
  return (
    <MoveProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <main>{children}</main>
        <Navigation />
      </ThemeProvider>
    </MoveProvider>
  );
};

export default Layout;
