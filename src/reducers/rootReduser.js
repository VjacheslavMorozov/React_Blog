import { combineReducers } from 'redux';
import articlesReducer from '../reducers/articles';
import toggleRemoving from '../reducers/toggleRemoving';
import userReducer from '../reducers/user';

export default combineReducers({
    articles: articlesReducer,
    form: userReducer,
    toggleRemoving: toggleRemoving,

});