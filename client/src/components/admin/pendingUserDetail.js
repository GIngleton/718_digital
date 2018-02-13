import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import PendingUserList from './pendingUserList';
import { connect } from 'react-redux';

// import '../style/jobdetail.css';

class PendingUserDetail extends Component {
  renderUser(pendingUserData) {
    const email = pendingUserData.map(user => user.email);
    const id = pendingUserData.map(user => user._id);

    function stripHTML(text) {
      return text.replace(/<.*?>/gm, '');
    }
    return (
      <ul key={email}>
        <p>
          Email <br />
          {email}
        </p>
        <p>
          ID <br />
          {id}
        </p>
      </ul>
    );
  }

  render() {
    return <div>{this.props.user.map(this.renderUser)}</div>;
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps)(PendingUserDetail);
