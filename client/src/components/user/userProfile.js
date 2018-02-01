import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class UserProfile extends Component {
  render() {
    return (
      <div className="card" /*style="width: 18rem;"*/>
        <div className="card-body">
          <h5 className="card-title">User Name: </h5>
          <h6 className="card-subtitle mb-2 text-muted">User School:</h6>
          <p className="card-text">User Email: </p>
          <a href="#" className="card-link">
            Edit Profile
          </a>
        </div>
      </div>
    );
  }
}

export default UserProfile;
