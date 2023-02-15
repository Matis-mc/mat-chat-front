import { combineReducers } from "redux";
import contactReducer from './contactReducer';
import messageReducer from './messageReducer';


export default combineReducers({
    contactReducer,
    messageReducer
});