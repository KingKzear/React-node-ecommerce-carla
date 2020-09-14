import {applyMiddleware, createStore, compose} from 'redux'

import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

import reducer from './../reducers'
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);
const store = createStore(reducer, enhancer);
// export default createStore(reducer, applyMiddleware(createLogger, thunk));
export default store