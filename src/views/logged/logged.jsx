import React from "react";
import SidebarLeft from "../sidebar/sidebar";
import { signOut } from "../../redux/user/userActionDispatcher";
import { connect } from "react-redux";

import Schedule from '../../components/calender/calender.jsx';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.logMeOut = this.logMeOut.bind(this);
  }

  logMeOut(event) {
    event.preventDefault();
    this.props.signOut();
  }

  render() {
    return (
      <div>
        <SidebarLeft />
        You have succesfully logged in! You can't sign out now though. However, it is implemented, you'll have to figure
        out how to do that :) 
        <br/>
        <button onClick={this.logMeOut}> Logout </button>
        <Schedule />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
  };
}

const mapToDispatch = {signOut};
export default connect(mapStateToProps, mapToDispatch)(Main);
