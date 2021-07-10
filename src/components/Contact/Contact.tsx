import type { FC } from "react";
import React from "react";
import styled from "styled-components";
import { IContactInfo } from "../../type";
import Wrapper from "../Wrapper";
import { SiGmail } from "react-icons/si";
import { AiOutlineMail, AiFillGithub } from "react-icons/ai";
import { theme } from "../../styles/theme";

type ContactProps = {
  data: IContactInfo;
};

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const ContactInfo = styled.div`
  line-height: 1.5;
  margin-bottom: 1%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${theme.fontSizes.medium};

  a {
    margin-left: 10px;
  }
`;

const Contact: FC<ContactProps> = ({ data }) => {
  const naver = data.markdownRemark.frontmatter.naver;
  const github = data.markdownRemark.frontmatter.github;
  const gmail = data.markdownRemark.frontmatter.gmail;
  return (
    <Wrapper opaque fullHeight fullWidth>
      <ContactWrapper>
        <ContactInfo>
          <SiGmail />
          <a href={`mailto:${gmail}`}>{gmail}</a>
        </ContactInfo>
        <ContactInfo>
          <AiOutlineMail />
          <a href={`mailto:${naver}`}>{naver}</a>
        </ContactInfo>
        <ContactInfo>
          <AiFillGithub />
          <a href={github} target="_blank" rel="noreferrer">
            {github}
          </a>
        </ContactInfo>
      </ContactWrapper>
    </Wrapper>
  );
};

export default Contact;
