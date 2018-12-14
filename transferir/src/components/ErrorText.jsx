import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ErrorText = (props) => (
        <div className="error">
            <span className="error__text">{props.errorText}</span>
        </div>
)
ErrorText.propTypes = {
    errorText:PropTypes.string
}
ErrorText.defaultProps = {
    errorText:''
};
export default ErrorText