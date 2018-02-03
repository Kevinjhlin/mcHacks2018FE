import React from "react";
import { signOut } from "../../redux/user/userActionDispatcher";

class Main extends React.Component {
  render() {
    return (
      <div>
        You have succesfully logged in! You can't sign out now though. However, it is implemented, you'll have to figure
        out how to do that :) 
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
      game: state.game
  };
}

const mapToDispatch = (dispatch) => {
    logOut: () => dispatch( signOut() )
};
export default Main;
export default connect(mapState, mapDispatch)(Main);
