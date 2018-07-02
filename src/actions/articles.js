import { ADD_ARTICLE } from "../actions/actions";

function reducer(state = 'ALL', action) {
    switch (action.type) {
        case SET_FILTER:
            return action.filter

        default:
            return state
    }
}

export default reducer;