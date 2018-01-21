import React, { Component } from 'react';
import Violation from './pendingViolation';

class PendingViolations extends Component {
  render() {
    return (
      <ul className="list-group">
        <Violation />
      </ul>
    );
  }
}

export default PendingViolations;
