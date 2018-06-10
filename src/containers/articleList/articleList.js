import React from 'react';
import Article from "../../components/article/article";

const ArticleList = (props) => {
    const articles = props.articleArray;
    const listItems = articles.map((article) =>
        <Article data={article} key={article.id}/>
    );
    return (
        <div>
            {listItems}
        </div>

    );
};
export default ArticleList;