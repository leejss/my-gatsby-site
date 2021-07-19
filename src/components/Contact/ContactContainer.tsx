import { graphql, useStaticQuery } from "gatsby";
import React, { useEffect } from "react";
import { useMove } from "../../contexts/useMove";
import { ContactQueryData } from "../../types";
import Contact from "./Contact";

const ContactContainer: React.FC = () => {
  const { setMove } = useMove();
  useEffect(() => {
    setMove(false);
  }, []);
  const data: ContactQueryData = useStaticQuery(graphql`
    query ContactQuery {
      site {
        siteMetadata {
          author {
            github
            email
          }
        }
      }
    }
  `);
  return <Contact data={data} />;
};

export default ContactContainer;
