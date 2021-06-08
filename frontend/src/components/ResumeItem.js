import React from "react";
import styled from "styled-components";

const ResumeItem = ({ year, title, subTitle, text }) => {
  return (
    <ResumeItemStyle>
      <div className="left-content">
        <h2>{year}</h2>
      </div>
      <div className="right-content">
        <h3>{title}</h3>
        <h4>{subTitle}</h4>
        <p>{text}</p>
      </div>
    </ResumeItemStyle>
  );
};

const ResumeItemStyle = styled.div`
  display: flex;
  margin-bottom: 1rem;

  .left-content {
    width: 50%;
    padding-left: 2rem;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      left: -13px;
      right: 0;
      top: 0;
      bottom: 0;
      width: 1.5rem;
      height: 1.5rem;
      background-color: black;
      border-radius: 50%;
    }
  }

  .right-content {
    padding: 0 1rem;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 0.8rem;
      background-color: black;
    }

    h4 {
      margin: 0.5rem 0;
    }
  }
`;

export default ResumeItem;
