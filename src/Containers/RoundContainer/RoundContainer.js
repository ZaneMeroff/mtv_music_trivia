import React, { Component } from 'react';
import Round from '../Round/Round';
import { connect } from 'react-redux';
import './RoundContainer.css';

class RoundContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    let round = this.props.triviaData.map(card => {
      return <Round question={card.question} />
    })

    return (
      <div>
        {round}
      </div>

    )

  }

}

export const mapStateToProps = (state) => ({
  triviaData: state.triviaData,
});

export default connect(mapStateToProps)(RoundContainer);
