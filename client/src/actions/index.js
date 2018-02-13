import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE,
  PENDING_USERS,
  SCHOOL_INDEX,
  PENDING_VIOLATIONS
} from './types';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
  return function(dispatch) {
    // Submit email/password to the server
    axios
      .post(`${ROOT_URL}/signin`, { email, password })
      // If request is good...
      .then(response => {
        // - Update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });
        // - Save the JWT token
        localStorage.setItem('token', response.data.token);
        // - Redirect to the route '/feature'
        browserHistory.push('/feature');
      })
      // If request is bad...
      .catch(() => {
        // - Show an error to the user
        dispatch(authError('Bad Login Info'));
      });
  };
}

export function signupUser({ email, password }) {
  return function(dispatch) {
    // Submit email/password to the server
    axios
      .post(`${ROOT_URL}/signup`, { email, password })
      // If request is good...
      .then(response => {
        // - Update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });
        // - Save the JWT token
        localStorage.setItem('token', response.data.token);
        // - Redirect to the route '/feature'
        browserHistory.push('/feature');
      })
      // If request is bad, show an error to user
      .catch(error => dispatch(authError(error.response.data.error)));
  };
}

//export function confirmEmail

export function signupDetails({
  firstName,
  lastName,
  is_Student,
  verification
}) {
  return function(dispatch) {
    // Submit firstName/lastName/is_Student/verification/school_id to the server
    axios
      .post(`${ROOT_URL}/signupDetails`, {
        firstName,
        lastName,
        is_Student,
        verification
      })
      // If request is good...
      .then(response => {
        dispatch;
      });
  };
}

export function addRight({ title, category, details }) {
  return function(dispatch) {
    // Submit firstName/lastName/is_Student/verification/school_id to the server
    axios
      .post(`${ROOT_URL}/addRight`, {
        title,
        category,
        details
      })
      // If request is good...
      .then(response => {
        console.log(response);
        browserHistory.push('/adminpanel/adminrights');
      })
      // if request is bad, show an error to user
      .catch(error => dispatch(authError(error.response.data.error)));
  };
}

export function addSchool({ name, street, city, state, zip, gradeLevel }) {
  return function(dispatch) {
    // Submit firstName/lastName/is_Student/verification/school_id to the server
    axios
      .post(`${ROOT_URL}/addSchool`, {
        name,
        street,
        city,
        state,
        zip,
        gradeLevel
      })
      // If request is good...
      .then(response => {
        console.log(response);
        browserHistory.push('/adminpanel/adminschools');
      })
      // If request is bad, show an error to user
      .catch(error => dispatch(authError(error.response.data.error)));
  };
}
// this.history.pushState(null, ...)

export function newViolation({ info, associatedRight }) {
  return function(dispatch) {
    // Submit info/associatedRight to the server
    axios
      .post(`${ROOT_URL}/newViolation`, {
        info,
        associatedRight
      })
      // If request is good...
      .then(response => {
        browserHistory.push('/userpanel/userschool');
      })
      // If request is bad, show an error to user
      .catch(error => dispatch(authError(error.response.data.error)));
  };
}

export function newAdmin({ email, password, is_Admin }) {
  return function(dispatch) {
    // Submit email/password to the server
    axios
      .post(`${ROOT_URL}/signup`, { email, password, is_Admin })
      // If request is good...
      .then(response => {
        // - Update state to indicate user is authenticated
        colsole.log(response);
        // - Save the JWT token
        // localStorage.setItem('token', response.data.token);
        // - Redirect to the route '/feature'
        browserHistory.push('/adminPanel');
      })
      // If request is bad, show an error to user
      .catch(error => dispatch(authError(error.response.data.error)));
  };
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function signoutUser() {
  localStorage.removeItem('token');

  return { type: UNAUTH_USER };
}

export function fetchMessage() {
  return function(dispatch) {
    axios
      .get(ROOT_URL, {
        headers: { authorization: localStorage.getItem('token') }
      })
      .then(response => {
        console.log(response);
        dispatch({
          type: FETCH_MESSAGE,
          payload: response.data.message
        });
      });
  };
}

// export function pendingUsers() {
//   return function(dispatch, response) {
//     axios
//       .get(`${ROOT_URL}/pendingusers`)
//       .then(data => this.setState({ users: data }));
//     {
//       console.log(response.data);
//       dispatch({
//         type: PENDING_USERS,
//         payload: response.data
//       });
//     }
//   };
// }

export function pendingUsers() {
  return function(dispatch) {
    axios.get(`${ROOT_URL}/pendingusers`).then(response => {
      console.log(response.data);
      dispatch({
        type: PENDING_USERS,
        payload: response.data
      });
    });
  };
}

export function schoolIndex() {
  return function(dispatch) {
    axios.get(`${ROOT_URL}/schools`).then(response => {
      console.log(response.data);
      dispatch({
        type: SCHOOL_INDEX,
        payload: response.data
      });
    });
  };
}

export function pendingViolations() {
  return function(dispatch) {
    axios.get(`${ROOT_URL}/pendingviolations`).then(response => {
      console.log(response.data);
      dispatch({
        type: SCHOOL_INDEX,
        payload: response.data
      });
    });
  };
}

export function rightsIndex() {
  return function(dispatch) {
    axios.get(`${ROOT_URL}/rights`).then(response => {
      console.log(response.data);
      dispatch({
        type: RIGHTS_INDEX,
        payload: response.data
      });
    });
  };
}

// export function pendingUsers() {
//   const request = axios.get(`${ROOT_URL}/pendingusers`);
//
//   return {
//     type: PENDING_USERS,
//     payload: request
//   };
// }
