import React from 'react';
import TitleContainer from "../../containers/titleContainer/titleContainer"
import ArticleList from "../../containers/articleList/articleList"
import DataList from "../../dataList"

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
