import React from "react";
import { signUp } from "../../redux/user/userActionDispatcher";
import {
  Container,
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Icon
} from "semantic-ui-react";
import { connect } from "react-redux";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: undefined
    };
  }

  render() {
    return (
      <Container className="loginBox">
        <Header as="h2">Sign up </Header>
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column>
            <Form size="large">
              <Segment stacked>
                <Form.Input fluid name="username" placeholder="Username" />
                <Segment stacked>
                  <Form.Input fluid name="password" placeholder="password" />
                </Segment>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

//REDUX//
/*const mapState = state => ({});
const mapDispatch = { SignUp };
export default connect(mapState, mapDispatch)(SignUp);
*/

export default SignUp;
