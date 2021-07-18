import React from "react";
import Head from "../components/Head";
import Works from "../components/Works/";

const WorksPage: React.FC = () => {
  return (
    <>
      <Head
        title="Home"
        lang="kor"
        keywords={["gatsby", "typescript", "react", "portfolio"]}
      />
      <section>
        <Works />
      </section>
    </>
  );
};

export default WorksPage;
