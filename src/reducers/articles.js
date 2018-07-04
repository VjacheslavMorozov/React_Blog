import {ADD_ARTICLE, REMOVE_ARTICLE, REMOVE_COMMENT} from '../actions/actions';



import initialState from '../store/initialState';


export function deleteArticle(id){
    return {
        type: REMOVE_ARTICLE,
        id
    }
}

export function deleteComment(articleId, commentId){
    return {
        type: REMOVE_COMMENT,
        articleId,
        commentId
    }
}
export function addArticle(newItem){
    return {
        type: ADD_ARTICLE,
        newItem
    }
}

const actionHandlers = {
    [REMOVE_ARTICLE]: (state, action) => state.filter(article => article.id !== action.id),
    [ADD_ARTICLE]: (state, action) => ({
        ...state,
        arr: [...state.arr, action.newItem]
    }),
    [REMOVE_COMMENT]: (state, action) => console.log(action) || state.map(article => ({
        ...article,
        comments: article.id === action.articleId
            ? article.comments.filter(comment => comment.commentId !== action.commentId)
            : article.comments
    })),
};

const reducer = (state = initialState, action) => {
    const handler = actionHandlers[action.type];

    return handler ? handler(state, action) : state;
};

export default reducer;