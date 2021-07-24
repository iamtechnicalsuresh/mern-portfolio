import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  userLoginReducer,
  userFetchReducer,
  userRegisterReducer,
} from "./reducers/authReducer";
import {
  contactFetchReducer,
  contactDeleteReducer,
} from "./reducers/contactReducers";

const userFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userFromLocalStorage },
};

const reducers = combineReducers({
  userLogin: userLoginReducer,
  contactList: contactFetchReducer,
  contactDelete: contactDeleteReducer,
  usersList: userFetchReducer,
  userRegister: userRegisterReducer,
});

const middlewares = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
