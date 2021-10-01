/* eslint-disable import/no-anonymous-default-export, no-console */
import { all, call, spawn } from 'redux-saga/effects';

import auth from './auth/sagas';
import client from './client/sagas';
// import konsultant from './konsultant/sagas';

export default function* () {
  const sagas = [auth, client/*, konsultant*/];

  yield all(sagas.map(saga =>
    spawn(function* () {
      while (true) {
        try {
          yield call(saga);
          break;
        } catch (error) {
          console.log(error);
        }
      }
    })
  ));
}
