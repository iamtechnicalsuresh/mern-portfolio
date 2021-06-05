import React from "react";
import styled from "styled-components";

const Title = ({ title }) => {
  return (
    <TitleStyle>
      <h1>{title}</h1>
    </TitleStyle>
  );
};

const TitleStyle = styled.div`
  color: var(--black-color);
  font-size: 1.5rem;
  position: relative;
  width: max-content;
  margin-bottom: 2rem;
  &::after {
    content: "";
    position: absolute;
    left: 20%;
    bottom: -10px;
    width: 60%;
    height: 25%;
    background-color: var(--white-color);
    border-radius: 5px;
  }
`;

export default Title;
