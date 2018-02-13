import React, { Component } from 'react';
import api from '../utils/api';
import { connect } from 'react-redux';
import { table } from 'react-bootstrap';
import { Link } from 'react-router';
import { pendingUsers } from '../../actions';

class PendingUserList extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = { user: '' };
  //
  //   this.pendingUsers = this.pendingUsers.bind(this);
  // }

  renderUser(pendingUserData) {
    const email = pendingUserData.map(user => user.email);

    const id = userData.map(user => user._id);

    // <Link className='detail' to='/jobdetail'>
    return (
      <tr key={email}>
        <td>
          <Link className="detail" to="#">
            {email}
          </Link>
        </td>
        <td>{id}</td>
      </tr>
    );
  }

  componentDidMount() {
    this.props.pendingUsers();
    //console.log(this.props);
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Email</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>{this.props.user.map(this.renderUser)}</tbody>
      </table>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps)(PendingUserList);
