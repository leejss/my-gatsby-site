import React, { useEffect } from "react";
import Head from "../components/Head";
import Home from "../components/Home";
import { useMove } from "../contexts/useMove";

const IndexPage: React.FC = () => {
  const { setMove } = useMove();
  useEffect(() => {
    setMove(true);
  }, []);
  return (
    <>
      <Head
        title="Home"
        image="/images/main.PNG"
        lang="kor"
        keywords={["gatsby", "typescript", "react", "portfolio"]}
      />
      <section>
        <Home />
      </section>
    </>
  );
};

export default IndexPage;
