import React from "react";
import { selectTime } from '../../redux/schedule/scheduleActionDispatcher';
import Schedule from '../../components/calender/calender.jsx';
import { connect } from "react-redux";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.selectTime = this.selectTime.bind(this);
  }

  



  render() {

    return (
      <div>
        <h2 >Schedule</h2>
        <Schedule {...this.props} />
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return { 
    schedule: state.schedule
  };
}

const mapToDispatch = {selectTime };

export default connect(mapStateToProps, mapToDispatch)(Main);
