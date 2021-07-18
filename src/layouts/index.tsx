import React from "react";
import { ThemeProvider } from "styled-components";
import Navigation from "../components/Navigation";
import Particles from "../components/Background/Particles";
import { GlobalStyle } from "../styles/globalStyles";
import { theme } from "../styles/theme";
import Background from "../components/Background/Background";

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Background />
      <GlobalStyle />
      <main>{children}</main>
      <Navigation />
    </ThemeProvider>
  );
};

export default Layout;
