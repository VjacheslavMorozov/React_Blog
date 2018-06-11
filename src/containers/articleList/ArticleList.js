import React from 'react';
import Article from "../../components/article/Article";

const ArticleList = (props) => {
    return (
        <div>
            {props.articleArray.map((article) =>

                <Article data={article} key={article.id}/>

            )}
        </div>

    );
};
export default ArticleList;