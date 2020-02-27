import React, { Component } from 'react';
import './Intro.css'

class Intro extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <section id='intro-container'>
        <input
          id='name-input'
          type='text'
          placeholder='enter your name...'
          name='name'
        />
        <select id='difficulty-dropbox'>
          <option value='easy'>EASY</option>
          <option value='medium'>MEDIUM</option>
          <option value='hard'>HARD</option>
        </select>
        <button id='start-game-button'>START GAME</button>
      </section>
    )
  }

}


export default Intro;
