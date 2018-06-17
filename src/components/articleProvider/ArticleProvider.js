import React, {Component} from 'react';
import Article from "../../components/article/Article";
import PropTypes from 'prop-types';
import DataList from "../../dataList";
import ArticleContext from "../../ArticleContext";
import _ from "lodash"


class ArticleList extends Component{
    constructor() {
        super();
        this.state = {
            articleList: DataList
        }
    }

    render() {
        const {articleList} = this.state;
        const {id} = this.props;
        return (
            <ArticleContext.Provider value = {{
                listOfArticles: this.state.articleList,
                updateArticleList: e => {
                    this.setState = {
                        articleList: articleList
                    }
                }
            }}>
                {this.props.children}
            </ArticleContext.Provider>
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