import React, {Component, createContext} from 'react';
import Article from "../../components/article/Article";
import PropTypes from 'prop-types';
import DataList from "../../dataList";
import ArticleContext from "../../ArticleContext"
import ArticleProvider from "../../components/articleProvider/ArticleProvider"


class ArticleList extends Component {
    constructor() {
        super();
        this.state = {
            articleList: DataList
        }
    }

    render() {
        const {articleList} = this.state;
        return (
            <div>
            <ArticleContext.Provider value = {{
                listOfArticles: this.state.articleList,
                updateArticleList: id =>  {
                    console.log(id, articleList.filter(article => article.id !== id))
                    this.setState({
                        articleList: articleList.filter(article => article.id !== id )
                    })
                }
            }}>
                {this.state.articleList.map((article) =>
                    <Article data={article} key={article.id} id={article.id}/>
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