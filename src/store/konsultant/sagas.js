import { call, put, takeLatest } from 'redux-saga/effects';

import types from './actionTypes';
import * as action from './actions';
import req from '../../services/request';
import endp from '../../services/endpoints';

function* getUsers() {
  try{
    const data = yield call(req.get, endp.getUsers())
    console.log({data})
    if (data) {
      yield put(action.getUsersSuccess({
        users: data.data,
        count: data.headers[ 'x-total-count' ],
        links: data.headers['link'].split(',')
      }))
    }
  }catch(e){}
}


export default function* watcher() {
  yield takeLatest(types.GET_USERS, getUsers);
}