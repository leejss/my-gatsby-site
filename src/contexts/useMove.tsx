import React, { createContext, useContext, useState } from "react";
import type { FC } from "react";

type contextType = {
  move?: boolean;
  setMove: (flag: boolean) => void;
};

const defaultContext = {
  setMove: (flag: boolean) => {
    !flag;
  },
};

const moveContext = createContext<contextType>(defaultContext);

export const MoveProvider: FC = ({ children }) => {
  const [move, setMove] = useState<boolean>(true);
  const value = {
    move,
    setMove,
  };

  return <moveContext.Provider value={value}>{children}</moveContext.Provider>;
};

export const useMove = () => {
  const context = useContext(moveContext);

  return context;
};
