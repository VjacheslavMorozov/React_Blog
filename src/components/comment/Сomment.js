import React from 'react';
import styles from "./comments.scss";

class Comment extends React.Component {
    deleteComment = () => {
        const {deletingComment, articleId, commentId} = this.props;
        deletingComment(articleId, commentId)
    };

    render() {
        return (
            <div className={styles.commentContainer}>
                <div className={styles.comment}>{this.props.data}</div>
                <button onClick={this.deleteComment} className={styles.deleteButton}>delete comment</button>
            </div>
        )

    }
}


export default Comment;