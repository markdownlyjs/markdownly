import { createStore, applyMiddleware, compose } from 'redux';
import { persist, initState } from './middleware/persist';
import reducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducer,
  initState(),
  composeEnhancers(applyMiddleware(persist))
);
