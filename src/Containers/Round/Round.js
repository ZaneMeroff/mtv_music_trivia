import React, { Component } from 'react';
import Response from '../../Components/Response/Response';
import { Redirect } from 'react-router-dom';
import { correctQuestions, incorrectQuestions } from '../../actions';
import { connect } from 'react-redux';
import './Round.css';
import PropTypes from 'prop-types';

export class Round extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAnswer: null,
      errorMessage: '',
      rightORwrong: null,
      counter: 0
    }
  }

  updateSelectedAnswer = answer => {
    this.setState({selectedAnswer: answer })
  }

  submitAnswer = () => {

      if (!this.state.selectedAnswer) {
        this.setState({errorMessage: 'You Must Select an Answer!'})
      } else if (this.state.selectedAnswer === this.props.triviaData[this.state.counter].correct_answer) {
        this.props.addToCorrectQuestions(this.props.triviaData[this.state.counter])
        this.setState({rightORwrong: true})
        this.resetForNextRound();
      } else {
        this.props.triviaData[this.state.counter].your_answer = this.state.selectedAnswer
        this.props.addToIncorrectQuestions(this.props.triviaData[this.state.counter])
        this.setState({rightORwrong: false})
        this.resetForNextRound();
      }
  }

  resetForNextRound = () => {
    setTimeout(() => this.setState({counter: this.state.counter+1, rightORwrong: null, selectedAnswer: null, errorMessage: ''}), 800);
  }

  displayRightOrWrong = rightORwrong => {
    if (rightORwrong) {
      return <Response text={this.positiveWords()}/>
    } else {
      return <Response text={this.negativeWords()}/>
    }
  }

  positiveWords = () => {
    let words = ['RAD!', 'RIGHT ON!', 'COWABUNGA!', 'GNARLY!', 'BODACIOUS!', 'TOTALLY!', 'TUBULAR!', 'SUPER FLY!', 'SWEET!', 'DOPE!']
    let randomNum = Math.floor(Math.random() * 10)
    return words[randomNum]
  }

  negativeWords = () => {
    let words = ['bummer...', 'lame...', 'no dice...', 'what a drag...', 'barf...', 'bogus...']
    let randomNum = Math.floor(Math.random() * 6)
    return words[randomNum]
  }

  render() {

    if (this.state.counter > 9) {
      return <Redirect to='/result' />
    }

    if (!this.props.triviaData.length) {
        return <Response text='loading...'/>

    } else if (this.state.rightORwrong === null) {

      let buttons = this.props.triviaData[this.state.counter].all_answers.map(button => {
        return <button onClick={e => this.updateSelectedAnswer(e.target.value)} value={button} key={button} className={button === this.state.selectedAnswer ? 'answer-button active-button' : 'answer-button'}>{button}</button>
      })

      return (
        <div className='round'>
          <div className='question-container'>
            <p className='question-text'>{this.props.triviaData[this.state.counter].question}</p>
          </div>
          {buttons}
          <p className='round-error-message'>{this.state.errorMessage}</p>
          <button className='submit-answer-button' onClick={this.submitAnswer}>submit answer</button>
        </div>
      )
    } else if (this.state.rightORwrong !== null) {
      return this.displayRightOrWrong(this.state.rightORwrong)
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

Round.propTypes = {
  selectedAnswer: PropTypes.string,
  errorMessage: PropTypes.string,
  rightORwrong: PropTypes.bool,
  counter: PropTypes.number,
  updateSelectedAnswer: PropTypes.func,
  submitAnswer: PropTypes.func,
  triviaData: PropTypes.object,
  resetForNextRound: PropTypes.func,
  displayRightOrWrong: PropTypes.func,
  addToCorrectQuestions: PropTypes.func,
  addToIncorrectQuestions: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Round);
