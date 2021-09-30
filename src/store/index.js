import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { throttle } from 'lodash';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { loadState, saveState } from '../session/sessionStorage';
import createRootReducer from './rootReducer';
import sagas from './rootSaga';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({
  trace:      true,
  traceLimit: 25
});


const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware,
    );
  } else {
    return applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware,
      createLogger()
    );
  }
};

const preloadedState = loadState();
const configureStore = () => {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancers(getMiddleware())
  );

  store.subscribe(throttle(() => {
    saveState({
      auth: {
        ...store.getState().auth,
        isLoggedIn:      store.getState().auth.isLoggedIn,
        email:           store.getState().auth.email,
        token:           store.getState().auth.token,
        role:            store.getState().auth.role,
      },
    });
  }, 2000));
  sagaMiddleware.run(sagas);
  return store;
};

export default configureStore;
