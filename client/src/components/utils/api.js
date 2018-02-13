import axios from 'axios';

const ROOT_URL = 'http://localhost:3090';
export const FETCH_PENDING_USERS = 'FETCH_PENDING_USERS';

export function fetchPendingUsers(user) {
  const url = `${ROOT_URL}/pendingusers`;
  const request = axios.get(url);

  return {
    type: FETCH_PENDING_USERS,
    payload: request
  };
}
