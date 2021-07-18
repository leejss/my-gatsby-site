import React from "react";
import Head from "../components/Head";

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Head
        title="404"
        lang="kor"
        keywords={["gatsby", "typescript", "react", "portfolio"]}
      />
      <section>
        <h1>Not Found</h1>
      </section>
    </>
  );
};

export default NotFoundPage;
