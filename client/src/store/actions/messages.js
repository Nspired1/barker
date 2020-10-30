import {apiCall} from "../../services/api";
import {addError} from "./errors";
import {LOAD_MESSAGES, REMOVE_MESSAGE} from "../actionTypes";

export const loadMessages = messages => ({
    type: LOAD_MESSAGES,
    messages
});

export const fetchMessages = () => {
    return dispatch => {
        return apiCall("get", `/api/messages`)
        .then(function(res){
            dispatch(loadMessages(res));
        })
        .catch(function(error){
            dispatch(addError(error.message))
        })
    };
}

export const postNewMessage = text => (dispatch, getState) => {
    let {currentUser} = getState()
    const id = currentUser.user.id;
    return apiCall("post", `/api/users/${id}/messages`, {text})
    .then((res) =>{})
    .catch(error => dispatch(addError(error.message)));
}