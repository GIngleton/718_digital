import React, { Component } from 'react';

class Violation extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">School Name</div>
        <div class="card-body">
          <h5 className="card-title">Associated Right</h5>
          <p className="card-text">Violation Details</p>
          <div className="btn-group" role="group" aria-label="button group">
            <button className="btn btn-success" type="submit">
              Approve
            </button>
            <button className="btn btn-danger" type="submit">
              Reject
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

export default Violation;
