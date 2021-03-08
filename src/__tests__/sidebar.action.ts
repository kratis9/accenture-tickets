import * as actions from "../store/actions/sidebard"

describe("sidebar actions", () => {
  it("should create an action to handle sidebar open command", () => {
    const expectedAction = {
      type: actions.SIDEBAR_OPEN,
    }
    expect(actions.handleSidebarOpen(1)).toEqual(expectedAction)
  })
  it("should create an action to handle sidebar close command", () => {
    const expectedAction = {
      type: actions.SIDEBAR_CLOSE,
    }
    expect(actions.handleSidebarClose(50)).toEqual(expectedAction)
  })
})
