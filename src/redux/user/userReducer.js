//This is the reducer that assigns states depending on the action received.

import * as types from "./userActions";
import initial from "./userInitialState";

const reducer = (state = initial, action) => {
  switch (action.type) {
    //on a successful login, it will set the token, null all errors and authenticate the user.
    case types.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        authenticated: true,
      });
    //on fail, post the error
    case types.LOGIN_FAIL:
      return Object.assign({}, state, { 
        errors: action.error,
      });
    //null token and unauthenticates the user
    case types.LOGOUT:
      return Object.assign({}, state, {
        authenticated: false,
      });
    default:
      return state;
  }
};
export default reducer;
