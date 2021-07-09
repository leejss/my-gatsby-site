import { FC } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/globalStyles";
import { theme } from "../styles/theme";
import Navigation from "./Navigation/Navigation";
import React from "react";
import Particles from "./Particles";

const Layout: FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Particles />
      <GlobalStyle />
      <main role="main">{children}</main>
      <Navigation />
    </ThemeProvider>
  );
};

export default Layout;
