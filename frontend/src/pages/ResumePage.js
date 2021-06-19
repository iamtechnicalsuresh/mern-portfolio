import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import ResumeItem from "../components/ResumeItem";
import Skills from "../components/Skills";

const ResumePage = () => {
  return (
    <ResumeStyle>
      <Helmet>
        <title>Resume - Portfolio</title>
      </Helmet>

      <Skills />

      <div className="title-small">
        <i className="fas fa-briefcase" /> <h4>Work Experience</h4>
      </div>
      <div className="resume-content">
        <ResumeItem
          year={"2011-12"}
          title={"Nexus Computers"}
          subTitle={"Desktop Support Engineer"}
          text={
            "This is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
          }
        />
        <ResumeItem
          year={"2011-2021"}
          title={"The Mann School"}
          subTitle={"Network Engineer"}
          text={
            "This is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
          }
        />
        <ResumeItem />
      </div>

      <div className="title-small">
        <i className="fas fa-user-graduate" /> <h4>Education</h4>
      </div>
      <div className="resume-content">
        <ResumeItem
          year={"2013-14"}
          title={"Computer Science"}
          subTitle={"MGU University"}
          text={
            "This is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
          }
        />
        <ResumeItem
          year={"2010-11"}
          title={"Oxford Software Institute"}
          subTitle={"CCNA and MSCE"}
          text={
            "This is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
          }
        />
        <ResumeItem />
      </div>
    </ResumeStyle>
  );
};

const ResumeStyle = styled.div`
  padding: 2rem;
  opacity: 0;
  transform: translateY(200px);
  animation: slide ease 1s forwards;

  .title-small {
    display: flex;
    align-items: center;
    margin-top: 5rem;
    margin-bottom: 2rem;
    font-size: 1.5rem;
    color: var(--white-color);
    h4 {
      margin-left: 2rem;
    }
  }

  .resume-content {
    border-left: 2px solid var(--white-color);
  }
`;

export default ResumePage;
