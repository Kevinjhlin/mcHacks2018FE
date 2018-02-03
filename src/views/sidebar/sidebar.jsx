import React from "react";
import {
  Sidebar,
  Segment,
  List,
  Menu,
  Icon,
  Link
} from "semantic-ui-react";

import Main from '../logged/logged.jsx';

class SidebarLeft extends React.Component {
  constructor(props) {
    super(props);
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
            <Menu.Item name="signOut">
              <Icon name="sign out" />
              Sign Out
            </Menu.Item>
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


export default SidebarLeft;
