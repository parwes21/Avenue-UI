import { ActionTypes } from '../../constants/actionTypes';

export const loginRequest = (payload) => ({
    type: ActionTypes.USER_LOGIN_REQUEST,
    payload,
});

export const loginSuccess = (response) => ({
    type: ActionTypes.USER_LOGIN_SUCCESS,
    response,
});

export const loginFailure = (error) => ({
    type: ActionTypes.USER_LOGIN_FAILURE,
    error,
});
