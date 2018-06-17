import React, {Component} from 'react';
import Article from "../../components/article/Article";
import PropTypes from 'prop-types';
import DataList from "../../dataList";
import ArticleProvider from "../../components/articleProvider/ArticleProvider"


class ArticleList extends Component {
    constructor() {
        super();
        this.state = {
            articleList: DataList
        }
    }

    render() {
        return (
            <ArticleProvider>
                {this.state.articleList.map((article) =>
                    <Article data={article} key={article.id}/>
                )}
            </ArticleProvider>
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