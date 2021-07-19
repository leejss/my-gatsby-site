import React from "react";
import { ThemeProvider } from "styled-components";
import Navigation from "../components/Navigation";
import { GlobalStyle } from "../styles/globalStyles";
import { theme } from "../styles/theme";
import Background from "../components/Background/Background";
import { MoveProvider } from "../contexts/useMove";

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
