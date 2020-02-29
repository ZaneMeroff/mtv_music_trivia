import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Result.css';

class Result extends Component {

  render() {

    let missedQuestions = this.props.wrong.map(q => {
      return (
        <div className='missed-quetion-container'>
          <p className='missed-question-text'>question: {q.question}</p>
          <p className='missed-question-text'>your answer: {q.your_answer}</p>
          <p className='missed-question-text'>correct answer: {q.correct_answer}</p>
        </div>
      )
    })

    return (
      <div className='result-contianer'>
        <p className='result-text'>way to go <span id='user-input'>{this.props.username}</span></p>
        <p className='result-text'>difficulty: <span id='user-input'>{this.props.difficulty}</span></p>
        <p className='result-text'>score: <span id='user-input'>{this.props.right.length}0%</span></p>
        <button className='new-game-button'>new game</button>

        <div className='missed-question-outer-container'>
          <div className='missed-question-container'>
            <p className='missed-question-text'>question: Which one of these songs did the group Men At Work NOT make?</p>
            <p className='missed-question-text'>your answer: Who Can It Be Now?</p>
            <p className='missed-question-text'>correct answer: Safety Dance</p>
          </div>
          {missedQuestions}
        </div>

      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  difficulty: state.difficulty,
  username: state.userName,
  right: state.correctQuestions,
  wrong: state.incorrectQuestions
});

export default connect(mapStateToProps)(Result);
