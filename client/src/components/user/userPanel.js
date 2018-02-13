// my school

// rights library

// account info

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../../actions';

class UserPanel extends Component {
  render() {
    return (
      <div>
        {/*User School Panel*/}
        <div className="jumbotron">
          <h1>My School</h1>
          <p className="lead">View info about your school.</p>
          <hr className="my-4" />
          <p>Create, view, and +1 violations at your school.</p>
          <p className="lead">
            <a
              className="btn btn-primary btn-lg"
              href="/userpanel/userschool"
              role="button"
            >
              My School
            </a>
          </p>
        </div>
        {/* Rights Library */}
        <div className="jumbotron">
          <h1>Rights Library</h1>
          <p className="lead">KYER Rights Library</p>
          <hr className="my-4" />
          <p>Get to know your rights.</p>
          <p className="lead">
            <a
              className="btn btn-danger btn-lg"
              href="/userpanel/userrights"
              role="button"
            >
              Rights Library
            </a>
          </p>
        </div>
        {/* User Profile */}
        <div className="jumbotron">
          <h1>My Profile</h1>
          <p className="lead">User Profile</p>
          <hr className="my-4" />
          <p>View and edit your info.</p>
          <p className="lead">
            <a
              className="btn btn-success btn-lg"
              href="/userpanel/userprofile"
              role="button"
            >
              My Profile
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default UserPanel;
