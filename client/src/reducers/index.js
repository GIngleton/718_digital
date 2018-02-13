import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import adminReducer from './admin_reducer';

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  admin: adminReducer
});

export default rootReducer;
