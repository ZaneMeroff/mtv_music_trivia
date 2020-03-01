import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Result.css';

export class Result extends Component {

  render() {

    let missedQuestions = this.props.wrong.map(q => {
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
        <p className='result-text'>way to go <span id='user-input'>{this.props.username}!</span></p>
        <p className='result-text'>score: <span id='user-input'>{this.props.right.length}0%</span></p>
        <Link to={'/'}><button className='new-game-button'>new game</button></Link>
        <div className='missed-question-outer-container'>
          {missedQuestions}
        </div>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  username: state.userName,
  right: state.correctQuestions,
  wrong: state.incorrectQuestions
});

export default connect(mapStateToProps)(Result);
