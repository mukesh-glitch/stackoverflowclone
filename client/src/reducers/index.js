import { combineReducers } from "redux";
import authReducer from "../reducers/auth"
import currentUserReducer from "./currentUser";
import questionReducer from "./questionReducer"

export default combineReducers({
    authReducer, currentUserReducer, questionReducer
})