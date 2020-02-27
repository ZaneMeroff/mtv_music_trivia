import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

  render() {
    return (
      <section id='header-container'>
        <div id='nav-logo'>logo</div>
        <div id='score-container'>
          <h2>Q 5/10</h2>
          <h2>R3 W2</h2>
        </div>
        <div id='difficulty-container'>
          <h2>DIFFICULTY</h2>
          <h2>EASY</h2>
        </div>
      </section>

    )


  }


}

export default Header;
