import React, {Component} from 'react';
import styles from './article.scss';
import shave from 'shave/dist/shave';
import CommentsList from "../../containers/commentsList/СommentsList";
import PropTypes from 'prop-types';
import Wrapper from "../wrapper/Wrapper";

class Article extends Component {
    constructor(props) {
        super(props);
        this.onScroll = this.onScroll;
        this.textContainer = React.createRef();
    }


    toggleTrancateText = (container) => {
        let hasShave = container.querySelector('.js-shave');
        if (hasShave !== null) {
            container.textContent = this.defaultText;
        } else {
            this.setVisibilityArticle(2, container, this.defaultText);
        }

    };
    state = {
        isOpen: false
    };

    toggleVisibleArticle = () => {
        this.setState({isOpen: !this.state.isOpen});
        this.toggleTrancateText(this.textContainer.current)
    };

    setVisibilityArticle = (countLines, container, defaultTextContent) => {
        const currentFontSize = parseInt(getComputedStyle(container).fontSize);
        const shortHeightOfContainer = countLines * (currentFontSize + 2);
        container.textContent = defaultTextContent;

        shave(container, shortHeightOfContainer, defaultTextContent);
    };


    componentDidMount() {
        const textWrapper = this.textContainer.current;
        this.defaultText = textWrapper.textContent;

        this.setVisibilityArticle(2, textWrapper, this.defaultText);
        let timer = null;
        window.addEventListener('resize', () => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                this.setVisibilityArticle(2, textWrapper, this.defaultText);
            }, 300);
        });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
    }

    render() {
        const {title, date, text, comments} = this.props.data;
        const {isOpen} = this.state;
        const currentTime = Date({date});

        return (
            <div className={styles.articleContainer}>
                <div className={styles.titleContainer} ref={this.textContainer}>
                    <div>{title}</div>
                    <button className={"toggle-button"}
                            onClick={this.toggleVisibleArticle}>
                        {isOpen ? "hide article" : "show article"}
                    </button>
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
                        <CommentsList listOfComments={comments}/>
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




