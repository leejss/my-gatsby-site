import Link from "next/link";
import React from "react";
import styles from "./Part.module.scss";

const Header = () => {
  return (
    <header className={styles.Header}>
      <h1>
        <Link href="/">Thisisleejss</Link>
      </h1>
    </header>
  );
};

export default Header;
