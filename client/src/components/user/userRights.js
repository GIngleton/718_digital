import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../../actions';
import UserRight from './userRight';

class UserRights extends Component {
  render() {
    return (
      <div>
        <div className="card-header">
          <h4>Rights List</h4>
        </div>
        <div className="card-body">
          <ul className="list-group">
            <li>
              <UserRight />
            </li>
            <li>
              <UserRight />
            </li>
            <li>
              <UserRight />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default UserRights;
