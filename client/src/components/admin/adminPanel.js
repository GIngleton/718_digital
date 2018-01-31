import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../../actions';

class AdminPanel extends Component {
  render() {
    return (
      <div>
        {/*Pending Violations Panel*/}
        <div className="jumbotron">
          <h1>Pending Violations</h1>
          <p className="lead">New School Violations Show here first.</p>
          <hr className="my-4" />
          <p>Take action and Approve or Deny new violations</p>
          <p className="lead">
            <a
              className="btn btn-primary btn-lg"
              href="/adminpanel/pendingviolations"
              role="button"
            >
              Pending Violations
            </a>
          </p>
        </div>
        {/* Major Violations Panel */}
        <div className="jumbotron">
          <h1>Major Violations</h1>
          <p className="lead">Major Violations that require urgent attention</p>
          <hr className="my-4" />
          <p>Take action for Major Violations</p>
          <p className="lead">
            <a
              className="btn btn-danger btn-lg"
              href="/adminpanel/majorviolations"
              role="button"
            >
              Major Violations
            </a>
          </p>
        </div>
        {/* Pending Users */}
        <div className="jumbotron">
          <h1>Pending Users</h1>
          <p className="lead">New Users Show here first.</p>
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
        {/* Bill of Rights */}
        <div className="jumbotron">
          <h1>Bill of Rights</h1>
          <p className="lead">Educational Bill of Rights information inside.</p>
          <hr className="my-4" />
          <p>Add new rights and update or delete existing rights</p>
          <p className="lead">
            <a
              className="btn btn-warning btn-lg"
              href="/adminpanel/adminrights"
              role="button"
            >
              Bill of Rights
            </a>
          </p>
        </div>
        {/* Schools */}
        <div className="jumbotron">
          <h1>Schools</h1>
          <p className="lead">Edit school information inside.</p>
          <hr className="my-4" />
          <p>Add new schools and update or delete existing schools</p>
          <p className="lead">
            <a
              className="btn btn-info btn-lg"
              href="/adminpanel/adminschools"
              role="button"
            >
              Schools
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default AdminPanel;
