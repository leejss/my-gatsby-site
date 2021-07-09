import React, { FC } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/globalStyles";
import { theme } from "../styles/theme";
import Particles from "../components/Particles";
import Navigation from "../components/Navigation/Navigation";
import { MoveProvider, useMove } from "../contexts/useMove";

const LayoutBody: FC = ({ children }) => {
  const { move } = useMove();
  return (
    <ThemeProvider theme={theme}>
      <Particles move={move} />
      <GlobalStyle />
      <main role="main">{children}</main>
      <Navigation />
    </ThemeProvider>
  );
};

const Layout: FC = ({ children }) => {
  return (
    <MoveProvider>
      <LayoutBody>{children}</LayoutBody>
    </MoveProvider>
  );
};

export default Layout;
