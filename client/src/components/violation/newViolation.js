import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class NewViolation extends Component {
  handleFormSubmit(formProps) {
    this.props.newViolation(formProps);
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit, fields: { info, associatedRight } } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Info:</label>
          <input className="form-control" {...info} />
          {info.touched &&
            info.error && <div className="error">{info.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Associated Right:</label>
          <input className="form-control" {...associatedRight} />
          {associatedRight.touched &&
            associatedRight.error && (
              <div className="error">{associatedRight.error}</div>
            )}
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">
          Report Violation
        </button>
      </form>
    );
  }
}

function validate(formProps) {
  const errors = {};

  if (!formProps.info) {
    errors.info = 'Please enter details about this violation';
  }

  if (!formProps.associatedRight) {
    errors.associatedRight =
      'Please enter the associated right for this violation';
  }

  return errors;
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm(
  {
    form: 'newviolation',
    fields: ['info', 'associatedRight'],
    validate
  },
  mapStateToProps,
  actions
)(NewViolation);
