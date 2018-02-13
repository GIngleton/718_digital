import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {
  Router,
  Route,
  IndexRoute,
  browserHistory,
  BrowserRouter,
  Header,
  Switch
} from 'react-router';
import reduxThunk from 'redux-thunk';
import promise from 'redux-promise';

import App from './components/app';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import SignupDetails from './components/auth/signupDetails';
import Feature from './components/feature';
import UserPanel from './components/user/userPanel';
import UserProfile from './components/user/userProfile';
import UserSchool from './components/user/userSchool';
import UserRights from './components/user/userRights';
import AdminProfile from './components/admin/adminProfile';
import AdminPanel from './components/admin/adminPanel';
import AdminRights from './components/admin/adminRights';
import AddRight from './components/admin/addRight';
import AdminSchools from './components/admin/adminSchools';
import AddSchool from './components/admin/addSchool';
import MajorViolations from './components/admin/majorViolations';
import PendingViolations from './components/admin/pendingViolations';
import NewViolation from './components/violation/newViolation';
import PendingUsers from './components/admin/pendingUsers';
import NewAdmin from './components/admin/newAdmin';
import RequireAuth from './components/auth/require_auth';
import Welcome from './components/welcome';
import PendingUsersIndex from './components/admin/pendingUser_index';
import SchoolIndex from './components/admin/schoolIndex';
import PendingViolationsIndex from './components/admin/pendingViolationsIndex';
import RightsIndex from './components/admin/rightsIndex';

import reducers from './reducers';
import { AUTH_USER } from './actions/types';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');
// If we have a token, consider the user to be signed in
if (token) {
  // we need to update application state
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Welcome} />
        <Route path="signin" component={Signin} />
        <Route path="signout" component={Signout} />
        <Route path="signup" component={Signup} />
        <Route path="signupdetails" component={SignupDetails} />
        <Route path="adminpanel" component={AdminPanel} />
        <Route path="adminpanel/adminrights" component={AdminRights} />
        <Route path="adminpanel/adminrights/addright" component={AddRight} />
        <Route path="adminpanel/adminschools" component={AdminSchools} />
        <Route path="adminPanel/adminSchools/addschool" component={AddSchool} />
        <Route path="adminpanel/majorviolations" component={MajorViolations} />
        <Route
          path="adminpanel/pendingviolations"
          component={PendingViolations}
        />
        <Route path="adminPanel/pendingusers" component={PendingUsers} />
        <Route path="adminPanel/newAdmin" component={NewAdmin} />
        <Route path="userPanel" component={UserPanel} />
        <Route path="userpanel/userProfile" component={UserProfile} />
        <Route path="userpanel/userschool" component={UserSchool} />
        <Route path="userpanel/userrights" component={UserRights} />
        <Route path="newViolation" component={NewViolation} />
        <Route path="adminProfile" component={AdminProfile} />
        <Route path="feature" component={RequireAuth(Feature)} />
        <Route path="pendingusersindex" component={PendingUsersIndex} />
        <Route path="schoolindex" component={SchoolIndex} />
        <Route
          path="pendingviolationsindex"
          component={PendingViolationsIndex}
        />
        <Route path="rightsindex" component={RightsIndex} />
      </Route>
    </Router>
  </Provider>,
  document.querySelector('.container')
);
