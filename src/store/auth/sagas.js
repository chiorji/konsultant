import { call, put, takeLatest, /*takeEvery*/ } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import types from './actionTypes';
import * as action from './actions';
import req from '../../services/request';
import endp from '../../services/endpoints';

function* login({ payload }) {
  try {
    // const { data } = yield call(req.auth, endp.login(payload));
    // yield put(action.loginSuccess(data))
    yield put(action.loginSuccess({
      email: 'test@dom.co',
      fullname: 'test',
      token: 'test'
    }));
    yield put(push('/dashboard'))
  } catch (e) {
    console.log(e);
  }
}

function* signup({ payload }) {
  try {
    yield call(req.auth, endp.signup(payload));
    // If sign up was successful, automatically request login
    const {data} = yield call(req.auth(endp.login({
      email: payload.email,
      password: payload.password
    })));
    yield put(action.loginSuccess(data))
  } catch (e) {
    console.log(e);
  }
}

export default function* watcher() {
  yield takeLatest(types.LOGIN, login);
  yield takeLatest(types.SIGNUP, signup);
}