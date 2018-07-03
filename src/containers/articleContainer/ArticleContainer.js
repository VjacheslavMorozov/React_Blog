import React from 'react';
import {connect} from 'react-redux';
import ArticleList from "../../components/articleList/ArticleList";

import {toggleInputChange} from '../../reducers/toggleRemoving';
import {deleteArticle} from '../../reducers/articles';


const mapStateToProps = (state) => {
    return {
        articles: state.articles,
        toggleRemoving: !state.toggleRemoving.visibilityRemovingMenu
    }
};

const mapDispatchToProps = (dispatch) => ({
    toggleInputChange: ()=> dispatch(toggleInputChange()),
    deleteArticle: (id) => dispatch(deleteArticle(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);