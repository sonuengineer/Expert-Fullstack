// store.js
import { createStore, combineReducers } from 'redux';
import authReducer from './authReducer';
import backgroundReducer from './backgroundReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  background: backgroundReducer,

});

const store = createStore(rootReducer);

export default store;




