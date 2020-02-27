import React, { Component } from 'react';
import './Result.css';

class Result extends Component {

  render() {
    return (
      <div className='result-contianer'>
        <p className='result-text'>Way to go Zack!</p>
        <p className='result-text'>Difficulty: EASY</p>
        <p className='result-text'>Score: 90%</p>
        <button className='new-game-button'>NEW GAME</button>
      </div>
    )

  }

}

export default Result;
