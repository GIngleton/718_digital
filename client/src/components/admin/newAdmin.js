// import React, { Component } from 'react';
// import { reduxForm } from 'redux-form';
// import * as actions from '../../actions';
//
// class NewAdmin extends Component {
//   handleFormSubmit(formProps) {
//     // Call action creator to sign up the user
//     this.props.newAdmin(formProps);
//   }
//
//   renderAlert() {
//     if (this.props.errorMessage) {
//       return (
//         <div className="alert alert-danger">
//           <strong>Oops!</strong> {this.props.errorMessage}
//         </div>
//       );
//     }
//   }
//
//   render() {
//     const {
//       handleSubmit,
//       fields: { email, password, passwordConfirm, is_Admin }
//     } = this.props;
//
//     return (
//       <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
//         <fieldset className="form-group">
//           <label>Email:</label>
//           <input className="form-control" {...email} />
//           {email.touched &&
//             email.error && <div className="error">{email.error}</div>}
//         </fieldset>
//         <fieldset className="form-group">
//           <label>Password:</label>
//           <input className="form-control" type="password" {...password} />
//           {password.touched &&
//             password.error && <div className="error">{password.error}</div>}
//         </fieldset>
//         <fieldset className="form-group">
//           <label>Confirm Password:</label>
//           <input
//             className="form-control"
//             type="password"
//             {...passwordConfirm}
//           />
//           {passwordConfirm.touched &&
//             passwordConfirm.error && (
//               <div className="error">{passwordConfirm.error}</div>
//             )}
//         </fieldset>
// <fieldset className="form-group">
//   {/* <input className="form-control" {...is_Student} />
//   {is_Student.touched &&
//     is_Student.error && <div className="error">{is_Student.error}</div>} */}
//   <div>
//     <label>Grant this user admin priveleges? </label>
//     <div>
//       <label>
//         <input
//           className="form-control"
//           name="is_Admin"
//           component="input"
//           type="radio"
//           value="True"
//         />{' '}
//         Yes
//       </label>
//       <label>
//         <input
//           className="form-control"
//           name="is_Student"
//           component="input"
//           type="radio"
//           value="False"
//         />{' '}
//         No
//       </label>
//     </div>
//   </div>
// </fieldset>
//         {this.renderAlert()}
//         <button action="submit" className="btn btn-primary">
//           Send Invitation Email!
//         </button>
//       </form>
//     );
//   }
// }
//
// function validate(formProps) {
//   const errors = {};
//
//   if (!formProps.email) {
//     errors.email = 'Please enter an email';
//   }
//
//   if (!formProps.password) {
//     errors.password = 'Please enter a password';
//   }
//
//   if (!formProps.passwordConfirm) {
//     errors.passwordConfirm = 'Please confirm password';
//   }
//
//   if (formProps.password !== formProps.passwordConfirm) {
//     errors.password = 'Passwords must match';
//   }
//
//   if (!formProps.is_Admin) {
//     errors.is_Admin =
//       'Please select whether or not you wish to grant user Admin role';
//   }
//
//   return errors;
// }
//
// function mapStateToProps(state) {
//   return { errorMessage: state.auth.error };
// }
//
// export default reduxForm(
//   {
//     form: 'signup',
//     fields: ['email', 'password', 'passwordConfirm', 'is_Admin'],
//     validate
//   },
//   mapStateToProps,
//   actions
// )(NewAdmin);
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class NewAdmin extends Component {
  handleFormSubmit(formProps) {
    // Call action creator to sign up the user
    this.props.signupUser(formProps);
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
      fields: { email, password, passwordConfirm, is_Admin }
    } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email:</label>
          <input className="form-control" {...email} />
          {email.touched &&
            email.error && <div className="error">{email.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <input className="form-control" type="password" {...password} />
          {password.touched &&
            password.error && <div className="error">{password.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Confirm Password:</label>
          <input
            className="form-control"
            type="password"
            {...passwordConfirm}
          />
          {passwordConfirm.touched &&
            passwordConfirm.error && (
              <div className="error">{passwordConfirm.error}</div>
            )}
        </fieldset>
        <fieldset className="form-group">
          <div>
            <label>Grant this user admin priveleges? </label>
            <div>
              <label>
                <input
                  className="form-control"
                  name="is_Admin"
                  component="input"
                  type="radio"
                  value={true}
                />{' '}
                Yes
              </label>
              <label>
                <input
                  className="form-control"
                  name="is_Student"
                  component="input"
                  type="radio"
                  value={false}
                />{' '}
                No
              </label>
            </div>
          </div>
        </fieldset>

        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">
          Create Admin
        </button>
      </form>
    );
  }
}

function validate(formProps) {
  const errors = {};

  if (!formProps.email) {
    errors.email = 'Please enter an email';
  }

  if (!formProps.password) {
    errors.password = 'Please enter a password';
  }

  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Please confirm password';
  }

  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match';
  }

  return errors;
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm(
  {
    form: 'newAdmin',
    fields: ['email', 'password', 'passwordConfirm', 'is_Admin'],
    validate
  },
  mapStateToProps,
  actions
)(NewAdmin);
