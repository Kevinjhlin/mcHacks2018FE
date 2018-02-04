import React from "react";
import {
  Sidebar,
  Segment,
  Menu,
  Icon
} from "semantic-ui-react";

import Main from '../logged/logged.jsx';

class SidebarLeft extends React.Component {
  constructor(props) {
    super(props);
  }

  state = { visible: false };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


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
            <Menu.Item 
            name="home"
            onClick={this.handleItemClick}>
              <Icon name="home" />
              Home
            </Menu.Item>
            <Menu.Item 
            name="groups">
              Groups
              {/*TODO: implement for loop for every group that the user is in. Currently hardcoded template examples.*/}
              <Menu.Menu>
                  <Menu.Item onClick={this.handleItemClick} >Red Velvet - Bad Boy</Menu.Item>
                  <Menu.Item onClick={this.handleItemClick} >Seventeen - Clap</Menu.Item>
              </Menu.Menu>
            </Menu.Item>

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
