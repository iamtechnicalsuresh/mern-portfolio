import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { toast } from "react-toastify";

import { register, ClearError } from "../redux/actions/authAction";
import Loader from "../components/Loader";

const RegisterUserPage = ({ history }) => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, error, loading } = userLogin;
  const userRegister = useSelector((state) => state.userRegister);
  const {
    success,
    error: errorRegister,
    loading: loadingRegister,
  } = userRegister;

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    }

    if (errorRegister) {
      toast.error(errorRegister);
      dispatch(ClearError());
    } else if (success) {
      toast.success("User Registered Successfully.");
      history.push("/admin/users");
    }
  }, [dispatch, error, history, userInfo, success, errorRegister]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(fullname, email, password, cpassword));
  };

  return (
    <>
      {loading && <Loader />}
      {loadingRegister && <Loader />}
      {error && toast.error({ error })}
      {errorRegister && toast.error({ errorRegister })}
      <LoginPageStyle>
        <h1>Login</h1>
        <form className="form-container" onSubmit={submitHandler}>
          <div className="input-form">
            <input
              placeholder="Full Name"
              type="fullname"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>
          <div className="input-form">
            <input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-form">
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-form">
            <input
              placeholder="Confirm Password"
              type="password"
              value={cpassword}
              onChange={(e) => setCPassword(e.target.value)}
            />
          </div>
          <input type="submit" className="btn btn-transparent" />
        </form>
      </LoginPageStyle>
    </>
  );
};

const LoginPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15rem;

  h1 {
    margin-bottom: 2rem;
  }

  .form-container {
    margin: auto;
    width: 30rem;
    padding: 5rem 2rem;
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
        font-size: 1rem;

        &::placeholder {
          color: var(--font-color);
        }
      }
    }

    p {
      margin-bottom: 1rem;

      a {
        color: white;
        text-decoration: none;
        font-size: 0.9rem;
      }
    }

    @media screen and (max-width: 1000px) {
      width: 20rem;
    }

    @media screen and (max-width: 750px) {
      width: 20rem;
      /* margin-top: 10rem; */
    }
  }
  @media screen and (max-width: 750px) {
    margin-top: 10rem;
  }
`;

export default RegisterUserPage;
