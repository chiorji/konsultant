import { call, put, takeLatest } from 'redux-saga/effects';

import types from './actionTypes';
import * as action from './actions';
import req from '../../services/request';
import endp from '../../services/endpoints';

function* getUsers() {
  try{
    const data = yield call(req.get, endp.listUsers())
    if (data) {
      yield put(action.getUsersSuccess({
        users: data.data,
        count: data.data.length, //data.headers[ 'x-total-count' ],
        links: '' // data.headers['link'].split(',')
      }))
    }
  }catch(e){}
}

function* getSchedules() {
  try {
    const { data } = yield call(req.get, endp.listSchedules());
    if (data) {
      yield put(action.getSchedulesSuccess(data))
    }
  } catch (e) {
    console.log('@admin get schedules:: ', e)
  }
}

function* cancelSchedule({ payload }) {
  try {
    yield call(req.delete, endp.cancelSchedule(payload), false);
    yield put(action.cancelScheduleSuccess(payload))
  } catch (e) {
    console.log('@admin cancel schdule failed:: ', e)
  }
}

export default function* watcher() {
  yield takeLatest(types.GET_USERS, getUsers);
  yield takeLatest(types.K_GET_SCHEDULES, getSchedules)
  yield takeLatest(types.K_CANCEL_SCHEDULE, cancelSchedule)
}