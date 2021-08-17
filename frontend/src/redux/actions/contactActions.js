import axios from "axios";
import {
  CONTACT_FETCH_REQUEST,
  CONTACT_FETCH_SUCCESS,
  CONTACT_FETCH_FAIL,
  CONTACT_DELETE_REQUEST,
  CONTACT_DELETE_SUCCESS,
  CONTACT_DELETE_FAIL,
  CLEAR_ERROR,
} from "../constants/contactConstants";

export const fetchContactsAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: CONTACT_FETCH_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();
    console.log(userInfo);

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get("/api/contact", config);
    dispatch({
      type: CONTACT_FETCH_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CONTACT_FETCH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const contactDeleteAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: CONTACT_DELETE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    await axios.delete(`/api/contact/${id}`, config);
    dispatch({ type: CONTACT_DELETE_SUCCESS });
  } catch (error) {
    dispatch({
      type: CONTACT_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const Clear_Error = () => (dispatch) => {
  dispatch({ type: CLEAR_ERROR });
};
