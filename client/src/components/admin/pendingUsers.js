import React, { Component } from 'react';
import PendingUser from './pendingUser';

const ROOT_URL = 'http://localhost:3090';

class PendingUsers extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
    this.loadPendingUsers.bind(this);
  }

  loadPengingUsers() {
    axios
      .get(`${ROOT_URL}/pendingusers`)
      .then(response => this.setState((users: response)));
  }

  componentDidMount() {
    this.loadPendingUsers();
  }

  render() {
    return (
      <ul className="list-group">
        <li>
          <PendingUser />
        </li>
      </ul>
    );
  }
}

export default PendingUsers;
