import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Response from '../../Components/Response/Response';
import Intro from '../Intro/Intro';
import Header from '../Header/Header';
import Result from '../Result/Result';
import Round from '../Round/Round';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div id='outer-div'>
        <section id='game-container'>
          <Switch>
            <Route exact path='/intro'>
              <Intro />
            </Route>
            <Route exact path='/round'>
              <Header />
              <Round/>
            </Route>
            <Route exact path='/result'>
              <Header />
              <Result />
            </Route>
            <Response text='Page Not Found!'/>
          </Switch>
        </section>
      </div>
    )
  }
}

export default App;
