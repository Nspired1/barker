import { combineReducers } from "redux";
import currentUser from "./currentUser";
import errors from "./errorsReducer";
import messages from "./messages";

const rootReducer = combineReducers({
    currentUser,
    errors,
    messages
});

export default rootReducer;