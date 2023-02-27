import { combineReducers } from "redux";
import contactReducer from './contactReducer';
import messageReducer from './messageReducer';
import listContactsReducer from './listContactsReducer'


export default combineReducers({
    contactReducer,
    messageReducer,
    listContactsReducer
});