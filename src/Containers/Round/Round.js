import React, { Component } from 'react';
import { correctQuestions, incorrectQuestions } from '../../actions';
import { connect } from 'react-redux';
import './Round.css';

let i = 0;

class Round extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAnswer: null,
    }
  }

  updateSelectedAnswer = answer => {
    this.setState({selectedAnswer: answer })
  }

  submitAnswer = () => {
    if (this.state.selectedAnswer === this.props.triviaData[i].correct_answer) {
      this.props.addToCorrectQuestions(this.props.triviaData[i])
      window.alert('youre right!')
    } else {
      this.props.addToIncorrectQuestions(this.props.triviaData[i])
      window.alert('you fucking suck! -Johnny')
    }
    i++
    this.forceUpdate()
  }

  shuffleAnswers = a => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

  render() {

    let allAnswers = []

    if (!this.props.triviaData.length) {
        return <h1>loading</h1>
    } else {

    allAnswers = [...this.props.triviaData[i].incorrect_answers, this.props.triviaData[i].correct_answer]
    let shuffledAnswers = this.shuffleAnswers(allAnswers)
    console.log(shuffledAnswers, allAnswers);
      return (
        <div className='round'>
          <div className='question-container'>
            <p className='question-text'>{this.props.triviaData[i].question}</p>
          </div>
          <button onClick={e => this.updateSelectedAnswer(e.target.value)} value={this.props.triviaData[i].correct_answer} className={this.state.selectedAnswer ? 'answer-button active-button' : 'answer-button'}>{this.props.triviaData[i].correct_answer}</button>
          <button onClick={e => this.updateSelectedAnswer(e.target.value)} value='Japan' className='answer-button'>{this.props.triviaData[i].incorrect_answers[0]}</button>
          <button onClick={e => this.updateSelectedAnswer(e.target.value)} value='North Korea' className='answer-button'>{this.props.triviaData[i].incorrect_answers[1]}</button>
          <button onClick={e => this.updateSelectedAnswer(e.target.value)} value='China' className='answer-button'>{this.props.triviaData[i].incorrect_answers[2]}</button>
          <button className='submit-answer-button' onClick={this.submitAnswer}>SUBMIT ANSWER</button>
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
