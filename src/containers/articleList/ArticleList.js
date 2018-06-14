import React from 'react';
import Article from "../../components/article/Article";
import PropTypes from 'prop-types';
import CommentsList from "../commentsList/СommentsList";

const ArticleList = (props) => {
    return (
        <div>
            {props.articleArray.map((article) =>

                <Article data={article} key={article.id}/>
            )}
        </div>

    );

};
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