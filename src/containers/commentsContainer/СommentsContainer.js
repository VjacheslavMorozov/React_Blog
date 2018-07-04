import React from 'react';
import {connect} from 'react-redux';
import CommentsList from '../../components/commentsList/СommentsList';

import {deleteComment} from "../../reducers/articles";

const mapDispatchToProps = (dispatch) => ({
     deleteComment: (articleId, commentId) => dispatch(deleteComment(articleId, commentId))
});


export default connect(undefined, mapDispatchToProps)(CommentsList);