import React, { Component } from 'react';

class AdminSchool extends Component {
  render() {
    return (
      <div>
        <div className="card-header" />
        <div className="card-body">
          <h5 className="card-title">School Name</h5>
          <p className="card-text">School Details</p>
          <button className="btn btn-primary">Edit</button>
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    );
  }
}

export default AdminSchool;
