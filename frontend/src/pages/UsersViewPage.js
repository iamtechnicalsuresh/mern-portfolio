import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { toast } from "react-toastify";
import * as icons from "react-icons/fa";
import { userFetchAction } from "../redux/actions/authAction";
import Loader from "../components/Loader";

const UsersViewPage = (history) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const usersList = useSelector((state) => state.usersList);
  const { users, loading, error } = usersList;

  useEffect(() => {
    if (!userInfo.role === "admin") {
      history.push("/");
    }
    dispatch(userFetchAction());
  }, [dispatch, userInfo.role, history]);

  const deleteHandler = (id) => {};

  return (
    <TableContainerStyle>
      {loading ? (
        <Loader />
      ) : error ? (
        toast.error({ error })
      ) : (
        <>
          <h1> Contact View Page</h1>
          <table>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.fullname}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td className="actions">
                    <div className="edit">
                      <icons.FaEdit />
                    </div>
                    <div className="delete">
                      <icons.FaTimes onClick={() => deleteHandler(user._id)} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
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

  table tr:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }

  table,
  th,
  td {
    border: solid 1px white;
    padding: 0.4rem;
    border-collapse: collapse;
    color: white;
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

export default UsersViewPage;
