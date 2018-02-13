import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pendingUsers } from '../../actions';
import _ from 'lodash';
import axios from 'axios';

const ROOT_URL = 'http://localhost:3090';

class PendingUsersIndex extends Component {
  constructor(props) {
    super(props);

    this.state = { users: [] };
  }

  componentDidMount() {
    axios.get(`${ROOT_URL}/pendingusers`).then(res => {
      console.log(res.data);
      const users = res.data; //.map(obj => obj.data);
      this.setState({ users });
    });
  }

  renderUsers() {
    //console.log(this.props);
    // console.log(this.state);
    // console.log(this.state.users[0]);

    return _.map(this.state.users, user => {
      return (
        <li className="list-group-item" key={user._id}>
          <div>Email:{user.email}</div>
          <div>ID:{user._id}</div>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Pending Users</h3>
        <ul className="list-group">{this.renderUsers()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { pendingUsers: state.pendingUsers };
}

export default connect(mapStateToProps, { pendingUsers })(PendingUsersIndex);
