import _ from 'lodash';

import { PENDING_USERS } from '../actions';

// export default function(state = [], action) {
//   // switch (action.type) {
//   //   case PENDING_USERS:
//   //     //console.log(action.payload);
//   //return _.mapKeys(action.payload, '_id');
//   // default:
//   //   return state;
//   //console.log(state);
//   //console.log(action.payload);
//   return [action.payload, ...state]; //
//   //return _.mapKeys(action.payload /*state*/, 'email');
//   // default:
//   //return state;
// }
// //}

export default function(state = [], action) {
  switch (action.type) {
    case PENDING_USERS:
      // return state.concat([ action.payload.data ]);
      // better method of writing the above line
      return [action.payload.data, ...state];
  }
  return state;
}
