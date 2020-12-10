import { combineReducers } from 'redux';
import { fundReducer } from './fundReducer';
import { groupReducer } from './groupReducer';
import { statisticsReducer } from './statisticsReducer';
import { transactionReducer } from './transactionReducer';
const rootReducer = combineReducers({
  groups: groupReducer,
  fund: fundReducer,
  statistics: statisticsReducer,
  transactions: transactionReducer
});

export default rootReducer