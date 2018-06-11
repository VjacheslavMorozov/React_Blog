import React, {Component} from 'react';
import styles from './article.scss';
import CommentsList from "../../containers/commentsList/commentsList";

class Article extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        isOpen: false
    };

    toggleVisibleArticle = () => {
        this.setState({isOpen: !this.state.isOpen});
    };

    render() {
        const {title, date, text, comments} = this.props.data;

        const currentTime = Date({date});

        return (
            <div>
                <div className={styles.titleContainer}>
                    <div>{title}</div>
                    <button
                        onClick={this.toggleVisibleArticle}>
                        {this.state.isOpen ? "hide article" : "show article"}
                    </button>
                </div>
                {
                    this.state.isOpen
                        ?
                        <div className={styles.listOpen + " default"}>
                            <div>
                                {text}
                            </div>
                            <div>
                                publication date {currentTime}
                            </div>
                            <div>
                                <CommentsList listOfComments={comments}/>
                            </div>
                        </div>
                        : null
                }

            </div>
        );
    }
}

export default Article;




