import React from "react";
import {
  Sidebar,
  Segment,
  Menu,
  Icon,
  Container

} from "semantic-ui-react";
import { signOut } from "../../redux/user/userActionDispatcher";
import { connect } from "react-redux";

import PersonalSchedule from '../personalPage/personalSchedule';

class SidebarLeft extends React.Component {
  constructor(props) {
    super(props);
    this.logMeOut = this.logMeOut.bind(this);
    this.state ={
      username: ""
    }
  }

  logMeOut(event) {
    event.preventDefault();
    this.props.signOut();
  }

  state = { visible: false };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  render() {

    let background = {
      backgroundColor: "#FFFFFF",
      height: 50 + "em"

    };

    let headerBackground = {
      backgroundColor: "#E0C9C7"
    }
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
            <a onClick={this.logMeOut}>          
              <Menu.Item name="signOut">
                <Icon name="sign out" />
                  Sign Out
              </Menu.Item>
            </a>
          </Sidebar>
          <Sidebar.Pusher>
            <div className="ui top attached menu" style={headerBackground}>
              <div className="menu">
              <Segment basic>
                <Menu.Item onClick={this.toggleVisibility} >
                  <Icon name="sidebar" />
                </Menu.Item>
              </Segment>
            
              {/* Change to reflect Logged in user*/}
              <h2> {this.state.username} | EAST2WEST</h2>
              </div>
            </div>
            <br/>
            <div style={background}>
                <Container>
                  <PersonalSchedule />
                </Container> 
            </div>
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
