import { loginSuccess, loginFail, logout } from "./userActions";
import { history } from "../../config/config";
import User from "../../api/userApi"

/**
 * Logs the user in with the credentials and sends either a successful or fail action to the reducer
 *
 * @param {any} credentials takes username and password as properties
 */
export const login = credentials => async dispatch => {
  try {
    let authenticated = await User.authenticated(credentials)

    if (authenticated) {
      dispatch(loginSuccess()); //dispatch the successful login call
      history.push("/home"); //change page
      localStorage.setItem("isLoggedIn", "true")
    }
    else{
      dispatch(loginFail("Login Failed"));
    }

  } catch (err) {
    dispatch(loginFail("Error: Login Failed")); //dispatch login fail
  }
};

/**
 * Logs out
 *
 */
export const signOut = () => dispatch => {
  localStorage.clear(); //clear local storage
  dispatch(logout()); //dispatch logout
  history.push("/");
};
