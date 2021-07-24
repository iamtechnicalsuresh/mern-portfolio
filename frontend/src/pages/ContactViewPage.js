import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { toast } from "react-toastify";
import * as icons from "react-icons/fa";

import Loader from "../components/Loader";

import {
  fetchContactsAction,
  contactDeleteAction,
} from "../redux/actions/contactActions";

const ContactViewPage = ({ history }) => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const contactList = useSelector((state) => state.contactList);
  const { contacts, loading, error } = contactList;

  const contactDelete = useSelector((state) => state.contactDelete);
  const { success, error: errorDelete, loading: loadingDelete } = contactDelete;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }

    dispatch(fetchContactsAction());
  }, [dispatch, history, userInfo, success, errorDelete]);

  const deleteHandler = async (id) => {
    dispatch(contactDeleteAction(id));
  };

  return (
    <TableContainerStyle>
      {loading && <Loader />}
      {loadingDelete && <Loader />}
      {error && toast.error({ error })}
      {success && toast.success("Contact Removed Successfully.")}
      {errorDelete && toast.error({ errorDelete })}
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
                <div className="edit">
                  <icons.FaEdit />
                </div>
                <div className="delete">
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
    background-color: rgba(0, 0, 0, 0.4);
    /* border: #ddd solid 2px; */
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

    .edit {
      color: green;
      cursor: pointer;
      border: 1px solid green;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.2rem;
      transition: color 0.2s ease;

      &:hover {
        background-color: green;
        color: black;
      }
    }

    .delete {
      color: red;
      cursor: pointer;
      border: 1px solid green;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.2rem;
      transition: color 0.2s ease;

      &:hover {
        background-color: red;
        color: black;
      }
    }
  }
`;

export default ContactViewPage;
