import React from "react";

import Schedule from '../../components/calender/calender.jsx';

class Main extends React.Component {


  render() {
    return (
      <div>
        You have succesfully logged in! You can't sign out now though. However, it is implemented, you'll have to figure
        out how to do that :) 

        <Schedule />
      </div>
    );
  }
}


export default (Main);
