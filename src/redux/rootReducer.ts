import { combineReducers } from "redux";
import todosReducer from "./reducer/todos";
import statusFilterReducer from "./reducer/status-filter" 


const rootReducer = combineReducers({
    todosReducer: todosReducer,
    statusFilterReducer: statusFilterReducer
})

export default rootReducer