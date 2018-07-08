import { combineReducers } from 'redux';
import articlesReducer from '../reducers/articles';
import toggleRemoving from '../reducers/toggleRemoving';
import userReducer from '../reducers/user';
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    articles: articlesReducer,
    form: formReducer,
    toggleRemoving: toggleRemoving,
    user: userReducer
});