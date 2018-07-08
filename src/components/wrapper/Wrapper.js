import React from 'react';
import TitleContainer from "../../containers/titleContainer/TitleContainer";
import ArticleContainer from "../../containers/articleContainer/ArticleContainer";
import FormContainer from "../../containers/FormContainer/FormContainer";
import PropTypes from 'prop-types';
import RegistrationModal from "../../containers/RegistrationModal/RegistrationModal";
import LoginModal from "../../containers/LoginModal/LoginModal";

const Wrapper = () => {
    return (
        <div>
            <TitleContainer/>
            <ArticleContainer/>
            <FormContainer/>
            <RegistrationModal />
            <LoginModal />
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
