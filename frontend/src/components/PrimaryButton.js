import React from "react";
import styled from "styled-components";

const PrimaryButton = ({ title }) => {
  return <ButtonStyle>{title}</ButtonStyle>;
};

const ButtonStyle = styled.a`
  padding: 1rem 2rem;
  background-color: var(--blue-color);
  position: relative;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 10%;
    background-color: var(--white-color);
    transition: all 0.5s ease-in-out;
  }

  &:hover::after {
    width: 100%;
    background-color: var(--white-color);
  }
`;

export default PrimaryButton;
