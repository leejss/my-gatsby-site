import React from "react";
import styled from "styled-components";
import { Centered } from "../../styles/Common";
import { ContactQueryData } from "../../types";
import { SiGmail } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
type ContactProps = {
  data: ContactQueryData;
};

const ContactWrapper = styled.div`
  ul > li {
    margin: 10px;
  }

  ul > li > a {
    margin-left: 10px;
  }
`;

const Contact: React.FC<ContactProps> = ({ data }) => {
  const email = data.site.siteMetadata.author.email;
  const github = data.site.siteMetadata.author.github;
  return (
    <Centered>
      <ContactWrapper>
        <ul>
          <li>
            <SiGmail />
            <a href={email}>{email}</a>
          </li>
          <li>
            <AiFillGithub />
            <a href={github}>{github}</a>
          </li>
        </ul>
      </ContactWrapper>
    </Centered>
  );
};

export default Contact;
