import {
    SIGN_UP,
    SIGN_UP_SUCCESS,
    SIGN_UP_ERROR,
    SIGN_IN,
    SIGN_IN_SUCCESS,
    SIGN_IN_ERROR
} from "../actions/user"

const actionHandlers = {
    [SIGN_UP]: () => {

    },
    [SIGN_UP_SUCCESS]: () => {

    },
    [SIGN_UP_ERROR]: () => {

    },

};



export default (state = initialState, action) => {
    const handler = actionHandlers[action.type];

    return handler ? handler(state, action) : state;
};
