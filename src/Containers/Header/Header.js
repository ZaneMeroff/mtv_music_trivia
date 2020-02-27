import React, { Component } from 'react';
import logo from '../../assets/mtv_logo_yellow.png';
import './Header.css';

class Header extends Component {

  render() {
    return (
      <section id='header-container'>
        <img src={ logo } id='nav-logo' alt='mtv trivia logo'/>
        <div id='score-container'>
          <p id='question-tally'>question 5 of 10</p>
          <p id='score-tally'><span id='correct-answers'>3 </span>/<span id='incorrect-answers'> 2</span></p>
        </div>
        <div id='difficulty-container'>
          <p id='difficulty-heading'>DIFFICULTY:</p>
          <p id='difficulty-rating'>EASY</p>
        </div>
      </section>

    )


  }


}

export default Header;
