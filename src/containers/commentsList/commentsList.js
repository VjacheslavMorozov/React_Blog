import React, {Component} from 'react';
import Comment from "../../components/comment/comment";

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
        const comments = this.props.listOfComments;
        const listItems = comments.map((comment) =>
            <Comment data={comment.commentText} key={comment.commentId}/>
        );

        return (
            <div>
                <div>
                    <div>
                        Comments ({listItems.length})
                    </div>
                    <button onClick={this.toggleVisibleComments}>{this.state.isOpen ? "hide comments" : "show comments"}</button>
                </div>
                {this.state.isOpen
                ?   <div>
                        {listItems}
                    </div>
                :  null
                }
            </div>
        );
    }
}

export default CommentsList;