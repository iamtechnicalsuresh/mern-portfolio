import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { toast } from "react-toastify";
import * as icons from "react-icons/fa";
import axios from "axios";

const ContactViewPage = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const {
    userInfo: { token },
  } = userLogin;

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const { data } = await axios.get("/api/contact", config);
        setContacts(data.contacts);
      } catch (err) {
        toast.error(err.response.data.message);
      }
    };
    getContacts();
  }, [token]);

  const deleteHandler = async (id) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      await axios.delete(`/api/contact/${id}`, config);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <TableContainerStyle>
      <h1> Contact View Page</h1>
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Purpose</th>
            <th>Message</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((cont) => (
            <tr key={cont._id}>
              <td>{cont.fullname}</td>
              <td>{cont.email}</td>
              <td>{cont.mobile}</td>
              <td>{cont.purpose}</td>
              <td className="message">{cont.message}</td>
              <td className="actions">
                <div>
                  <icons.FaEdit />
                </div>
                <div>
                  <icons.FaTimes onClick={() => deleteHandler(cont._id)} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableContainerStyle>
  );
};

const TableContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  width: 100%;
  padding: 2rem;

  table {
    width: 100%;
  }

  table th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #04aa6d;
    color: white;
  }

  table td,
  table th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  /* table tr:nth-child(even) {
    background-color: #f2f2f2;
    color: black;
  } */

  table tr:hover {
    background-color: #ddd;
    color: black;
  }

  table,
  th,
  td {
    border: solid 1px white;
    padding: 0.4rem;
    border-collapse: collapse;
    color: white;
  }

  .message {
    width: 50rem;
  }

  .actions {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 1.5rem;
    padding: 0.5rem;
    height: 100%;

    div {
      cursor: pointer;
    }
  }
`;

export default ContactViewPage;
