import { SET_PAGE, SET_PAGELIMIT, SET_TOTAL_COUNT } from "../actions/pagination"

export default function pagination(state = {}, action) {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        ...{ recordsParsed: action.page },
      }
      case SET_PAGELIMIT:
        return {
          ...state,
          ...{ pageLimit: action.pageLimit },
        }
        
        case SET_TOTAL_COUNT:
        return {
          ...state,
          ...{totalRecords: action.totalCount}
        }
    default:
      return state
  }
}
