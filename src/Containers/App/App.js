import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Intro from '../Intro/Intro';
import Header from '../Header/Header';
import RoundContainer from '../RoundContainer/RoundContainer';
import QResponse from '../QResponse/QResponse';
import Result from '../Result/Result';
import './App.css';

class App extends Component {

  render() {
    return (
      <div id='outer-div'>
        <section id='game-container'>
          <Route exact path='/'>
            <Intro />
          </Route>
          <Route exact path='/round'>
            <Header />
            <RoundContainer />
          </Route>
        </section>
      </div>
    )


  }


}

export default App;
