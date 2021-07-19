import React from "react";
import Contact from "../components/Contact";
import Head from "../components/Head";
import { Opaque } from "../styles/Common";

const ContactPage: React.FC = () => {
  return (
    <>
      <Head
        title="Contact"
        lang="kor"
        keywords={["gatsby", "typescript", "react", "portfolio"]}
      />
      <Opaque />
      <section>
        <Contact />
      </section>
    </>
  );
};

export default ContactPage;
