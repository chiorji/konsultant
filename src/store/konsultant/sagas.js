import { call, put, takeLatest } from 'redux-saga/effects';

import types from './actionTypes';
import * as action from './actions';
import req from '../../services/request';
import endp from '../../services/endpoints';

function* getUsers() {
  try{
    const { data } = yield call(req.get, endp.getUsers())
    if (data) {
      yield put(action.getUsersSuccess(data))
    }
  }catch(e){}
}


export default function* watcher() {
  yield takeLatest(types.GET_USERS, getUsers);
}