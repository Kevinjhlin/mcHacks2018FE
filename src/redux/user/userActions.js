//These are the actions that call the action types. In other words, a dispatcher
export const loginSuccess = () => ({
    type: LOGIN_SUCCESS
  }),
  loginFail = error => ({ type: LOGIN_FAIL, error: error }),
  logout = () => ({ type: LOGOUT }),


  
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_FAIL = "LOGIN_FAIL",
  LOGOUT = "LOGOUT";
