//Combines all reducers for the store and exports

import UserReducer from "./user/userReducer";
import ScheduleReducer from "./schedule/scheduleReducer";
import {combineReducers} from "redux"


const rootReducer = combineReducers({user: UserReducer, schedule: ScheduleReducer})

export default rootReducer