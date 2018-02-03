import React from "react";
import {
  Sidebar,
  Segment,
  List,
  Menu,
  Icon,
  Link
} from "semantic-ui-react";
import { signOut } from "../../redux/user/userActionDispatcher";
import { connect } from "react-redux";

import Main from '../logged/logged.jsx';

class SidebarLeft extends React.Component {
  constructor(props) {
    super(props);
    this.logMeOut = this.logMeOut.bind(this);
  }

  logMeOut(event) {
    event.preventDefault();
    this.props.signOut();
  }

  state = { visible: false };

  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  render() {
    let divStyle = {
      height: 50 + "em"
    };

    const { visible } = this.state;
    
    return (
      <div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="push"
            width="thin"
            visible={visible}
            icon="labeled"
            vertical
            inverted
          >
            <Menu.Item name="home">
              <Icon name="home" />
              Home
            </Menu.Item>
            <Menu.Item name="groups">
              <Icon name="users" />
              Groups
            </Menu.Item>
            <List.List>
            </List.List>
            <a onClick={this.logMeOut}>          
            <Menu.Item name="signOut">
              <Icon name="sign out" />
                Sign Out
            </Menu.Item>
            </a>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <Menu.Item onClick={this.toggleVisibility} >
                <Icon name="sidebar" />
              </Menu.Item>
              <div style={divStyle}>
                <Main />
              </div>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
  };
}

const mapToDispatch = {signOut};

export default connect(mapStateToProps, mapToDispatch)(SidebarLeft);
