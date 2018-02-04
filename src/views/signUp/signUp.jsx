import React from 'react';
import {
    Container,
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Icon
} from 'semantic-ui-react';

class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            error: undefined
        }
    }

    render() {
        return(
            <Container className="loginBox">
                
            </Container>
        )
    }
}