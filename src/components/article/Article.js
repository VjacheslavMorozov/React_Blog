import React, {Component} from 'react';
import styles from './article.scss';
import shave from 'shave/dist/shave';
import CommentsContainer from "../../containers/commentsContainer/СommentsContainer";
import PropTypes from 'prop-types';
import _ from "lodash";
import Modal from 'react-modal';

import RemovingArticleComponent from "../removingArticleComponent/RemovingArticleComponent";

class Article extends Component {
    constructor(props) {
        super(props);
        this.textContainer = React.createRef();
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.acceptingDelete = this.acceptingDelete.bind(this);
        this.cancelingDelete = this.cancelingDelete.bind(this);
        console.log(this.props.deleteArticle)
    }

    state = {
        isOpen: false,
        modalIsOpen: false,
    };

    toggleTrancateText = (container) => {
        let hasShave = container.querySelector('.js-shave');
        if (hasShave !== null) {
            container.textContent = this.defaultText;
        } else {
            this.setVisibilityArticle(2, container, this.defaultText);
        }
    };

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    acceptingDelete() {
        console.log("accept");
        this.closeModal();
    }

    cancelingDelete() {
        console.log("cancel");
        this.closeModal();
    }

    toggleVisibleArticle = () => {
        this.setState({isOpen: !this.state.isOpen});
        this.toggleTrancateText(this.textContainer.current);
    };

    setVisibilityArticle = (countLines, container, defaultTextContent) => {
        const currentFontSize = parseInt(getComputedStyle(container).fontSize);
        const shortHeightOfContainer = countLines * (currentFontSize + 2);
        container.textContent = this.props.data.text;

        shave(container, shortHeightOfContainer, defaultTextContent);
    };

    componentDidMount() {
        const textWrapper = this.textContainer.current;
        const {text} = this.props.data;

        this.setVisibilityArticle(2, textWrapper, text);
        window.addEventListener('resize', () => {
            _.debounce(this.setVisibilityArticle(2, textWrapper, text), 300);
        });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
    }

    deleteArticle = () => {
        const {id, deleteArticle} = this.props;
        deleteArticle(id);
    };

    render() {
        const {title, date, text, comments, id} = this.props.data;
        const {isHideRemoveButton}= this.props;
        const {isOpen} = this.state;
        const currentTime = new Date(date).toISOString();

        return (
            <div className={styles.articleContainer}>

                <Modal
                    isOpen={this.state.modalIsOpen}>
                    <button onClick={this.closeModal}>close</button>
                    <div>
                        <div>Are you shure?</div>
                        <RemovingArticleComponent id={id}/>
                        <button onClick={this.cancelingDelete}>no</button>
                    </div>

                </Modal>
                <div className={styles.titleContainer}>
                    <div className="title-container">
                        <div>{title}</div>
                    </div>
                    <div>
                        <button className={"toggle-button"}
                                onClick={this.toggleVisibleArticle}>
                            {isOpen ? "hide article" : "show article"}
                        </button>
                        <button
                            className={isHideRemoveButton ? "" :  styles.hidden} onClick={this.deleteArticle}>
                            remove
                        </button>
                    </div>
                </div>
                <div className={styles.commentsContainer}>
                    <div className={styles.textAnimate}
                         ref={this.textContainer}>
                        {text}
                    </div>
                    <div>
                        publication date {currentTime}
                    </div>
                    <div>
                        <CommentsContainer articleId = {id} listOfComments={comments}/>
                    </div>
                </div>
            </div>
        );
    }
}

Article.propTypes = {
    hasShave: PropTypes.bool,
    currentFontSize: PropTypes.number,
    shortHeightOfContainer: PropTypes.number,
    title: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    currentTime: PropTypes.instanceOf(Date),
    text: PropTypes.string,
    comments: PropTypes.shape({
        commentId: PropTypes.number,
        commentText: PropTypes.string
    }),

};


export default Article;




