import React, { Component } from 'react';
import Round from '../Round/Round';
import { connect } from 'react-redux';
import './RoundContainer.css';



class RoundContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <Round
        
      />
    )

  }

}

export const mapStateToProps = (state) => ({
  triviaData: state.triviaData,
});

export default connect(mapStateToProps)(RoundContainer);
