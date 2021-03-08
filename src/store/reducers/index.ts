import { combineReducers } from "redux"

import authToken from "./authToken"
import loading from "./loader"
import pagination from "./pagination"
import sidebar from "./sidebar"
import tickets from "./tickets"

export default combineReducers({
  authToken,
  loading,
  pagination,
  sidebar,
  tickets,
})
