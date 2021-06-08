import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Card from "../components/Card";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";

const AboutPage = () => {
  return (
    <AboutContainer>
      <Helmet>
        <title>About - Portfolio</title>
      </Helmet>
      <Title title={"About Me"} />
      <div className="about">
        <div className="left">
          <img src="/images/my-pic2.jpg" alt="about-pic" />
        </div>
        <div className="right">
          <h1>I'am Suresh Thapa</h1>
          <p className="about-p">
            I am Cisco and Juniper network engineeer. Working knowledge in Cisco
            and Juniper switches routers, Sonicwall Firewall Server 2008 to 2016
            (Active Directory, DNS, DHCP, Radius CA) Network automation using
            Python Nornir and Netmiko. Extra Skill : HTML, CSS, Javascript,
            Python, NodeJS, ReactJS, ExpressJS, MongoDB.
          </p>
          <div className="about-details">
            <div className="info-title">
              <p>Full Name</p>
              <p>Nationality</p>
              <p>Experience</p>
              <p>Job Title</p>
            </div>
            <div className="info">
              <p>:Suresh Thapa</p>
              <p>:Indian</p>
              <p>:10+ Years</p>
              <p>:Network Engineer</p>
            </div>
          </div>
          <PrimaryButton title={"Download CV"} />
        </div>
      </div>

      <div className="services">
        <Title title={"Services"} />
        <div className="cards">
          <Card
            title={"Website Design"}
            image={"earth.svg"}
            text={"Web devlopment using HTML, CSS and Javascript."}
          />
          <Card
            title={"Python"}
            image={"python.svg"}
            text={
              "Network Automation using Nornir, Netmiko and Scripli. Web devlopment using Django framework."
            }
          />
          <Card
            title={"NodeJS"}
            image={"node-js.svg"}
            text={
              "Full stack web devlopment using NodeJS Frameworks like MERN (MongoDb, Express, React and NodeJs)."
            }
          />
          <Card
            title={"ReactJS"}
            image={"react-js.svg"}
            text={"Frontend Development design with ReactJS"}
          />
          <Card
            title={"Networking"}
            image={"network-pc.svg"}
            text={
              "All kind of network design campus, enterprise and small network using Cisco, Juniper and other devices."
            }
          />
        </div>
      </div>
    </AboutContainer>
  );
};

const AboutContainer = styled.section`
  height: 100vh;
  padding: 2rem;

  /* About Section */
  .about {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;

    .left {
      opacity: 0;
      transform: translateX(-200px);
      animation: slide 2s ease forwards;
      img {
        width: 80%;
        border-radius: 1rem;
      }
    }

    .right {
      color: var(--white-color);
      transform: translateX(250px);
      animation: slide 2s ease-in-out forwards;
      h1 {
        font-size: 1.5rem;
        letter-spacing: 1px;
      }

      .about-p {
        margin: 1rem 0;
        letter-spacing: 1px;
      }

      p {
        margin: 0.3rem 0;
        letter-spacing: 1px;
      }
    }

    .about-details {
      display: flex;
      margin-bottom: 1.5rem;

      .info {
        margin-left: 2rem;
      }
    }

    @media screen and (max-width: 1000px) {
      grid-template-columns: 1fr;
      .left {
        text-align: center;
        img {
          width: 40%;
        }
      }
    }
  }

  /* Services Section */
  .services {
    margin-top: 4rem;
    .cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 1000px) {
      .cards {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media screen and (max-width: 700px) {
      .cards {
        grid-template-columns: 1fr;
        justify-items: center;
      }
    }
  }
`;

export default AboutPage;
