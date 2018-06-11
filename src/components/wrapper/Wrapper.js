import React from 'react';
import TitleContainer from "../../containers/titleContainer/TitleContainer";
import ArticleList from "../../containers/articleList/ArticleList";
import DataList from "../../dataList";

const Wrapper = () => {
    const data = DataList;
    return (
        <div>
            <TitleContainer />
            <ArticleList articleArray={data} />
        </div>
    );
};

export default Wrapper;
