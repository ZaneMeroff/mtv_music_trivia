import React, { Component } from 'react';
import Round from '../Round/Round';
import { connect } from 'react-redux';
import './RoundContainer.css';

let questions;
let i = 0

class RoundContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    }
  }

  changeCard = () => {
    i++

  }

  render() {

    questions = [];

    this.props.triviaData.forEach(data => {
      questions.push(data)
    })

    const triviaData = <Round trivia={questions[i]} changeCard={this.changeCard} />

    return (
      <div>
        {triviaData}
      </div>
    )

  }

}

export const mapStateToProps = (state) => ({
  triviaData: state.triviaData,
});

export default connect(mapStateToProps)(RoundContainer);
