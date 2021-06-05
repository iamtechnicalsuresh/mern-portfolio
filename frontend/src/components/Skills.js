import React from "react";
import styled from "styled-components";
import Title from "./Title";
import ProgressBar from "./ProgressBar";

const Skills = () => {
  return (
    <>
      <Title title={"My Skills"} />
      <SkillsStyle>
        <ProgressBar title={"HTML5"} text={"70%"} width={"70%"} />
        <ProgressBar title={"CSS"} text={"50%"} width={"50%"} />
        <ProgressBar title={"Javascript"} text={"60%"} width={"60%"} />
        <ProgressBar title={"Python"} text={"70%"} width={"70%"} />
        <ProgressBar title={"ReactJS"} text={"65%"} width={"65%"} />
        <ProgressBar title={"ExpressJS"} text={"75%"} width={"75%"} />
      </SkillsStyle>
    </>
  );
};

const SkillsStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 5rem;

  @media screen and (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;

export default Skills;
