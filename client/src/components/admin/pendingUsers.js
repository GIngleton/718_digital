import React, { Component } from 'react';
import PendingUser from './pendingUser';

class PendingUsers extends Component {
  render() {
    return (
      <ul className="list-group">
        <PendingUser />
      </ul>
    );
  }
}

export default PendingUsers;
