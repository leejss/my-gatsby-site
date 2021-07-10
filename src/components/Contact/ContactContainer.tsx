import { FC, useEffect } from "react";
import React from "react";
import { useMove } from "../../contexts/useMove";
import Contact from "./Contact";
import { graphql, useStaticQuery } from "gatsby";
import { IContactInfo } from "../../type";

const ContactContainer: FC = () => {
  // remove eventListener
  const { setMove } = useMove();
  useEffect(() => {
    setMove(false);
  }, []);
  const data: IContactInfo = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "contact" } }) {
        frontmatter {
          github
          naver
          gmail
        }
      }
    }
  `);
  return <Contact data={data} />;
};

export default ContactContainer;
