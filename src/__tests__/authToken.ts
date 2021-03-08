import * as actions from "../store/actions/authToken"
import reducer from "../store/reducers/authToken"

describe("AuthToken Actions", () => {
  it("should create an action when token recived", () => {
    const expectedAction = {
      type: actions.RECEIVE_TOKEN,
      token: "test12345",
    }
    expect(actions.setAuthedToken("test12345")).toEqual(expectedAction)
  })
})

describe("AuthToken Reducers", () => {
  it("should return the initial state", () => {
    expect(reducer(null, {})).toEqual(null)
  })
  it("should handle RECEIVE_TOKEN", () => {
    const action = {
      type: actions.RECEIVE_TOKEN,
      token: "test1234",
    }
    expect(reducer(null, action)).toEqual("test1234")
  })
})
