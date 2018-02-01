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

import App from './components/app';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import SignupDetails from './components/auth/signupDetails';
import Feature from './components/feature';
import UserPanel from './components/user/userPanel';
import UserProfile from './components/user/userProfile';
import AdminProfile from './components/admin/adminProfile';
import AdminPanel from './components/admin/adminPanel';
import AdminRights from './components/admin/adminRights';
import AdminSchools from './components/admin/adminSchools';
import AddRight from './components/admin/addRight';
import MajorViolations from './components/admin/majorViolations';
import PendingViolations from './components/admin/pendingViolations';
import PendingUsers from './components/admin/pendingUsers';
import NewAdmin from './components/admin/newAdmin';
import RequireAuth from './components/auth/require_auth';
import Welcome from './components/welcome';
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
        <Route path="adminpanel/majorviolations" component={MajorViolations} />
        <Route
          path="adminpanel/pendingviolations"
          component={PendingViolations}
        />
        <Route path="adminPanel/pendingusers" component={PendingUsers} />
        <Route path="adminPanel/newAdmin" component={NewAdmin} />
        <Route path="userPanel" component={UserPanel} />
        <Route path="userProfile" component={UserProfile} />
        <Route path="adminProfile" component={AdminProfile} />
        <Route path="feature" component={RequireAuth(Feature)} />
      </Route>
    </Router>
  </Provider>,
  document.querySelector('.container')
);

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <BrowserRouter>
//       <div>
//         <Header />
//         <Switch>
//           <Route path="/signin" component={Signin} />
//           <Route path="/signout" component={Signout} />
//           <Route path="/signup" component={Signup} />
//           <Route path="/feature" component={RequireAuth(Feature)} />
//           <Route exact path="/" render={() => <div>Welcome to landing page</div>} />
//         </Switch>
//       </div>
//     </BrowserRouter>
//   </Provider>
//   , document.querySelector('.container'));
