import { FETCH_PENDING_USERS } from '../components/utils/api';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_PENDING_USERS:
      // return state.concat([ action.payload.data ]);
      // better method of writing the above line
      return [action.payload.data, ...state];
  }
  return state;
}
