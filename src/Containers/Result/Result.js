import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Result.css';
import PropTypes from 'prop-types';

export const Result = ({wrong, username, right}) => {
    let missedQuestions = wrong.map(({question, your_answer, correct_answer}) => {
      return (
        <div key={question} className='missed-question-container'>
          <p className='missed-question-text'>{question}</p>
          <p className='missed-question-text'>your answer: <span className='missed-question-data'>{your_answer}</span></p>
          <p className='missed-question-text'>correct answer: <span className='missed-question-data'>{correct_answer}</span></p>
        </div>
      )
    })
    return (
      <div className='result-contianer'>
        <p className='result-text'>way to go <span id='user-input'>{username}!</span></p>
        <p className='result-text'>score: <span id='user-input'>{right.length}0%</span></p>
        <Link to={'/intro'}><button className='new-game-button'>new game</button></Link>
        <div className='missed-question-outer-container'>
          {missedQuestions}
        </div>
      </div>
    )
}

export const mapStateToProps = ({userName:username, correctQuestions:right, incorrectQuestions:wrong}) => ({
  username,
  right,
  wrong
});

Result.propTypes = {
  username: PropTypes.string,
  right: PropTypes.array,
  wrong: PropTypes.array
}

export default connect(mapStateToProps)(Result);
