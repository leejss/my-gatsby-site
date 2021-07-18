import React from "react";
import Head from "../components/Head";
import Layout from "../components/Layout";
import Home from "../components/Home";

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <Head
        title="Home"
        image="/images/main.PNG"
        lang="kor"
        keywords={["gatsby", "typescript", "react", "portfolio"]}
      />
      <section>
        <Home />
      </section>
    </Layout>
  );
};

export default IndexPage;
