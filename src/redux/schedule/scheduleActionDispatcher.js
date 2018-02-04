import {updateFreeTime} from './scheduleActions';


export const selectTime = (startTime, endTime) => async (dispatch, getState) => {
    try {
        let currentFreeTime = getState().schedule.freeTime;
        const newTime = [{startTime, endTime}];
        
        currentFreeTime.push(newTime);

        dispatch(updateFreeTime(currentFreeTime)); //dispatch selected time
    } catch (err){

    }
};