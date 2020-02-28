import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Intro from '../Intro/Intro';
import Header from '../Header/Header';
import RoundContainer from '../RoundContainer/RoundContainer';
import QResponse from '../QResponse/QResponse';
import Result from '../Result/Result';
import Round from '../Round/Round';
import './App.css';

class App extends Component {

  render() {
    return (
      <div id='outer-div'>
        <section id='game-container'>
        <Switch>

        <Route exact path='/'>
          <Intro />
        </Route>

        <Route exact path='/round'>
          <Header />
          <Round/>
        </Route>

        <h1>BAD FILE PATH!</h1>
        </Switch>

        </section>
      </div>
    )


  }


}

export default App;
