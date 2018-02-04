import React from "react";
import { login } from "../../redux/user/userActionDispatcher";
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
import "./main.css";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.verifyNull = this.verifyNull.bind(this);
    this.verifySubmission = this.verifySubmission.bind(this);
    this.state = {
      username: "",
      password: "",
      error: undefined
    };
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    //set the appropriate value to the state
    this.setState({
      [name]: value
    });
  }
  /*Check for empty boxes*/
  verifyNull() {
    if (!this.state.username) {
      this.setState({ error: "Please enter a username" });
      return false;
    }

    if (!this.state.password) {
      this.setState({ error: "Please enter a password" });
      return false;
    }

    return true;
  }

  

  verifySubmission(event){
    this.setState({ error: undefined });
    const isValid = this.verifyNull();
    if (isValid) this.handleClick();
  }

  //Here is where we check the db if input values are valid.
  handleClick(event) {
    let credentials = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.login(credentials);
  }

  render() {
    const { error } = this.state;
    return (
      <div className="form">
        <Container id="loginBox" textAlign="center">
          <Header as="h2" color="violet" textAlign="center">
            EAST2WEST SCHEDULERINO 2THOUSANERINO
          </Header>
          <Grid
            textAlign="center"
            style={{ height: "100%" }}
            verticalAlign="middle"
          >
            <Grid.Column style={{ maxWidth: 450 }}>
              {this.state.error && (
                <Segment inverted color="red" tertiary>
                  <Icon name="warning" />
                  {error}
                </Segment>
              )}
              <Form size="large" onSubmit={this.verifySubmission}>
                <Segment stacked>
                  <Form.Input
                    fluid
                    icon="user"
                    name="username"
                    iconPosition="left"
                    placeholder="Username"
                    onChange={this.handleInputChange}
                  />
                  <Form.Input
                    fluid
                    icon="lock"
                    name="password"
                    iconPosition="left"
                    placeholder="Password"
                    type="password"
                    onChange={this.handleInputChange}
                  />
                  <Button type="submit" primary>
                    Login
                  </Button>
                  <Button secondary>
                    Sign up
                  </Button>
                </Segment>
              </Form>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}

//====================== REDUX CONNECTION =========================
const mapState = state => ({});
const mapDispatch = { login };
export default connect(mapState, mapDispatch)(Main);
