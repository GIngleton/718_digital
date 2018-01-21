import React, { Component } from 'react';

class AdminRight extends Component {
  render() {
    return (
      <div>
        <div className="card-header">Right #</div>
        <div className="card-body">
          <h5 className="card-title">Right Name</h5>
          <p className="card-text">Right Details</p>
          <button className="btn btn-primary">Edit</button>
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    );
  }
}

export default AdminRight;
