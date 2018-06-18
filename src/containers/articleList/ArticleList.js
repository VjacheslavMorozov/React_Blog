import React, {Component, createContext} from 'react';
import Article from "../../components/article/Article";
import PropTypes from 'prop-types';
import DataList from "../../dataList";
import ArticleContext from "../../ArticleContext"
import {RadioGroup, RadioButton} from 'react-radio-buttons';


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
            isShowRemovingButtons: event.target.value
        });
    }

    render() {
        const {articleList, isShowRemovingButtons} = this.state;
        return (
            <div>
                <div >
                    <input onChange={this.enableRemovingMode.bind(this)} type="radio" value={false} name="check"/> Enable Removing mode
                    <input onChange={this.enableRemovingMode.bind(this)} type="radio" value={true} name="check"/> Disable Removing mode
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