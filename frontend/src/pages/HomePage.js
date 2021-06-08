import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <HomeContainer>
      <Helmet>
        <title>Home - Portfolio</title>
      </Helmet>
      <div className="content-left">
        <h2>Hello</h2>
        <h1>
          I'am <span>S</span>uresh <span>T</span>hapa
        </h1>
        <h2>
          <span>N</span>etwork <span>E</span>ngineer
        </h2>
        <div className="social-icons">
          <a href="https://facebook.com/suresh99thapa" target="__">
            <i className="fab fa-facebook" />
          </a>
          <a href="https://twiter.com" target="__">
            <i className="fab fa-twitter" />
          </a>
          <a href="https://github.com" target="__">
            <i className="fab fa-github" />
          </a>
          <a href="https://youtube.com" target="__">
            <i className="fab fa-youtube" />
          </a>
        </div>
        <Link to="/contact" className="btn btn-transparent">
          Contact
        </Link>
      </div>
      <div className="content-right">
        <img src="/images/my-pic.jpg" alt="profile_pic" />
      </div>
    </HomeContainer>
  );
};

const HomeContainer = styled.section`
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  z-index: 1;
  overflow-x: hidden;

  .content-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    letter-spacing: 2px;
    opacity: 0;
    transform: translateX(-250px);
    animation: slide 2s ease-in-out forwards;

    h2 {
      font-size: 1.5rem;
      &:nth-child(1) {
        opacity: 0;
        transform: translateX(-250px);
        animation: slide 4s ease-in-out forwards;
      }
      span {
        color: white;
        font-size: 2rem;
      }
    }

    h1 {
      font-size: 2rem;
      margin: 0.5rem 0;
      position: relative;

      span {
        color: white;
        font-size: 2.8rem;
      }

      &::after,
      &::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }

      &::before {
        background: var(--state-blue-color);
        animation: typewriter 2s steps(18) 2s forwards;
      }
    }
    .social-icons {
      font-size: 2rem;

      a {
        margin: 0.5rem;

        i {
          color: var(--white-color);
          padding: 0.5rem;
          transition: all 0.5s ease;

          &:hover {
            border-radius: 50%;
            background-color: var(--blue-color);
          }
        }
      }
    }
    .btn {
      width: 7rem;
      text-decoration: none;
      padding: 0.5rem 1rem;
      margin-top: 1rem;
    }
  }

  .content-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transform: translateX(250px);
    animation: slide ease 2s forwards;

    img {
      border-radius: 50%;
      width: 20rem;
      border: solid 1px var(--white-color);
      transition: transform 0.5s ease-in;
      &:hover {
        transform: scale(1.1);
      }
    }
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    .content-left {
      order: 2;
    }
    .content-right {
      order: 1;

      img {
        width: 12rem;
      }
    }
  }
`;

export default HomePage;
