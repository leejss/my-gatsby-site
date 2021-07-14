import React from "react";
import type { FC } from "react";
import { Helmet } from "react-helmet";

type HeadProps = {
  readonly title: string;
};

const Head: FC<HeadProps> = ({ title }) => {
  return <Helmet title={title} />;
};

export default Head;
