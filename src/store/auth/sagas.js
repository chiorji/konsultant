import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import  * as faker from 'faker/locale/es';

import types from './actionTypes';
import * as action from './actions';
import req from '../../services/request';
import endp from '../../services/endpoints';


function* login({ payload }) {
    let user = Object.create(null);
  try {
    const { data } = yield call(req.get, endp.login(payload));
    if (data instanceof Array) {
      user = {...data[0]}
    } else {
      user = Object.assign({}, data)
    }
    yield put(action.loginSuccess(user))
    if (user.role && user.role === 'ADMIN') {
      yield put(push('/ad/admin'))
    } else {
      yield put(push('/dashboard'))
    }
  } catch (e) {
    console.log(e);
  }
}

function* signup({ payload }) {
  try {
    const {data} = yield call(req.auth, endp.signup({
      ...payload,
      id: Date.now(),
      token: faker.datatype.uuid(),
      avatar: faker.internet.avatar()
    }));
    // If sign up was successful, automatically send to login page
    if (data) {
      yield put(push('/k/login'))
    }
  } catch (e) {
    console.log(e);
  }
}

export default function* watcher() {
  yield takeLatest(types.LOGIN, login);
  yield takeLatest(types.SIGNUP, signup);
}