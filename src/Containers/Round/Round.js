import React, { Component, useState } from 'react';
import Response from '../../Components/Response/Response';
import { Redirect } from 'react-router-dom';
import { correctQuestions, incorrectQuestions } from '../../actions';
import { connect } from 'react-redux';
import './Round.css';
import PropTypes from 'prop-types';

export const Round = ({triviaData, addToCorrectQuestions, addToIncorrectQuestions}) => {
  const [counter, setCounter] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [rightORwrong, setRightOrWrong] = useState(null);

  const resetForNextRound = () => {
    setTimeout(
      () => {
        setCounter(counter+1);
        setRightOrWrong(null);
        setSelectedAnswer(null);
        setErrorMessage('');
      }, 500);
  }

  const displayRightOrWrong = answer => {
      return <Response text={ answer === true ? 'RIGHT!' : 'WRONG!'}/>
  }


  const submitAnswer = () => {
    if (!selectedAnswer) {
      setErrorMessage('You must select an answer');
    } else {
      const answer = selectedAnswer === triviaData[counter].correct_answer;
      if (answer) {
        addToCorrectQuestions(triviaData[counter])
      } else {
        triviaData[counter].your_answer = selectedAnswer;
        addToIncorrectQuestions(triviaData[counter])
      }
      setRightOrWrong(answer);
      resetForNextRound();
    }
  }



  if (counter > 9) {
    return (
        <Redirect to='/result' />
    );
  }

  if (!triviaData.length) {
    return (
      <Response text='loading...'/>
    );
  } else if (rightORwrong === null) {
    let buttons = triviaData[counter].all_answers.map(button => {
      return (
          <button 
            onClick={e => setSelectedAnswer(e.target.value)} 
            value={button} 
            key={button} 
            className={button === selectedAnswer ? 'answer-button active-button' : 'answer-button'}
          >
              {button}
          </button>
        )
    });
    return (
      <div className='round'>
        <div className='question-container'>
          <p className='question-text'>{triviaData[counter].question}</p>
        </div>
        {buttons}
        <p className='round-error-message'>{errorMessage}</p>
        <button className='submit-answer-button' onClick={submitAnswer}>submit answer</button>
      </div>
    );
  } else if (rightORwrong !== null) {
    return displayRightOrWrong(rightORwrong)
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
  triviaData: PropTypes.array,
  resetForNextRound: PropTypes.func,
  displayRightOrWrong: PropTypes.func,
  addToCorrectQuestions: PropTypes.func,
  addToIncorrectQuestions: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Round);
