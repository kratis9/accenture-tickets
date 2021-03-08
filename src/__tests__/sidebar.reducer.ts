import * as actions from "../store/actions/sidebard"
import reducer from "../store/reducers/sidebar"

fdescribe("Sidebar Reducers", () => {
  it("should return the initial state", () => {
    expect(reducer(null, {})).toEqual(null)
  })
  it("should handle SIDEBAR_OPEN", () => {
    const action = {
      type: actions.SIDEBAR_OPEN,
      id: "test1234567",
    }
    expect(reducer(null, action)).toEqual({ sidebarRequested: "test1234567" })
  })
  it("should handle SIDEBAR_CLOSE", () => {
    const action = {
      type: actions.SIDEBAR_CLOSE,
    }
    expect(reducer({ data: 10 }, action)).toEqual({
      data: 10,
      sidebarRequested: null,
    })
  })
})
