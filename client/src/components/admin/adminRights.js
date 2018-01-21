import React, { Component } from 'react';
import AdminRight from './adminRight';

class AdminRights extends Component {
  render() {
    return (
      <div>
        <div className="card-header">
          Rights List
          <button className="btn btn-success">Add Right</button>
        </div>
        <div className="card-body">
          <ul className="list-group">
            <AdminRight />
          </ul>
        </div>
      </div>
    );
  }
}

export default AdminRights;
