import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const width = 40;
const height = 40;

export const LanguageIcons: React.FC = () => {
  return (
    <>
      <StaticImage
        as="div"
        src="../../../static/images/icons/icon_python.png"
        alt="typescript"
        layout="constrained"
        width={width}
        height={height}
      />
      <StaticImage
        as="div"
        src="../../../static/images/icons/icon_javascript.png"
        alt="typescript"
        layout="constrained"
        width={width}
        height={height}
      />
      <StaticImage
        as="div"
        src="../../../static/images/icons/icon_typescript.png"
        alt="typescript"
        layout="constrained"
        width={width}
        height={height}
      />
    </>
  );
};

export const FrontendIcons: React.FC = () => {
  return (
    <>
      <StaticImage
        as="div"
        src="../../../static/images/icons/icon_react.png"
        alt="typescript"
        layout="constrained"
        width={width}
        height={height}
      />
      <StaticImage
        as="div"
        src="../../../static/images/icons/icon_redux.png"
        alt="typescript"
        layout="constrained"
        width={width}
        height={height}
      />
    </>
  );
};

export const BackendIcons: React.FC = () => {
  return (
    <>
      <StaticImage
        as="div"
        src="../../../static/images/icons/icon_nodejs.png"
        alt="typescript"
        layout="constrained"
        width={width}
        height={height}
      />
      <StaticImage
        as="div"
        src="../../../static/images/icons/icon_firebase.png"
        alt="typescript"
        layout="constrained"
        width={width}
        height={height}
      />
      <StaticImage
        as="div"
        src="../../../static/images/icons/icon_mongodb.png"
        alt="typescript"
        layout="constrained"
        width={width}
        height={height}
      />
    </>
  );
};
