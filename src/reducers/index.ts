import {combineReducers} from 'redux';
import {teamReducer} from './teamReducer';

const rootReducer = combineReducers({
  teamReducer,
});
export default rootReducer;
