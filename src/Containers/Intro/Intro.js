import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchTriviaData } from '../../apiCalls';
import { connect } from 'react-redux';
import { saveTriviaData, saveUserName, saveDifficulty } from '../../actions';
import './Intro.css'
import logo from '../../assets/mtv_logo_yellow.png';

class Intro extends Component {
  constructor() {
    super();
    this.state =
    {
      name: '',
      difficultyDropBox: null,
    }
  }

  startGame = () => {
    this.storeUserName(this.state.name);
    this.storeDifficulty(this.state.difficultyDropBox)
    this.getTriviaData();
  }

  getTriviaData = () => {
    fetchTriviaData(this.state.difficultyDropBox)
      .then(dirtyData => this.restructureData(dirtyData))
      .then(cleanData => this.props.saveTriviaDataToStore(cleanData))
  }

  restructureData = data => {
    return data.results.map(q => {
      return {
        question: q.question,
        correct_answer: q.correct_answer,
        incorrect_answers: q.incorrect_answers,
        your_answer: null
      }
    })
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

  render() {
    return (
      <section id='intro-container'>
        <img src={ logo } id='large-logo' alt='mtv trivia logo'/>
        <h1 id='trivia-text'>T R I V I A</h1>
        <input
          id='name-input'
          type='text'
          placeholder='enter your name...'
          name='name'
          value={this.state.name}
          onChange={this.updateState}
        />
        <select id='difficulty-dropbox' onChange={e => this.updateDropBoxState(e.target.value)}>
          <option value={null}>select difficulty</option>
          <option value='easy'>easy</option>
          <option value='medium'>medium</option>
          <option value='hard'>hard</option>
        </select>
        <Link to={'/round'}><button id='start-game-button' onClick={this.startGame}>start game</button></Link>
      </section>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  saveTriviaDataToStore: triviaData => dispatch(saveTriviaData(triviaData)),
  saveUserNameToStore: userName => dispatch(saveUserName(userName)),
  saveDifficultyToStore: difficulty => dispatch(saveDifficulty(difficulty))
})

export default connect(null, mapDispatchToProps)(Intro);
