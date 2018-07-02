import { combineReducers } from 'redux';
import appReducer from '../actions/app'

export default combineReducers({
    app: appReducer,
});