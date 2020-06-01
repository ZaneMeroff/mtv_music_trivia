import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Intro from '../../Containers/Intro/Intro';
import Header from '../../Containers/Header/Header';
import Result from '../../Containers/Result/Result';
import Round from '../../Containers/Round/Round';
import './App.css';

export const App = () => {
  
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
          <Redirect to='/intro'/>
        </Switch>
      </section>
    </div>
  )
}

export default App;
