import React, { Component } from 'react';
import Intro from '../Intro/Intro';
import Header from '../Header/Header';
import Round from '../Round/Round';
import QResponse from '../QResponse/QResponse';
import Result from '../Result/Result';
import './App.css';

class App extends Component {

  render() {
    return (
      <div id='outer-div'>
        <section id='game-container'>
          <Result />
        </section>
      </div>
    )


  }


}

export default App;
