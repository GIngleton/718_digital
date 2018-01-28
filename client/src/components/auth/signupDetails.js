import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class SignupDetails extends Component {
  handleFormSubmit(formProps) {
    // Call action creator to sign up the user
    this.props.signupDetails(formProps);
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
    const {
      handleSubmit,
      fields: { firstName, lastName, is_Student, verification }
    } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>First Name:</label>
          <input className="form-control" {...firstName} />
          {firstName.touched &&
            firstName.error && <div className="error">{firstName.error}</div>}
        </fieldset>

        <fieldset className="form-group">
          <label>Last Name:</label>
          <input className="form-control" {...lastName} />
          {lastName.touched &&
            lastName.error && <div className="error">{lastName.error}</div>}
        </fieldset>

        <fieldset className="form-group">
          <label>Are you a student or parent:</label>
          <input className="form-control" {...is_Student} />
          {is_Student.touched &&
            is_Student.error && <div className="error">{is_Student.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Verification Code:</label>
          <input className="form-control" {...verification} />
          {verification.touched &&
            verification.error && (
              <div className="error">{verification.error}</div>
            )}
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">
          Submit!
        </button>
      </form>
    );
  }
}

function validate(formProps) {
  const errors = {};

  if (!formProps.firstName) {
    errors.firstName = 'Please enter your first name';
  }

  if (!formProps.lastName) {
    errors.lastName = 'Please enter your last name';
  }

  if (!formProps.is_Student) {
    errors.is_Student = 'Please select Student or Parent';
  }

  if (!formProps.verification) {
    errors.verification = 'Please enter verification code';
  }

  return errors;
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm(
  {
    form: 'signupdetails',
    fields: ['firstName', 'lastName', 'is_Student', 'verification'],
    validate
  },
  mapStateToProps,
  actions
)(SignupDetails);
