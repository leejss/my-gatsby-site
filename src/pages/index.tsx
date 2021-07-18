import React from "react";
import Head from "../components/Head";
import Home from "../components/Home";

const IndexPage: React.FC = () => {
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
