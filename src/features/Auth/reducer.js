import { USER_LOGIN } from "./constants";
let initialState = { user: null, token: null };
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return { user: action.user, token: action.token };
    case USER_LOGOUT:
      return { user: null, token: null };
    default:
      break;
  }
}
