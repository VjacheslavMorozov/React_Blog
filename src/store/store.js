import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';

const initialState = {};
const enhancers = [];
const middleware = [thunk, apiMiddleware];

import reducer from '../reducers/rootReduser';

const devToolsExtension = window.devToolsExtension;

if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);

const store = createStore(
    reducer,
    initialState,
    composedEnhancers
);

export default store;