import { FC, useEffect } from "react";
import React from "react";
import Title from "./Title";
import { useMove } from "../contexts/useMove";

const Home: FC = () => {
  const { setMove } = useMove();
  useEffect(() => {
    setMove(true);
  }, []);
  return <Title title="Hi, I am Lee Jongseo. a Software Developer" />;
};

export default Home;
