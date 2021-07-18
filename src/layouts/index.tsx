import React, { FC } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/globalStyles";
import { theme } from "../styles/theme";
import Navigation from "../components/Navigation/Navigation";

const LayoutWrapper: FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main role="main">{children}</main>
      <Navigation />
    </ThemeProvider>
  );
};

const Layout: FC = ({ children }) => {
  return <LayoutWrapper>{children}</LayoutWrapper>;
};

export default Layout;
