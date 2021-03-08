import { SIDEBAR_CLOSE, SIDEBAR_OPEN } from "../actions/sidebard"

export default function sidebar(state = null, action) {
  switch (action.type) {
    case SIDEBAR_OPEN:
      return { ...state, sidebarRequested: action.id }
    case SIDEBAR_CLOSE:
      return { ...state, sidebarRequested: null }
    default:
      return state
  }
}
