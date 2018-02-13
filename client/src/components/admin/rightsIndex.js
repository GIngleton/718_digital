import React, { Component } from 'react';
import { connect } from 'react-redux';
import { rightsIndex } from '../../actions';
import _ from 'lodash';
import axios from 'axios';

const ROOT_URL = 'http://localhost:3090';

class RightsIndex extends Component {
  constructor(props) {
    super(props);

    this.state = { rights: [] };
  }

  componentDidMount() {
    axios.get(`${ROOT_URL}/rights`).then(res => {
      console.log(res.data);
      const rights = res.data; //.map(obj => obj.data);
      this.setState({ rights });
    });
  }

  renderRights() {
    //console.log(this.props);
    // console.log(this.state);
    // console.log(this.state.users[0]);

    //id, title, category, details

    return _.map(this.state.rights, right => {
      return (
        <li className="list-group-item" key={right._id}>
          <div>Title:{right.title}</div>
          <div>ID:{right._id}</div>
          <div>Category: {right.category}</div>
          <div>Details: {right.details}</div>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <h3>List of all rights</h3>
        <ul className="list-group">{this.renderRights()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { rightsIndex: state.rightsIndex };
}

export default connect(mapStateToProps, { rightsIndex })(RightsIndex);
