import { ActionTypes } from '../../constants/actionTypes';
import { loginSuccess } from '../actions/userActions';

const initialState = {
    user: null,
    loading: false,
    error: null,
    loginSuccess: 'idle'
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.USER_LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case ActionTypes.USER_LOGIN_SUCCESS:
            return {
                ...state,
                user: action.response,
                loading: false,
                loginSuccess: 'loaded'
            };
        case ActionTypes.USER_LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
};

export default userReducer;
