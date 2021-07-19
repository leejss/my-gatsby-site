import React from "react";
import { useEffect } from "react";
import { useMove } from "../../contexts/useMove";
import About from "./About";

const AboutContainer: React.FC = () => {
  const { setMove } = useMove();
  useEffect(() => {
    setMove(false);
  }, []);
  return <About />;
};

export default AboutContainer;
