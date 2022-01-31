import type { FC } from "react";
import React from "react";
import { Header, Navigation } from "./Part";
import styles from "./Layout.module.scss";

const Layout: FC = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <Header />
      <Navigation />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
