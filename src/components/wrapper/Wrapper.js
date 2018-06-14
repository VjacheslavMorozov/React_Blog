import React from 'react';
import TitleContainer from "../../containers/titleContainer/TitleContainer";
import ArticleList from "../../containers/articleList/ArticleList";
import DataList from "../../dataList";
import PropTypes from 'prop-types';

const Wrapper = () => {
    const data = DataList;
    return (
        <div>
            <TitleContainer/>
            <ArticleList articleArray={data}/>
        </div>
    );
};

Wrapper.propTypes = {
    articleArray: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        text: PropTypes.string,
        date: PropTypes.instanceOf(Date),
        comments: PropTypes.shape({
            id: PropTypes.number,
            text: PropTypes.string
        })
    }),
};

export default Wrapper;
