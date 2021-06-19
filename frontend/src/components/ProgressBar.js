import React from "react";
import styled from "styled-components";

const ProgressBar = ({ title, text, width }) => {
  return (
    <ProgressBarStyle>
      <h4>{title}</h4>
      <div className="progress-bar">
        <p>{text}</p>
        <div className="progress">
          <span style={{ width: width }}></span>
        </div>
      </div>
    </ProgressBarStyle>
  );
};

const ProgressBarStyle = styled.div`
  box-shadow: 0px 1px 1px;
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 2px;
  .progress-bar {
    display: flex;
    align-items: center;
    margin: 1rem 1.5rem 1.5rem 0;
    .progress {
      width: 100%;
      height: 0.5rem;
      background-color: white;
      position: relative;
      margin-left: 1rem;
      border-radius: 4px;
      span {
        background-color: blue;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 4px;
      }
    }
  }
`;

export default ProgressBar;
