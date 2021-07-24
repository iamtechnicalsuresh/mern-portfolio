import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Dropdown = () => {
  return (
    <DropdownStyle>
      <li>
        <Link to="/admin/contact">Contact Us</Link>
      </li>
      <li>
        <Link to="/admin/users">Users</Link>
      </li>
    </DropdownStyle>
  );
};

const DropdownStyle = styled.ul`
  list-style: none;
  background-color: var(--nav-color);
  width: 15rem;
  padding: 1rem 0rem;
  border-radius: 0.2rem;
`;

export default Dropdown;
