import React, { Component } from 'react';

class PendingUser extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">School Name</div>
        <div className="card-body">
          <h5 className="card-title">User Name{this.props.lastName}</h5>
          <p className="card-text">
            pendingUser Details{this.props.is_Student}
          </p>
          <div className="btn-group" role="group" aria-label="button group">
            <button className="btn btn-success" type="submit">
              Approve
            </button>
            <button className="btn btn-danger" type="submit">
              Deny
            </button>
            <button className="btn btn-warning" type="submit">
              Request More Info
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PendingUser;
