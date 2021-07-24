import {
  CONTACT_FETCH_REQUEST,
  CONTACT_FETCH_SUCCESS,
  CONTACT_FETCH_FAIL,
  CONTACT_DELETE_REQUEST,
  CONTACT_DELETE_SUCCESS,
  CONTACT_DELETE_FAIL,
} from "../constants/contactConstants";

export const contactFetchReducer = (state = { contacts: [] }, action) => {
  switch (action.type) {
    case CONTACT_FETCH_REQUEST:
      return { loading: true, contacts: [] };
    case CONTACT_FETCH_SUCCESS:
      return { loading: false, contacts: action.payload.contacts };
    case CONTACT_FETCH_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const contactDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case CONTACT_DELETE_REQUEST:
      return { ...state, loading: true };
    case CONTACT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case CONTACT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
