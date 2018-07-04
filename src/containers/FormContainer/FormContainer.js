import React from 'react';
import {connect} from 'react-redux';
import Form from '../../components/Form/Form';
import {addArticle} from '../../reducers/articles';

const mapDispatchToProps = (dispatch) => ({
    addArticle: (id) => dispatch(addArticle(id)),
});

const mapStateToProps = (state) => {
    return {
        articles: state.articles,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);