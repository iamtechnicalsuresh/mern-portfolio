import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Title from "../components/Title";

const ContactPage = ({ history }) => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [purpose, setPurpose] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const configs = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      await axios.post(
        "/api/contact",
        { fullname, email, mobile, purpose, message },
        configs
      );
      toast.success("We will contact you soon.", { position: "top-center" });
      history.push("/");
    } catch (error) {
      // console.log(error.response.data.message);
      toast.error(error.response.data.message, { position: "top-center" });
    }
  };

  return (
    <ContactStyle>
      <Helmet>
        <title>Contact - Portfolio</title>
      </Helmet>

      <Title title={"Contact Us"} />
      <form className="form-container" onSubmit={submitHandler}>
        <div>
          {/* <label>Full Name</label> */}
          <input
            type="text"
            value={fullname}
            onChange={(e) => setFullName(e.target.value)}
            required
            placeholder="Full Name"
          />
        </div>
        <div>
          {/* <label>Email</label> */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
          />
        </div>
        <div>
          {/* <label>Mobile</label> */}
          <input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Mobile"
          />
        </div>
        <div>
          {/* <label>Purpose</label> */}
          <input
            type="text"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            required
            placeholder="Purpose"
          />
        </div>
        <div>
          <label>Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <input type="submit" className="btn btn-transparent" />
      </form>
    </ContactStyle>
  );
};

const ContactStyle = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  margin: auto;
  padding: 2rem;

  .form-container {
    margin: auto;
    width: 50%;
    padding: 2rem;
    box-shadow: 0px 2px 4px;
    border-radius: 5px;
    opacity: 0;
    transform: translateY(200px);
    animation: slide ease 1s forwards;

    div {
      display: flex;
      flex-direction: column;
      margin-bottom: 2rem;

      input {
        padding: 0.5rem;
        border-radius: 2px;
        border: none;
        border-bottom: 1px solid var(--white-color);
        outline: none;
        background-color: transparent;
        color: var(--white-color);

        &::placeholder {
          color: var(--font-color);
        }
      }

      textarea {
        height: 10rem;
        padding: 0.5rem;
        background-color: transparent;
        outline: none;
        border: black solid 1px;
        color: var(--white-color);
      }
    }

    @media screen and (max-width: 1000px) {
      width: 80%;
    }

    @media screen and (max-width: 750px) {
      width: 95%;
    }
  }
`;

export default ContactPage;
