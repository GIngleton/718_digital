import React, { Component } from 'react';
import AdminSchool from './adminSchool';

class AdminSchools extends Component {
  render() {
    return (
      <div>
        <div className="card-header">
          List of all schools
          <button className="btn btn-success">Add School</button>
        </div>
        <div className="card-body">
          <ul className="list-group">
            <AdminSchool />
          </ul>
        </div>
      </div>
    );
  }
}

export default AdminSchools;
