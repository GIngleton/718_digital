import React, { Component } from 'react';
import AdminRight from './adminRight';

class AdminRights extends Component {
  render() {
    return (
      <div>
        <div className="card-header">
          <h4>Rights List</h4>
          <button className="btn btn-success float-right">Add Right</button>
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
