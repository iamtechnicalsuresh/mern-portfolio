import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { toast } from "react-toastify";

import { logout } from "../redux/actions/authAction";
import Dropdown from "./Dropdown";

const SideNavbar = ({ toggle }) => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [dropdownMenu, setDropdownMenu] = useState(false);

  const logoutHandler = () => {
    dispatch(logout());
    toast.success("Logout Successfully.");
  };

  return (
    <SidebarContainer className={toggle ? "nav-toggle" : ""}>
      <div className="profile-pic">
        <img src="/images/my-pic.jpg" alt="profile_pic" />
      </div>
      <ul className="nav-links">
        <li className="link">
          <NavLink to="/" activeClassName="active-class" exact>
            Home
          </NavLink>
        </li>
        <li className="link">
          <NavLink to="/about" activeClassName="active-class">
            About
          </NavLink>
        </li>
        <li className="link">
          <NavLink to="/resume" activeClassName="active-class">
            Resume
          </NavLink>
        </li>
        <li className="link">
          <NavLink to="/portfolio" activeClassName="active-class">
            Portfolio
          </NavLink>
        </li>
        <li className="link">
          <NavLink to="/contact" activeClassName="active-class">
            Contact
          </NavLink>
        </li>

        {userInfo && userInfo.role === "admin" ? (
          <li
            className="link"
            onMouseEnter={() => setDropdownMenu(true)}
            onMouseLeave={() => setDropdownMenu(false)}
          >
            <NavLink to="/">
              Admin
              {dropdownMenu && (
                <div className="dropdownMenu">
                  <Dropdown />
                </div>
              )}
            </NavLink>
          </li>
        ) : (
          ""
        )}
        {userInfo && (
          <li className="link" onClick={logoutHandler}>
            <NavLink to="/">Logout</NavLink>
          </li>
        )}
      </ul>
      <footer className="footer">
        <a href="https://facebook.com/suresh99thapa" target="_new">
          <i className="fab fa-facebook" />
        </a>
        <a href="https://twitter.com/suresh99thapa" target="_new">
          <i className="fab fa-twitter-square" />
        </a>
        <a href="https://github.com/iamtechnicalsuresh" target="_new">
          <i className="fab fa-github-square" />
        </a>
        <a href="https://youtube.com" target="_new">
          <i className="fab fa-youtube-square" />
        </a>
      </footer>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  background-color: var(--nav-color);
  width: 16rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  position: fixed;
  left: 0;
  top: 0;
  transition: all 0.5s ease-in-out;

  @media screen and (max-width: 700px) {
    transform: translateX(-500px);
  }

  /* .toggle {
    transform: translateX(0);
    opacity: 1;
  } */

  .profile-pic {
    width: 100%;
    margin-top: 2rem;
    text-align: center;
    padding: 0.5rem;
    border-bottom: solid 1px var(--white-color);

    img {
      width: 10rem;
      border-radius: 50%;
      border: solid 5px var(--white-color);
    }
  }

  .nav-links {
    width: 100%;
    text-align: center;
    .active-class {
      background-color: rgba(255, 255, 255, 0.2);
      border-radius: 50% 0 0 50%;
    }

    .link {
      list-style: none;
      margin: 0.1rem 0;
      display: block;
      position: relative;

      a {
        display: block;
        text-decoration: none;
        padding: 0.5rem;
        position: relative;
        color: var(--white-color);
        letter-spacing: 1px;
        text-transform: uppercase;

        &::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 0%;
          opacity: 0;
          height: 100%;
          background-color: rgba(255, 255, 255, 0.2);
          border-radius: 50% 0 0 50%;
          transition: all 0.5s ease;
        }

        &:hover::after {
          width: 100%;
          opacity: 1;
        }
      }

      .dropdownMenu {
        position: absolute;
        right: -15.2rem;
        top: 0;
      }
    }
  }

  .footer {
    font-size: 1.5rem;
    width: 100%;
    text-align: center;
    border-top: 1px solid var(--white-color);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    a {
      margin: 0.8rem;
      text-decoration: none;
      /* display: flex; */
      /* flex-direction: row;
      align-items: center;
      justify-content: center; */

      i {
        color: var(--white-color);
        padding: 0.5rem;
        transition: all 0.2s ease;
        &:hover {
          /* background-color: var(--blue-color); */
          background-color: skyblue;
          border-radius: 50%;
        }
      }
    }
  }
`;

export default SideNavbar;
