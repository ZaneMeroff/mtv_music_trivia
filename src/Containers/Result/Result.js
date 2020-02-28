import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Result.css';

class Result extends Component {

  render() {
    return (
      <div className='result-contianer'>
        <p className='result-text'>Way to go <span id='user-input'>{this.props.username}</span></p>
        <p className='result-text'>difficulty: <span id='user-input'>{this.props.difficulty}</span></p>
        <p className='result-text'>score: <span id='user-input'>____</span></p>
        <button className='new-game-button'>new game</button>
      </div>
    )

  }

}

export const mapStateToProps = (state) => ({
  difficulty: state.difficulty,
  username: state.userName
});

export default connect(mapStateToProps)(Result);
