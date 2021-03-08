import * as actions from "../store/actions/loader"
import reducer from "../store/reducers/loader"

describe("Loader Actions", () => {
  it("should create an action when loading begin", () => {
    const expectedAction = {
      type: actions.lOADING_BEGIN,
    }
    expect(actions.loadingBegin()).toEqual(expectedAction)
  })
  it("should create an action when loading end", () => {
    const expectedAction = {
      type: actions.lOADING_END,
    }
    expect(actions.loadingEnd()).toEqual(expectedAction)
  })
})

describe("Loader Reducers", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(false)
  })
  it("should handle lOADING_BEGIN", () => {
    const action = {
      type: actions.lOADING_BEGIN,
    }
    expect(reducer(false, action)).toEqual(true)
  })
  it("should handle lOADING_END", () => {
    const action = {
      type: actions.lOADING_END,
    }
    expect(reducer(true, action)).toEqual(false)
  })
})
