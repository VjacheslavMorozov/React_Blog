import { RSAA } from 'redux-api-middleware';
import {
    SIGN_UP,
    SIGN_IN,
    START,
    SUCCESS,
    ERROR,
} from '../actions/user';

const API_ROOT = 'https://mateacademy-react-server.herokuapp.com/api/v1';
const API_CONTENT_TYPE = 'application/json';
const API_SIGN_UP_URL = '/auth/signup';

export const SignUp = (data) => dispatch => dispatch({
    [RSAA]: {
        endpoint: API_ROOT + API_SIGN_UP_URL,
        method: 'POST',
        types: [
            SIGN_UP + START,
            SIGN_UP + SUCCESS,
            SIGN_UP + ERROR
        ],
        body: data
    }
});

const initialState = {
    results: [],
    isFetching: false,
};

const actionHandlers = {
    [SIGN_UP + START]: state => {
        console.log('start');
        return ({ ...state, isFetching: true })
    },
    [SIGN_UP + SUCCESS]: (state, action) => {
        console.log('success');
        const { payload } = action;
        console.log(payload);

        return {
            ...state,
            isFetching: false,
            results: payload.data
        };
    },
    [SIGN_UP + ERROR]: state => {
        console.log('error');
        return {
            ...state, results: [], isFetching: false
        }
    }
};

const userReducer = (state = initialState, action) => {
    const handler = actionHandlers[action.type];

    return handler ? handler(state, action) : state;
};

export default userReducer;

