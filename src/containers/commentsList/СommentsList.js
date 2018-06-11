import React, {Component} from 'react';
import Comment from "../../components/comment/Сomment";
import styles from "./commentList.scss";

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

        const {listOfComments} = this.props;
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
                        <Comment data={comment.commentText} key={comment.commentId}/>
                    )
                }
            </div>
        );
    }
}

export default CommentsList;