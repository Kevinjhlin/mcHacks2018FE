import React, { Component } from "react"
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

class SidebarLeft extends Component {
    state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    return (
      <div>
        <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='overlay' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Menu.Item name='home'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item name='Groups'>
              <Icon name='users' />
              Groups
            </Menu.Item>
          </Sidebar>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default SidebarLeft