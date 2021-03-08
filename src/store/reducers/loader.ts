import { lOADING_BEGIN, lOADING_END } from "../actions/loader"

export default function loading(state = false, action) {
  switch (action.type) {
    case lOADING_BEGIN:
      return true
    case lOADING_END:
      return false
    default:
      return state
  }
}
