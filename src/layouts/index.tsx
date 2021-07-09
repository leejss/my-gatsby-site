import { FC } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/globalStyles";
import { theme } from "../styles/theme";
import React from "react";
import Particles from "../components/Particles";
import Navigation from "../components/Navigation/Navigation";

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
