import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pendingViolations } from '../../actions';
import _ from 'lodash';
import axios from 'axios';

const ROOT_URL = 'http://localhost:3090';

class PendingViolationsIndex extends Component {
  constructor(props) {
    super(props);

    this.state = { violations: [] };
  }

  componentDidMount() {
    axios.get(`${ROOT_URL}/pendingviolations`).then(res => {
      console.log(res.data);
      const violations = res.data; //.map(obj => obj.data);
      this.setState({ violations });
    });
  }

  renderViolations() {
    //console.log(this.props);
    // console.log(this.state);
    // console.log(this.state.users[0]);

    return _.map(this.state.violations, violation => {
      return (
        <li className="list-group-item" key={violation._id}>
          <div>ID:{violation._id}</div>
          <div>Info:{violation.info}</div>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <h3>List of all pending violations</h3>
        <ul className="list-group">{this.renderViolations()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { pendingViolations: state.pendingViolations };
}

export default connect(mapStateToProps, { pendingViolations })(
  PendingViolationsIndex
);
