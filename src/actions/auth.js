import {
  LOGIN_SUCCESS,
  LOGOUT,
} from "./type";

export const loginSuccess = (user) => (dispatch) => {
  localStorage.setItem("user", JSON.stringify(user));
  dispatch({
    type: LOGIN_SUCCESS,
    payload: { user: user },
  });
};

export const logOut = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};