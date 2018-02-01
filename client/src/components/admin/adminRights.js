import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../../actions';
import AdminRight from './adminRight';

class AdminRights extends Component {
  render() {
    return (
      <div>
        <div className="card-header">
          <h4>Rights List</h4>
          <a
            className="btn btn-success float-right"
            href="/adminpanel/adminrights/addright"
            role="button"
          >
            Add Right
          </a>
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
