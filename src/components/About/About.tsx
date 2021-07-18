import React from "react";
import { Centered } from "../../styles/Common";
import Introduce from "./Introduce";
import Skills from "./Skills";

const About: React.FC = () => {
  return (
    <Centered>
      <Introduce />
      <Skills />
    </Centered>
  );
};

export default About;
