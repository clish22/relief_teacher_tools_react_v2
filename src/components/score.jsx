import React, { Component } from 'react';

export class DisplayScore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: this.props.score,
    };
  }

  setScore() {}
  render() {
    const { score } = this.state;

    return (
      <>
        <span>{score}</span>
      </>
    );
  }
}

export default DisplayScore;
