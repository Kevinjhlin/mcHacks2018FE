import React from "react";
import SidebarLeft from "../views/sidebar/sidebar";

class Main extends React.Component {
  render() {
    return (
      <div>
        <SidebarLeft />
        You have succesfully logged in! You can't sign out now though. However, it is implemented, you'll have to figure
        out how to do that :) 
      </div>
    );
  }
}

export default Main;
