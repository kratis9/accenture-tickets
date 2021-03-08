import * as actions from "../store/actions/pagination"
import reducer from "../store/reducers/pagination"

fdescribe("Pagination Reducers", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({})
  })
  it("should handle SET_PAGE", () => {
    const action = {
      type: actions.SET_PAGE,
      page: 2,
    }
    expect(reducer({}, action)).toEqual({ recordsParsed: 2 })
  })
  it("should handle SET_PAGELIMIT", () => {
    const action = {
      type: actions.SET_PAGELIMIT,
      pageLimit: 50,
    }
    expect(reducer({ data: 10 }, action)).toEqual({ data: 10, pageLimit: 50 })
  })
  it("should handle SET_TOTAL_COUNT", () => {
    const action = {
      type: actions.SET_TOTAL_COUNT,
      totalCount: 3000,
    }
    expect(reducer({ data: "state" }, action)).toEqual({
      data: "state",
      totalRecords: 3000,
    })
  })
})
