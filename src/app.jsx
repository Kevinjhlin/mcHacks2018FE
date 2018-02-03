import React from "react";
import Main from "./views/main/main";
// import Logged from "./views/logged/logged";
import Home from "./views/sidebar/sidebar";
import { Route, Switch } from "react-router-dom";
import requireAuth from "./config/requireAuth";
import noRequireAuth from "./config/noRequireAuth";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={noRequireAuth(Main)} />
        <Route path="/logged" component={requireAuth(Home)} />
      </Switch>
    );
  }
}

export default App;
