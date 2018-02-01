import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class AddRight extends Component {
  handleFormSubmit(formProps) {
    this.props.addRight(formProps);
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
    const { handleSubmit, fields: { title, category, details } } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Title:</label>
          <input className="form-control" {...title} />
          {title.touched &&
            title.error && <div className="error">{title.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Category:</label>
          <input className="form-control" {...category} />
          {category.touched &&
            category.error && <div className="error">{category.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Details:</label>
          <input className="form-control" {...details} />
          {details.touched &&
            details.error && <div className="error">{details.error}</div>}
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">
          Add Right
        </button>
      </form>
    );
  }
}

function validate(formProps) {
  const errors = {};

  if (!formProps.title) {
    errors.title = 'Please enter a title';
  }

  if (!formProps.category) {
    errors.category = 'Please enter a category';
  }

  if (!formProps.details) {
    errors.details = 'Please enter details';
  }

  return errors;
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm(
  {
    form: 'addright',
    fields: ['title', 'category', 'details'],
    validate
  },
  mapStateToProps,
  actions
)(AddRight);
