import React from "react";
import Head from "../components/Head";
import Layout from "../components/Layout";
import Works from "../components/Works/";

const WorksPage: React.FC = () => {
  return (
    <Layout>
      <Head
        title="Home"
        lang="kor"
        keywords={["gatsby", "typescript", "react", "portfolio"]}
      />
      <section>
        <Works />
      </section>
    </Layout>
  );
};

export default WorksPage;
