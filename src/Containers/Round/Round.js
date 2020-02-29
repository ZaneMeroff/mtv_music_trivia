import React, { Component } from 'react';
import Response from '../../Components/Response/Response';
import Result from '../Result/Result';
import { correctQuestions, incorrectQuestions } from '../../actions';
import { connect } from 'react-redux';
import './Round.css';

class Round extends Component {
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

      if (this.state.selectedAnswer === this.props.triviaData[this.state.counter].correct_answer) {
        this.props.addToCorrectQuestions(this.props.triviaData[this.state.counter])
        this.setState({rightORwrong: true})
      } else {
        this.props.triviaData[this.state.counter].your_answer = this.state.selectedAnswer
        this.props.addToIncorrectQuestions(this.props.triviaData[this.state.counter])
        this.setState({rightORwrong: false})
      }

    setTimeout(() => this.setState({counter: this.state.counter+1, rightORwrong: null}), 2000);

  }


  displayRightOrWrong = rightORwrong => {
    if (rightORwrong) {
      return <Response text='RIGHT!'/>
    } else {
      return <Response text='WRONG!'/>
    }
  }

  // determineEndOfGame = () => {
  //   if (i === 9) {
  //     return <Result />
  //   }
  // }

  render() {

    // need to determine end of game in here somewhere
    // need to get shuffleAnswers to work

    if (!this.props.triviaData.length) {
        return <Response text='loading...'/>

    } else if (this.state.rightORwrong === null) {

      let buttons = this.props.triviaData[this.state.counter].all_answers.map(button => {
        return <button onClick={e => this.updateSelectedAnswer(e.target.value)} value={button} className={button === this.state.selectedAnswer ? 'answer-button active-button' : 'answer-button'}>{button}</button>
      })

      return (
        <div className='round'>
          <div className='question-container'>
            <p className='question-text'>{this.props.triviaData[this.state.counter].question}</p>
          </div>
          {buttons}
          <button className='submit-answer-button' onClick={this.submitAnswer}>SUBMIT ANSWER</button>
          <p>{this.state.errorMessage}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Round);
