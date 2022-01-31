import Link from "next/link";
import React from "react";
import styles from "./Part.module.scss";

const Navigation = () => {
  return (
    <nav className={styles.Navigation}>
      <Link href="/posts">Post</Link>
    </nav>
  );
};

export default Navigation;
