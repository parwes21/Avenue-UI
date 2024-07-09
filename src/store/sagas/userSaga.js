import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { ActionTypes } from '../../constants/actionTypes';
import { loginSuccess, loginFailure } from '../actions/userActions';
import { message } from 'antd';
// import { BASE_URL } from '../../constants/apiPaths';

function* loginUser(action) {
    try {
        // const response = yield call(axios.post, `${BASE_URL}/login`, action.payload);
        const response = yield call(axios.post, 'https://dummyjson.com/auth/login', action.payload);
        
        yield put(loginSuccess(response.data));
        if(response){
            message.success('Success')
        }
    } catch (error) {
        yield put(loginFailure(error.message));
    }
}

function* userSaga() {
    yield takeLatest(ActionTypes.USER_LOGIN_REQUEST, loginUser);
}

export default userSaga;
