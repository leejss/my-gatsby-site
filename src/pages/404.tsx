import type { FC } from "react";
import React from "react";
import Head from "../components/Head";
import Wrapper from "../components/Wrapper";

const NotFound: FC = () => {
  return (
    <>
      <Head title="Not Found" />
      <Wrapper fullHeight fullWidth>
        Page Not Found
      </Wrapper>
    </>
  );
};

export default NotFound;
