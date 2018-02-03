import { loginSuccess, loginFail, logout } from "./userActions";
import { history } from "../../config/config";
import axios from "axios";

/**
 * Logs the user in with the credentials and sends either a successful or fail action to the reducer
 *
 * @param {any} credentials takes username and password as properties
 */
export const login = credentials => async dispatch => {
  try {
    // localStorage.setItem("token", response.data.token); //set into localStorage for later use
    // axios.defaults.headers.common["Authorization"] =
    //   "Bearer " + response.data.token;
    dispatch(loginSuccess()); //dispatch the successful login call
    history.push("/logged"); //change page
  } catch (err) {
    dispatch(loginFail("Login Failed")); //dispatch login fail
  }
};

/**
 * Logs out
 *
 */
export const signOut = () => dispatch => {
  localStorage.clear(); //clear local storage
  dispatch(logout()); //dispatch logout
  history.push("/login");
};
