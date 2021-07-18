import React from "react";
import Head from "../components/Head";
import Layout from "../components/Layout";

const NotFoundPage: React.FC = () => {
  return (
    <Layout>
      <Head
        title="404"
        lang="kor"
        keywords={["gatsby", "typescript", "react", "portfolio"]}
      />
      <section>
        <h1>Not Found</h1>
      </section>
    </Layout>
  );
};

export default NotFoundPage;
