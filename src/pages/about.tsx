import React from "react";
import Head from "../components/Head";
import About from "../components/About";

const AboutPage: React.FC = () => {
  return (
    <>
      <Head
        title="About"
        lang="kor"
        keywords={["gatsby", "typescript", "react", "portfolio"]}
      />
      <section>
        <About />
      </section>
    </>
  );
};

export default AboutPage;
