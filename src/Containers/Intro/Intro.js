import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { fetchTriviaData } from '../../apiCalls';
import { connect } from 'react-redux';
import { saveTriviaData, saveUserName, saveDifficulty, clearCorrectQuestions, clearIncorrectQuestions } from '../../actions';
import './Intro.css'
import logo from '../../assets/mtv_logo_yellow.png';
import PropTypes from 'prop-types';

export class Intro extends Component {
  constructor(props) {
    super(props);
    this.state =
    {
      name: '',
      difficultyDropBox: 'easy',
      formCompleted: false
    }
  }

  startGame = () => {
    this.props.clearCorrectQuestions();
    this.props.clearIncorrectQuestions();
    this.storeUserName(this.state.name);
    this.storeDifficulty(this.state.difficultyDropBox)
    this.getTriviaData();
  }

  getTriviaData = () => {
    fetchTriviaData(this.state.difficultyDropBox)
      .then(unstructuredData => this.restructureData(unstructuredData))
      .then(restructuredData => this.props.saveTriviaDataToStore(restructuredData))
  }

  createAllAnswers = (correctAnswer, incorrectAnswers) => {
    let allAnswers = [...incorrectAnswers, correctAnswer]
    return this.shuffleAnswers(allAnswers)
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

  restructureData = data => {
    return data.results.map(q => {
      let allAnswers = this.createAllAnswers(q.correct_answer, q.incorrect_answers)
      return {
        question: this.cleanData(q.question),
        correct_answer: this.cleanData(q.correct_answer),
        incorrect_answers: q.incorrect_answers,
        all_answers: allAnswers.map(answer => this.cleanData(answer)),
        your_answer: null
      }
    })
  }

  cleanData = data => {
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

  storeUserName = name => {
    this.props.saveUserNameToStore(name);
  }

  storeDifficulty = difficulty => {
    this.props.saveDifficultyToStore(difficulty);
  }

  updateDropBoxState = difficulty => {
    this.setState({difficultyDropBox: difficulty});
  }

  updateState = e => {
    this.setState( {[e.target.name]: e.target.value} );
  }

  onSubmit = e => {
    e.preventDefault();
    this.setState({ formCompleted: true })
  }

  render() {
    return (
      <form id='intro-container' onSubmit={this.onSubmit}>
        {this.state.formCompleted && <Redirect to={{pathname: '/round'}}/>}
        <img src={ logo } id='large-logo' alt='mtv trivia logo'/>
        <h1 id='trivia-text'>T R I V I A</h1>
        <input
          required
          id='name-input'
          type='text'
          placeholder='enter your name...'
          name='name'
          value={this.state.name}
          onChange={this.updateState}
        />
        <div id='difficulty-container'>
          <p id='difficulty-text'>difficulty:</p>
          <select id='difficulty-dropbox' onChange={e => this.updateDropBoxState(e.target.value)}>
            <option value='easy'>easy</option>
            <option value='medium'>medium</option>
            <option value='hard'>hard</option>
          </select>
        </div>
        <button type='submit' id='start-game-button' onClick={this.startGame}>start game</button>
      </form>
    )
  }
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
