import { combineReducers } from 'redux';
import articlesReducer from '../reducers/articles';
import toggleRemoving from '../reducers/toggleRemoving';

export default combineReducers({
    articles: articlesReducer,
    toggleRemoving
});