import React, {Component, createContext} from 'react';
import Article from "../../components/article/Article";
import PropTypes from 'prop-types';
import DataList from "../../dataList";
import ArticleContext from "../../ArticleContext";

class ArticleList extends Component {
    constructor() {
        super();
        this.state = {
            articleList: DataList,
            isShowRemovingButtons: true
        };
    }

    enableRemovingMode(event) {
        this.setState({
            isShowRemovingButtons: event.target.value === 1
        });
    }

    render() {
        const {articleList, isShowRemovingButtons} = this.state;
        return (
            <div>
                <div >
                    <input onChange={this.enableRemovingMode.bind(this)} type="radio" value="1" name="check"/> Enable Removing mode
                    <input onChange={this.enableRemovingMode.bind(this)} type="radio" value="0" name="check"/> Disable Removing mode
                </div>

                <ArticleContext.Provider value={{
                    listOfArticles: this.state.articleList,
                    updateArticleList: id => {
                        this.setState({
                            articleList: articleList.filter(article => article.id !== id)
                        })
                    }
                }}>
                    {this.state.articleList.map((article) =>
                        <Article data={article} key={article.id} isHideRemoveButton={isShowRemovingButtons}
                                 id={article.id}/>
                    )}
                </ArticleContext.Provider>
            </div>
        )
    }
}

ArticleList.propTypes = {
    articleArray: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            text: PropTypes.string,
            date: PropTypes.number,
            comments: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.number,
                    text: PropTypes.string
                })
            )
        })
    )
};


export default ArticleList;