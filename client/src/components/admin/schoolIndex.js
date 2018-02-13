import React, { Component } from 'react';
import { connect } from 'react-redux';
import { schoolIndex } from '../../actions';
import _ from 'lodash';
import axios from 'axios';

const ROOT_URL = 'http://localhost:3090';

class SchoolIndex extends Component {
  constructor(props) {
    super(props);

    this.state = { schools: [] };
  }

  componentDidMount() {
    axios.get(`${ROOT_URL}/schools`).then(res => {
      console.log(res.data);
      const schools = res.data; //.map(obj => obj.data);
      this.setState({ schools });
    });
  }

  renderSchools() {
    //console.log(this.props);
    // console.log(this.state);
    // console.log(this.state.users[0]);

    return _.map(this.state.schools, school => {
      return (
        <li className="list-group-item" key={school._id}>
          <div>Name:{school.name}</div>
          <div>ID:{school._id}</div>
          <div>Street: {school.street}</div>
          <div>City: {school.city}</div>
          <div>State: {school.state}</div>
          <div>Zip: {school.zip}</div>
          <div>Grade Level: {school.gradeLevel}</div>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <h3>List of all schools</h3>
        <ul className="list-group">{this.renderSchools()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { schoolIndex: state.schoolIndex };
}

export default connect(mapStateToProps, { schoolIndex })(SchoolIndex);
