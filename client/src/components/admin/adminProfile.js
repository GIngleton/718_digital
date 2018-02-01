import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class AdminProfile extends Component {
  render() {
    return (
      <div className="card" /*style="width: 18rem;"*/>
        <div className="card-body">
          <h5 className="card-title">Admin Name: </h5>
          {/* <h6 className="card-subtitle mb-2 text-muted">User School:</h6> */}
          <p className="card-text">Admin Email: </p>
          <a href="#" className="card-link">
            Edit Profile
          </a>
        </div>
      </div>
    );
  }
}

export default AdminProfile;
