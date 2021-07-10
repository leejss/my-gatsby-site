import React from "react";

export const iconGenerator = (skill: string) => {
  switch (skill) {
    case "Python":
      return (
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
          alt="python"
          width="40"
          height="40"
        />
      );
    case "Javascript":
      return (
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
          alt="javascript"
          width="40"
          height="40"
        />
      );
    case "Typescript":
      return (
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
          alt="typescript"
          width="40"
          height="40"
        />
      );
    case "React":
      return (
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
          alt="react"
          width="40"
          height="40"
        />
      );
    case "Redux":
      return (
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
          alt="redux"
          width="40"
          height="40"
        />
      );
    case "Git":
      return (
        <img
          src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
          alt="git"
          width="40"
          height="40"
        />
      );
    case "Scss":
      return (
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
          alt="sass"
          width="40"
          height="40"
        />
      );
    case "Firebase":
      return (
        <img
          src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
          alt="firebase"
          width="40"
          height="40"
        />
      );
    case "Express":
      return (
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
          alt="express"
          width="40"
          height="40"
        />
      );
    case "Nodejs":
      return (
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
          alt="nodejs"
          width="40"
          height="40"
        />
      );
    case "Graphql":
      return (
        <img
          src="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg"
          alt="graphql"
          width="40"
          height="40"
        />
      );
    case "Mongodb":
      return (
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
          alt="mongodb"
          width="40"
          height="40"
        />
      );
    default:
      return ``;
  }
};
