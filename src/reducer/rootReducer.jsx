import {combineReducers} from 'redux';
import {fundReducer} from './fundReducer';
import {groupReducer} from './groupReducer';
import {statisticsReducer} from './statisticsReducer';
import {transactionReducer} from './transactionReducer';
import {applicationDataReducer} from './applicationDataReducer';

const rootReducer = combineReducers({
    groupData: groupReducer,
    fund: fundReducer,
    statistics: statisticsReducer,
    transactions: transactionReducer,
    appData: applicationDataReducer,
});

export default rootReducer;
