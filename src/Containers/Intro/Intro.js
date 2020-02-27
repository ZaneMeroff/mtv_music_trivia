import React, { Component } from 'react';
import { fetchTriviaData } from '../../apiCalls';
import { connect } from 'react-redux';
import { getTriviaData } from '../../actions';
import './Intro.css'

class Intro extends Component {
  constructor() {
    super();
    this.state =
    {
      name: '',
      difficultyDropBox: null,
    }
  }

  getTriviaData = () => {
    fetchTriviaData(this.state.difficultyDropBox)
      .then(triviaData => this.props.addTriviaDataToStore(triviaData))
  }

  upDateDropBoxState = difficulty => {
    this.setState({difficultyDropBox: difficulty})
  }

  render() {
    return (
      <section id='intro-container'>
        <h1 id='temp-logo'>🎤 MTV MUSIC TRIVIA 👨‍🎤</h1>
        <input
          id='name-input'
          type='text'
          placeholder='enter your name...'
          name='name'
        />
        <select id='difficulty-dropbox' onChange={e => this.upDateDropBoxState(e.target.value)}>
          <option value={null}>select difficulty</option>
          <option value='easy'>EASY</option>
          <option value='medium'>MEDIUM</option>
          <option value='hard'>HARD</option>
        </select>
        <button id='start-game-button' onClick={this.getTriviaData}>START GAME</button>
      </section>
    )
  }

}

export const mapDispatchToProps = (dispatch) => ({
  addTriviaDataToStore: triviaData => dispatch(getTriviaData(triviaData))
})

export default connect(null, mapDispatchToProps)(Intro);
