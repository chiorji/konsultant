import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import auth from './auth/reducer';
import client from './client/reducer';
import konsultant from './konsultant/reducer';

const createRootReducer = (history) => combineReducers({
  auth,
  client,
  konsultant,
  router:     connectRouter(history),
});

export default createRootReducer;
