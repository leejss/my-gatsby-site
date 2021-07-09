import React, { useEffect } from "react";
import type { FC } from "react";
import Works from "./Works";
import { useMove } from "../../contexts/useMove";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { IWorks } from "../../type";

// const workList: Work[] = [
//   {
//     title: "Netflix Clone",
//     repoUrl: "https://github.com/leejss/netflix-clone",
//     desc: "React와 Firebase를 활용한 Netflix Clone Project",
//     skillStack: ["React", "Firebase", "CSS"],
//     thumbnail:
//       "https://www.notion.so/TIL-b7c4264337de42f3a7e42d22a23e708e#f5737e3a6ac24c19869d94c004ea228d",
//   },
//   {
//     title: "Starbucks Homepage clone",
//     repoUrl: "https://github.com/leejss/starbucks-landing",
//     desc: "HTML, CSS, Vanilla Javascript를 활용한 스타벅스 홈페이지 클론 프로젝트",
//     skillStack: ["HTML", "CSS", "Javscript"],
//   },
//   {
//     title: "React Blog",
//     repoUrl: "https://github.com/leejss/react-blog-app",
//     desc: "Express, React를 활용한 풀스택 웹프로젝트",
//     skillStack: [
//       "React",
//       "Express",
//       "Mongodb",
//       "Styled-components",
//       "Redux",
//       "Redux-saga",
//     ],
//   },
// ];

const WorksContainer: FC = () => {
  const { setMove } = useMove();
  useEffect(() => {
    setMove(false);
  }, []);
  const data: IWorks = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { frontmatter: { id: { eq: "works" } } }) {
        edges {
          node {
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  return <Works data={data} />;
};

export default WorksContainer;
