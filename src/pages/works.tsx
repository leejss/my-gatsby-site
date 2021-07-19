import React from "react";
import Head from "../components/Head";
import Works from "../components/Works/";
import { Opaque } from "../styles/Common";

const WorksPage: React.FC = () => {
  return (
    <>
      <Head
        title="Works"
        lang="kor"
        keywords={["gatsby", "typescript", "react", "portfolio"]}
      />
      <Opaque />
      <section>
        <Works />
      </section>
    </>
  );
};

export default WorksPage;
