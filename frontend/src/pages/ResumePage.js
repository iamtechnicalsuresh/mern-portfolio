import React from "react";
import styled from "styled-components";
import Skills from "../components/Skills";

const ResumePage = () => {
  return (
    <ResumeStyle>
      <Skills />
      <div className="resume"></div>
    </ResumeStyle>
  );
};

const ResumeStyle = styled.div`
  padding: 2rem;
  opacity: 0;
  transform: translateY(200px);
  animation: slide ease 1s forwards;
`;

export default ResumePage;
