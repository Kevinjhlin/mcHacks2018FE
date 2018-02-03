import React from "react";
import { login } from "../../redux/user/userActionDispatcher";
import { connect } from "react-redux";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.login();
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}> Login </button>
      </div>
    );
  }
}

//====================== REDUX CONNECTION =========================
const mapState = state => ({});
const mapDispatch = { login };
export default connect(mapState, mapDispatch)(Main);
