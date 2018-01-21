import React, { Component } from 'react';
import MajorViolation from './majorViolation';

class MajorViolations extends Component {
  render() {
    return (
      <ul className="list-group">
        <MajorViolation />
      </ul>
    );
  }
}

export default MajorViolations;
