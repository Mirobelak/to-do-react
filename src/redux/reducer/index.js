import { combineReducers } from "redux";
import todos from "./todos";
import statusFilter from "./status-filter" 


export default combineReducers({
    todos,
    statusFilter
})