import React from "react";
import { ThemeProvider } from "styled-components";
import { Navigation } from "../components";
import { GlobalStyle } from "../styles/globalStyles";
import { theme } from "../styles/theme";
import { MoveProvider } from "../contexts/useMove";
import Background from "../components/Background/Background";

const Layout: React.FC = ({ children }) => {
  return (
    <MoveProvider>
      <ThemeProvider theme={theme}>
        <Background />
        <GlobalStyle />
        <main>{children}</main>
        <Navigation />
      </ThemeProvider>
    </MoveProvider>
  );
};

export default Layout;
