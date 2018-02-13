import React, { Component } from 'react';
import AdminSchool from './adminSchool';

class AdminSchools extends Component {
  render() {
    return (
      <div>
        <div className="card-header">
          <h4>List of all schools</h4>
          <a
            className="btn btn-success float-right"
            href="/adminpanel/adminschools/addschool"
            role="button"
          >
            Add School
          </a>
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
