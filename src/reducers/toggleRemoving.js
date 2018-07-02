import INPUT_CHANGED from '../actions/toggleRemoving';

const initialState = {
    visibilityRemovingMenu: false
};

export function toggleInputChange(){
    return {
        type: INPUT_CHANGED,
    }
}

const actionHandlers = {
    [INPUT_CHANGED]: (state, action) => ({
        ...state,
        visibilityRemovingMenu: !state.visibilityRemovingMenu,
    })
};

const reducer = (state = initialState, action) => {
    const handler = actionHandlers[action.type];

    return handler ? handler(state, action) : state;
};

export default reducer;