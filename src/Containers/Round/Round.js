import React, { Component } from 'react';
import Response from '../../Components/Response/Response';
import Result from '../Result/Result';
import { correctQuestions, incorrectQuestions } from '../../actions';
import { connect } from 'react-redux';
import './Round.css';

let i = 0;

class Round extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAnswer: null,
      errorMessage: ''
    }
  }

  updateSelectedAnswer = answer => {
    this.setState({selectedAnswer: answer })
  }

  submitAnswer = () => {

      if (this.state.selectedAnswer === this.props.triviaData[i].correct_answer) {
        this.props.addToCorrectQuestions(this.props.triviaData[i])
        window.alert('RIGHT!')
      } else {
        this.props.triviaData[i].your_answer = this.state.selectedAnswer
        this.props.addToIncorrectQuestions(this.props.triviaData[i])
        window.alert('WRONG!')
      }

    i++
    this.forceUpdate()
  }

  determineEndOfGame = () => {
    if (i === 9) {
      return <Result />
    }
  }

  shuffleAnswers = a => {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
  }

  render() {

    // need to determine end of game in here somewhere
    // need to get shuffleAnswers to work

    if (!this.props.triviaData.length) {
        return <Response text='loading...'/>
    } else {

    let allAnswers = [...this.props.triviaData[i].incorrect_answers, this.props.triviaData[i].correct_answer]

    let buttons = allAnswers.map(button => {
      return <button onClick={e => this.updateSelectedAnswer(e.target.value)} value={button} className={button === this.state.selectedAnswer ? 'answer-button active-button' : 'answer-button'}>{button}</button>
    })

      return (
        <div className='round'>
          <div className='question-container'>
            <p className='question-text'>{this.props.triviaData[i].question}</p>
          </div>
          {buttons}
          <button className='submit-answer-button' onClick={this.submitAnswer}>SUBMIT ANSWER</button>
          <p>{this.state.errorMessage}</p>
        </div>
      )
    }
  }

}

export const mapStateToProps = (state) => ({
  triviaData: state.triviaData,
});

export const mapDispatchToProps = (dispatch) => ({
  addToCorrectQuestions: round => dispatch(correctQuestions(round)),
  addToIncorrectQuestions: round => dispatch(incorrectQuestions(round))
})

export default connect(mapStateToProps, mapDispatchToProps)(Round);
