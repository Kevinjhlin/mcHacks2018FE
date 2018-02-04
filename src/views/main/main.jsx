import React from "react";
import { login } from "../../redux/user/userActionDispatcher";
import { Container, Button } from 'semantic-ui-react'
import { connect } from "react-redux";
import './main.css';

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
      <div >
        <Container id="loginBox" textAlign='center'>
          <h2>Dance Yo</h2>
          <Button  onClick={this.handleClick} primary>Login</Button>
        </Container>
      </div>
    );
  }
}

//====================== REDUX CONNECTION =========================
const mapState = state => ({});
const mapDispatch = { login };
export default connect(mapState, mapDispatch)(Main);
