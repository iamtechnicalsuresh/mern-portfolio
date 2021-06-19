import React from "react";
import styled from "styled-components";

const Card = ({ title, image, text }) => {
  return (
    <CardStyle>
      <img src={`/images/${image}`} alt="svg" />
      <div className="card-info">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </CardStyle>
  );
};

const CardStyle = styled.div`
  width: 15rem;
  min-height: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.8rem;
  margin: 2rem 1rem;
  border-radius: 0.2rem;
  box-shadow: 0px 2px 4px;
  transition: transform 0.5s ease;
  cursor: pointer;
  position: relative;
  /* opacity: 0; */
  /* transform: translateY(100px);
  animation: slide ease 1s forwards; */

  &:hover {
    transform: translateY(-4px);
  }

  &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 0;
        height: 0.5rem;
        background-color: var(--blue-color);
        border-radius: 0.2rem;
        transition: all 0.5s ease;
      }

      &:hover::after {
        width: 100%;
      }
    }

  img {
    width: 40%;
    margin-bottom: 0.5rem;
  }

  .card-info {
    h2 {
      margin: 0.5rem 0;  
      color: var(--white-color);
  }
`;

export default Card;
