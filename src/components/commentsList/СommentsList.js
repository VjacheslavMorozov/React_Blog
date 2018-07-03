import React, {Component} from 'react';
import Comment from "../comment/Сomment";
import styles from "./commentList.scss";
import PropTypes from 'prop-types';

class CommentsList extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        isOpen: false
    };

    toggleVisibleComments = () => {
        this.setState({isOpen: !this.state.isOpen});
    };

    render() {

        const {listOfComments, articleId} = this.props;
        const isCommentsOpen = this.state.isOpen;
        const isHasComments = listOfComments.length > 0;

        return (
            <div>
                {
                    isHasComments &&
                    <div className={styles.titleContainer}>
                        <div>
                            Comments ({listOfComments.length})
                        </div>
                        <button className={"toggle-button"}
                                onClick={this.toggleVisibleComments}>{isCommentsOpen ? "hide comments" : "show comments"}</button>
                    </div>
                }

                {isHasComments && isCommentsOpen &&
                    listOfComments.map((comment) =>
                        <Comment deletingComment={this.props.deleteComment} data={comment.commentText}  articleId={articleId} commentId={comment.commentId} key={comment.commentId}/>
                    )
                }
            </div>
        );
    }
}


CommentsList.propTypes = {
    isHasComments: PropTypes.bool,
    isCommentsOpen:  PropTypes.bool,
    listOfComments: PropTypes.arrayOf(
        PropTypes.shape({
            commentId: PropTypes.number,
            commentText: PropTypes.string
        })
    )
};

export default CommentsList;