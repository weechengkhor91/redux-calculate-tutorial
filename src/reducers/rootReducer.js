import {combineReducers} from "redux";
import salaryReducer from './salaryReducer'

export default combineReducers({
        salaryData: salaryReducer
})