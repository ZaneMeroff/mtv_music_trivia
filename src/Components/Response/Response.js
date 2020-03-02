import React from 'react';
import './Response.css';
import PropTypes from 'prop-types';

const Response = props => {
    return (
      <div className='response-contianer'>
        <p className='response-text'>{props.text}</p>
      </div>
    )
}

Response.propTypes = {
  text: PropTypes.string,
}

export default Response;
