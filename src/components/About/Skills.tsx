import React from "react";
import styled from "styled-components";
import { BackendIcons, FrontendIcons, LanguageIcons } from "./SkillsIcons";

const SkillsWrapper = styled.div`
  width: 50%;
  border-radius: 10px;
  margin-top: 15px;
  background-color: rgba(255, 255, 255, 0.094);
  padding: 10px;

  ${(props) => props.theme.media.max.sm`
    width: 100%;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 0;


    div > h2 {
      font-size: 1rem;
      text-align: center;
    }

    img {
      max-width: 30px;
      max-height: 30px;
    }
  `}

  div > h2 {
    font-size: ${(props) => props.theme.fontSizes.medium};
    margin: 10px;
  }
`;

const Skills: React.FC = () => {
  return (
    <SkillsWrapper>
      <div>
        <h2>Language</h2>
        <LanguageIcons />
      </div>
      <div>
        <h2>Frontend</h2>
        <FrontendIcons />
      </div>
      <div>
        <h2>Backend</h2>
        <BackendIcons />
      </div>
    </SkillsWrapper>
  );
};

export default Skills;
