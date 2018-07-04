import React from 'react';
import TitleContainer from "../../containers/titleContainer/TitleContainer";
import ArticleContainer from "../../containers/articleContainer/ArticleContainer";
import FormContainer from "../../containers/FormContainer/FormContainer";
import PropTypes from 'prop-types';

const Wrapper = () => {
    return (
        <div>
            <TitleContainer/>
            <ArticleContainer/>
            <FormContainer/>
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
