import { createStore } from 'redux';
import { initialState }  from '../store/initialState'
import reducer from '../reducers/rootReduser';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools() );

export default store;