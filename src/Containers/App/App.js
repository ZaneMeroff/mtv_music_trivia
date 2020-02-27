import React, { Component } from 'react';
import Intro from '../Intro/Intro';
import './App.css';

class App extends Component {

  render() {
    return (
      <div id='outer-div'>
        <section id='game-container'>
          <h1>MTV MUSIC TRIVIA! 👨‍🎤</h1>
          <Intro />
        </section>
      </div>
    )


  }


}

export default App;
