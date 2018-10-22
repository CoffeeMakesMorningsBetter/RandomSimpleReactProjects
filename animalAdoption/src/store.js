import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const store = createStore(
  reducer, 
  compose(
  applyMiddleware(thunk),
  typeof window === 'object' && 
  typeof window.devToolsExtension !== 'undefined' 
  ? window.devToolsExtension() 
  : f => f
))

export default store;

// code below ensures redux tools does not crash redux - copy from docs starts redux tools
// typeof window.devToolsExtension !== 'undefined' 
// ? window.devToolsExtension() 
// : f => f