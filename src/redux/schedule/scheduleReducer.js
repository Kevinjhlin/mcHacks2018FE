// import * as types from "./scheduleAction";
import initial from "./scheduleInitialState";

const reducer = (state = initial, action) => {
  switch (action.type) {
    //Add timeslot to collection
    case 'ADD_TIMESLOT':
      return {
        ...state,
        freeTime: action.freeTime,

      }
    default:
      return state;
  }
};
export default reducer;