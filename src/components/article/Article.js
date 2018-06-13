import React, {Component} from 'react';
import styles from './article.scss';
import shave from 'shave/dist/shave';
import CommentsList from "../../containers/commentsList/СommentsList";

class Article extends Component {
    constructor(props) {
        super(props);
        this.textContainer = React.createRef();
    }

    state = {
        isOpen: false
    };

    toggleVisibleArticle = () => {
        this.setState({isOpen: !this.state.isOpen});
    };

    setVisibilityArticle = (countLines) => {
        const currentFontSize = parseInt(getComputedStyle(this.textContainer.current).fontSize);
        const shortHeightOfContainer = countLines * (currentFontSize + 2);
        shave(this.textContainer.current, shortHeightOfContainer);
    };

    componentDidMount() {
        this.setVisibilityArticle(2);
        window.addEventListener("resize", function () {
            console.log('resize')

        });


        var w = document.querySelector("#width"),
            h = document.querySelector("#height"),
            c = document.querySelector("#calls"),
            timeout = false, // holder for timeout id
            delay = 250, // delay after event is "complete" to run callback
            calls = 0;

// window.resize callback function


// window.resize event listener
        window.addEventListener('resize', function() {
            // clear the timeout
            clearTimeout(timeout);
            // start timing for event "completion"
            timeout = setTimeout(this.setVisibilityArticle(2), delay);
        });



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

export default Article;




