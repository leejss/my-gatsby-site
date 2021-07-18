import React from "react";
import Head from "../components/Head";
import Layout from "../components/Layout";
import About from "../components/About";

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <Head
        title="About"
        lang="kor"
        keywords={["gatsby", "typescript", "react", "portfolio"]}
      />
      <section>
        <About />
      </section>
    </Layout>
  );
};

export default AboutPage;
