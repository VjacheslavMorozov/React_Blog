import React from 'react';
import styles from "./comments.scss";
import PropTypes from 'prop-types';

const Comment = (props) => {
    return (
        <div className={styles.comment}>{props.data}</div>
    );
};
export default Comment;