import React from 'react';
import PropTypes from 'prop-types';
import Article from "../article/Article";

function ArticleList(props) {
    const {articles = [], toggleRemoving} = props;
    return (
        <div>
            <div>
                <input onClick={props.toggleInputChange}
                       type="radio"
                       value="1"
                       name="check"
                /> Disable Removing mode
                <input onClick={props.toggleInputChange}
                       type="radio"
                       value="0"
                       name="check" defaultChecked={true}/>
                Enable Removing mode
            </div>
            <div>
                {articles.map((article) =>
                    <Article data={article} key={article.id} deleteArticle={props.deleteArticle} isHideRemoveButton={toggleRemoving}
                             id={article.id}/>
                )}
            </div>
        </div>
    )
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