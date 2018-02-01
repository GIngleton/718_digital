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
          <p className="lead">View Info On Your School</p>
          <hr className="my-4" />
          <p>Create, View, and +1 Violations at your school</p>
          <p className="lead">
            <a
              className="btn btn-primary btn-lg"
              // href="/adminpanel/pendingviolations"
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
          <p>Get to know your rights</p>
          <p className="lead">
            <a
              className="btn btn-danger btn-lg"
              // href="/adminpanel/majorviolations"
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
          <p>Take action and Approve or Deny new users</p>
          <p className="lead">
            <a
              className="btn btn-success btn-lg"
              href="/adminpanel/pendingusers"
              role="button"
            >
              Pending Users
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default UserPanel;
