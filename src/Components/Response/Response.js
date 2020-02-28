import React from 'react';
import './Response.css';

const Response = props => {
    return (
      <div className='response-contianer'>
        <p className='response-text'>{props.text}</p>
      </div>
    )
}

export default Response;
