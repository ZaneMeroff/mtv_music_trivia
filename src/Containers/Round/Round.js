import React, { Component } from 'react';
import './Round.css';

class Round extends Component {

  render() {
    return (
      <div class='round-container'>
        <div class='question-container'>
          <p className='question-text'>From which country did the song Gangnam Style originate from?</p>
        </div>
        <div class='answer-container'>
          <p className='answer-text'>South Korea</p>
        </div>
        <div class='answer-container'>
          <p className='answer-text'>Japan</p>
        </div>
        <div class='answer-container'>
          <p className='answer-text'>North Korea</p>
        </div>
        <div class='answer-container'>
          <p className='answer-text'>China</p>
        </div>
        <button className='submit-answer-button'>SUBMIT ANSWER</button>
      </div>
    )


  }


}

export default Round;
