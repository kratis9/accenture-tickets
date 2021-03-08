import { RECEIVE_TOKEN } from "../actions/authToken"

export default function authToken(state= null, action) {
  switch (action.type) {
    case RECEIVE_TOKEN:
      return action.token

    default:
      return state
  }
}
