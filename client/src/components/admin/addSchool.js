import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class AddSchool extends Component {
  handleFormSubmit(formProps) {
    //call action creator to add school
    this.props.addSchool(formProps);
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
      fields: { name, street, city, state, zip, gradeLevel }
    } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Name:</label>
          <input className="form-control" {...name} />
          {name.touched &&
            name.error && <div className="error">{name.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Street:</label>
          <input className="form-control" {...street} />
          {street.touched &&
            street.error && <div className="error">{street.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>City:</label>
          <input className="form-control" {...city} />
          {city.touched &&
            city.error && <div className="error">{city.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>State:</label>
          <input className="form-control" {...state} />
          {state.touched &&
            state.error && <div className="error">{state.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Zip:</label>
          <input className="form-control" {...zip} />
          {zip.touched && zip.error && <div className="error">{zip.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Grade Level:</label>
          <input className="form-control" {...gradeLevel} />
          {gradeLevel.touched &&
            gradeLevel.error && <div className="error">{gradeLevel.error}</div>}
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">
          Add School
        </button>
      </form>
    );
  }
}

//name, street, zip, city, state, gradelevel

function validate(formProps) {
  const errors = {};

  if (!formProps.name) {
    errors.name = 'Please enter a name';
  }

  if (!formProps.street) {
    errors.street = 'Please enter street';
  }

  if (!formProps.city) {
    errors.city = 'Please enter city';
  }

  if (!formProps.state) {
    errors.state = 'Please enter state';
  }

  if (!formProps.zip) {
    errors.zip = 'Please enter zip';
  }

  if (!formProps.gradeLevel) {
    errors.gradeLevel = 'Please enter grade level';
  }

  return errors;
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm(
  {
    form: 'addschool',
    fields: ['name', 'street', 'city', 'state', 'zip', 'gradeLevel'],
    validate
  },
  mapStateToProps,
  actions
)(AddSchool);
