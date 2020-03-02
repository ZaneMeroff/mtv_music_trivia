import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Result.css';
import PropTypes from 'prop-types';

export const Result = props => {
    let missedQuestions = props.wrong.map(q => {
      return (
        <div key={q.question} className='missed-question-container'>
          <p className='missed-question-text'>{q.question}</p>
          <p className='missed-question-text'>your answer: <span className='missed-question-data'>{q.your_answer}</span></p>
          <p className='missed-question-text'>correct answer: <span className='missed-question-data'>{q.correct_answer}</span></p>
        </div>
      )
    })
    return (
      <div className='result-contianer'>
        <p className='result-text'>way to go <span id='user-input'>{props.username}!</span></p>
        <p className='result-text'>score: <span id='user-input'>{props.right.length}0%</span></p>
        <Link to={'/intro'}><button className='new-game-button'>new game</button></Link>
        <div className='missed-question-outer-container'>
          {missedQuestions}
        </div>
      </div>
    )
}

export const mapStateToProps = (state) => ({
  username: state.userName,
  right: state.correctQuestions,
  wrong: state.incorrectQuestions
});

Result.propTypes = {
  username: PropTypes.string,
  right: PropTypes.array,
  wrong: PropTypes.array
}

export default connect(mapStateToProps)(Result);
