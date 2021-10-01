import { takeLatest, put, select, call } from 'redux-saga/effects';
import * as faker from 'faker/locale/es';

import types from './actionTypes';
import * as action from './actions';
import req from '../../services/request';
import endp from '../../services/endpoints';

function* schedule({ payload }) {
  try {
    const id = yield select(({auth}) => auth.id)
    yield call(req.post, endp.schedule({
      ...payload,
      clientId: id,
      id: faker.datatype.number()
    }), false);
  } catch (e) {
    console.log('@schedule: ', e);
  }
}

function* cancelSchedule({ payload }) {
  try {
    yield call(req.delete, endp.cancelSchedule(payload), false);
    yield put(action.cancelScheduleSuccess(payload))
  } catch (e) {
    console.log('@cancel schedule: ', e);
  }
}

function* getSchedules({ payload }) {
  try {
    const { data } = yield call(req.get, endp.getSchedules(payload));
    if (data) {
      yield put(action.getScheduleSuccess(data));
    }
  } catch (e) {
    console.log('@get schedules: ', e);
  }
}

export default function* watcher() {
  yield takeLatest(types.SCHEDULE, schedule);
  yield takeLatest(types.CANCEL_SCHEDULE, cancelSchedule);
  yield takeLatest(types.GET_SCHEDULES, getSchedules)
}