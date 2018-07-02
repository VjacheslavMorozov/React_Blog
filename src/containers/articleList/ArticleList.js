import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Article from "../../components/article/article";


import {toggleInputChange} from '../../reducers/toggleRemoving';


function ArticleList(props) {
    const {articles = [], toggleRemoving} = props;
    console.log(props)

    return (
        <div>
            <div>
                <input onClick={props.toggleInputChange}
                       type="radio"
                       value="1"
                       name="check"
                /> Enable
                Removing mode
                <input onClick={props.toggleInputChange}
                       type="radio"
                       value="0"
                       name="check" defaultChecked={true}/>
                Disable Removing mode
            </div>
            <div>
                {articles.map((article) =>
                    <Article data={article} key={article.id} isHideRemoveButton={toggleRemoving ? toggleRemoving.visibilityRemovingMenu : false}
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

const mapStateToProps = (state) => {
    return {
        articles: state.articles,
        toggleRemoving: !state.isShowRemovingButton
    }
};

const mapDispatchToProps = {
    toggleInputChange,
};


export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);