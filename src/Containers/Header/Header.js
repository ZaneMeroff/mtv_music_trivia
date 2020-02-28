import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../../assets/mtv_logo_pink.png';
import './Header.css';

class Header extends Component {

  render() {
    return (
      <section id='header-container'>
        <img src={ logo } id='nav-logo' alt='mtv trivia logo'/>
        <div id='score-container'>
          <p id='question-tally'>Question {this.props.correct.length + this.props.incorrect.length} of 10</p>
          <p id='score-tally'><span id='correct-answers'> {this.props.correct.length}✔ </span> <span id='incorrect-answers'> {this.props.incorrect.length}x</span></p>
        </div>
        <div id='difficulty-container'>
          <p id='difficulty-heading'>Difficulty:</p>
          <p id='difficulty-rating'>{this.props.difficulty.toUpperCase()}</p>
        </div>
      </section>

    )

  }

}

export const mapStateToProps = (state) => ({
  difficulty: state.difficulty,
  correct: state.correctQuestions,
  incorrect: state.incorrectQuestions
});

export default connect(mapStateToProps)(Header);
