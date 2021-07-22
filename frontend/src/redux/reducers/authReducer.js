import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  CLEAR_ERROR,
  //   USER_REGISTER_REQUEST,
  //   USER_REGISTER_SUCCESS,
  //   USER_REGISTER_FAIL,
  //   USER_DETAILS_REQUEST,
} from "../constants/authConstant";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    case CLEAR_ERROR:
      return {};
    default:
      return state;
  }
};
