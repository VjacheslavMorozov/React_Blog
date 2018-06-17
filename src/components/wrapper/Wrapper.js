import React, {Component} from 'react';
import TitleContainer from "../../containers/titleContainer/TitleContainer";
import ArticleList from "../../containers/articleList/ArticleList";
import PropTypes from 'prop-types';

const Wrapper = () => {
    return (
        <div>
            <TitleContainer/>
            <ArticleList/>
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
