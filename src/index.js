import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import App from "./app"
import { Router } from "react-router-dom";
import store from "./redux/configureStore";
import { Provider } from "react-redux";
import { history } from "./config/config";
import { LOGIN_SUCCESS } from "./redux/user/userActions";

function ifLoggedIn(){
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if(isLoggedIn){
    store.dispatch({type:LOGIN_SUCCESS})
    history.push("/home"); //change page
  }
}

ifLoggedIn()

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

