import { combineReducers } from 'redux';
import { fundReducer } from './fundReducer';
import { groupReducer } from './groupReducer';
import { statisticsReducer } from './statisticsReducer';
import { transactionReducer } from './transactionReducer';
const rootReducer = combineReducers({
  groupData: groupReducer,
  fund: fundReducer,
  statistics: statisticsReducer,
  transactions: transactionReducer
});

export default rootReducer