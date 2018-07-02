import { createStore } from 'redux';
import { initialState }  from '../store/initialState'
import reducer from '../reducers/rootReduser';

const store = createStore(reducer, initialState);

export default store;