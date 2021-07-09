import React from "react";
import type { FC } from "react";
import { IWork, IWorks } from "../../type";
import Item from "../Item/Item";

type WorksProps = {
  data: IWorks;
};

const Works: FC<WorksProps> = ({ data }) => {
  const workList: IWork[] = data.allMarkdownRemark.edges;
  return (
    <>
      {workList.map((work: IWork) => {
        return <Item key={work.node.id} work={work} />;
      })}
    </>
  );
};

export default Works;
