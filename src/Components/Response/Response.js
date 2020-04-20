import React from 'react';
import './Response.css';
import PropTypes from 'prop-types';

const Response = ({text}) => {
    return (
      <div className='response-contianer'>
        <p className='response-text'>{text}</p>
      </div>
    )
}

Response.propTypes = {
  text: PropTypes.string,
}

export default Response;
