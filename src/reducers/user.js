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
const API_SIGN_IN_URL = '/auth/signin';

export const SignUp = (data) => dispatch => dispatch({
    [RSAA]: {
        endpoint: API_ROOT + API_SIGN_UP_URL,
        method: 'POST',
        headers: { 'Content-Type': API_CONTENT_TYPE },
        body: data,
        types: [
            SIGN_UP + START,
            SIGN_UP + SUCCESS,
            SIGN_UP + ERROR
        ],

    }
});

export const SignIn = (data) => dispatch => dispatch({
    [RSAA]: {
        endpoint: API_ROOT + API_SIGN_IN_URL,
        method: 'POST',
        headers: { 'Content-Type': API_CONTENT_TYPE },
        body: data,
        types: [
            SIGN_IN + START,
            SIGN_IN + SUCCESS,
            SIGN_IN + ERROR
        ],
    }
});

const initialState = {
    userData: {},
    isFetching: false,
};

const actionHandlers = {
    [SIGN_IN + START]: state => {
        console.log('login start');
        return ({ ...state, isFetching: true })
    },
    [SIGN_IN + SUCCESS]: (state, action) => {
        console.log('login success');


        return {
            ...state,
            isFetching: false,
        };
    },
    [SIGN_IN + ERROR]: state => {
        console.log('login error');
        return {
            ...state, results: [], isFetching: false
        }
    },
    [SIGN_UP + START]: state => {
        console.log('registration start');
        return ({ ...state, isFetching: true })
    },
    [SIGN_UP + SUCCESS]: (state, action) => {
        console.log('registration success');
        const { data } = payload;
        console.log(payload)

        return {
            ...state,
            isFetching: false,
            userData: payload
        };
    },

    [SIGN_UP + ERROR]: state => {
        console.log('registration error');
        return {
            ...state, results: {}, isFetching: false
        }
    }
};

const userReducer = (state = initialState, action) => {
    const handler = actionHandlers[action.type];

    return handler ? handler(state, action) : state;
};

export default userReducer;

