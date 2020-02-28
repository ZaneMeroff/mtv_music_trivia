import React, { Component } from 'react';
import './Round.css';

class Round extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedAnswer: null }
  }

  upDateSelectedAnswer = answer => {
    this.setState({selectedAnswer: answer })
  }

  submitAnswer = () => {


  }

  render() {
    return (
      <div className='round'>
        <div className='question-container'>
          <p className='question-text'>From which country did the song Gangnam Style originate from?</p>
        </div>
        <button onClick={e => this.upDateSelectedAnswer(e.target.value)} value='South Korea' className={this.state.selectedAnswer ? 'answer-button active-button' : 'answer-button'}>South Korea</button>
        <button onClick={e => this.upDateSelectedAnswer(e.target.value)} value='Japan' className='answer-button'>Japan</button>
        <button onClick={e => this.upDateSelectedAnswer(e.target.value)} value='South Korea' className='answer-button'>North Korea</button>
        <button onClick={e => this.upDateSelectedAnswer(e.target.value)} value='China' className='answer-button'>China</button>
        <button className='submit-answer-button' onClick={this.submitAnswer}>SUBMIT ANSWER</button>
      </div>
    )

  }

}

export default Round;

// From which country did the song Gangnam Style originate from?
