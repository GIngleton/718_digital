import React, { Component } from 'react';

class UserSchool extends Component {
  render() {
    return (
      <div>
        <div className="card-header" />
        <div className="card-body">
          <h5 className="card-title">School Name</h5>
          <p className="card-text">Shool Address</p>
          <p className="card-text">School Details</p>
          <h4 className="card-text">School Violations</h4>
          <a className="card-text" href="#">
            Violation 1
          </a>
          <a className="card-text" href="#">
            Violation 2
          </a>
          <button className="btn btn-danger pull-right">
            Report Violation
          </button>
        </div>
      </div>
    );
  }
}

export default UserSchool;
