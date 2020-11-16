import { combineReducers } from 'redux';
import { groupPageReducer } from './groupPageReducer';
import { homepageReducer } from './homepageReducer';

const rootReducer = combineReducers({
  groups: groupPageReducer,
  home: homepageReducer
});

export default rootReducer