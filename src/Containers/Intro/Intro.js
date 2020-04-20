import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { fetchTriviaData } from '../../apiCalls';
import { connect } from 'react-redux';
import { saveTriviaData, saveUserName, saveDifficulty, clearCorrectQuestions, clearIncorrectQuestions } from '../../actions';
import './Intro.css'
import logo from '../../assets/mtv_logo_yellow.png';
import PropTypes from 'prop-types';

export const Intro = (props) => {
    const [name, setName] = useState('');
    const [difficultyDropBox, setDifficultyDropBox] = useState('easy');
    const [formCompleted, setFormCompleted] = useState(false);

    const getTriviaData = () => {
      fetchTriviaData(difficultyDropBox)
        .then(unstructuredData => restructureData(unstructuredData))
        .then(restructuredData => props.saveTriviaDataToStore(restructuredData))
    }

    const startGame = () => {
      props.clearCorrectQuestions();
      props.clearIncorrectQuestions();
      storeUserName(name);
      storeDifficulty(difficultyDropBox)
      getTriviaData();
    }
  
    const createAllAnswers = (correctAnswer, incorrectAnswers) => {
      let allAnswers = [...incorrectAnswers, correctAnswer]
      return shuffleAnswers(allAnswers)
    }

    const shuffleAnswers = a => {
      let j, x, i;
      for (i = a.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = a[i];
          a[i] = a[j];
          a[j] = x;
      }
      return a;
    }


  const cleanData = data => {
    if (data.includes('&quot;') ||
        data.includes('&Uuml;') ||
        data.includes('&#039;') ||
        data.includes('&amp;')) {
      data = data.split('&quot;').join('')
      data = data.split('&#039;').join('')
      data = data.split('&amp;').join(' ')
      data = data.split('&Uuml;').join('U')
      return data
    } else {
      return data
    }
  }

    const storeUserName = name => {
      props.saveUserNameToStore(name);
    }

    const storeDifficulty = difficulty => {
      props.saveDifficultyToStore(difficulty);
    }
  
    const onSubmit = event => {
      event.preventDefault();
      setFormCompleted(true);
    }
    const restructureData = ({results}) => {
      return results.map(({correct_answer, incorrect_answers, question}) => {
        let allAnswers = createAllAnswers(correct_answer, incorrect_answers)
        return {
          question: cleanData(question),
          correct_answer: cleanData(correct_answer),
          incorrect_answers: incorrect_answers,
          all_answers: allAnswers.map(answer => cleanData(answer)),
          your_answer: null
        }
      })
    }
  
    return (
      <form id='intro-container' onSubmit={onSubmit}>
        {formCompleted && <Redirect to={{pathname: '/round'}} />}
        <img src={ logo } id='large-logo' alt='mtv trivia logo' />
        <h1 id='trivia-text'>T R I V I A</h1>
        <input
          required
          id='name-input'
          type='text'
          maxLength='10'
          placeholder='enter your name...'
          name='name'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <div id='difficulty-dropbox-container'>
          <p id='difficulty-text'>difficulty:</p>
          <select id='difficulty-dropbox' onChange={e => setDifficultyDropBox(e.target.value)}>
            <option value='easy'>easy</option>
            <option value='medium'>medium</option>
            <option value='hard'>hard</option>
          </select>
        </div>
        <button type='submit' id='start-game-button' onClick={startGame}>start game</button>
      </form>
    )
}

export const mapDispatchToProps = (dispatch) => ({
  saveTriviaDataToStore: triviaData => dispatch(saveTriviaData(triviaData)),
  saveUserNameToStore: userName => dispatch(saveUserName(userName)),
  saveDifficultyToStore: difficulty => dispatch(saveDifficulty(difficulty)),
  clearCorrectQuestions: () => dispatch(clearCorrectQuestions()),
  clearIncorrectQuestions: () => dispatch(clearIncorrectQuestions())
})

Intro.propTypes = {
  name: PropTypes.string,
  difficultyDropBox: PropTypes.string,
  formCompleted: PropTypes.bool,
  startGame: PropTypes.func,
  getTriviaData: PropTypes.func,
  createAllAnswers: PropTypes.func,
  shuffleAnswers: PropTypes.func,
  restructureData: PropTypes.func,
  cleanData: PropTypes.func,
  storeUserName: PropTypes.func,
  storeDifficulty: PropTypes.func,
  updateDropBoxState: PropTypes.func,
  updateState: PropTypes.func,
  onSubmit: PropTypes.func,
  saveTriviaDataToStore: PropTypes.func,
  saveUserNameToStore: PropTypes.func,
  saveDifficultyToStore: PropTypes.func,
  clearCorrectQuestions: PropTypes.func,
  clearIncorrectQuestions: PropTypes.func,
}

export default connect(null, mapDispatchToProps)(Intro);
