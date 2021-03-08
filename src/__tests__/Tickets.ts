import * as actions from "../store/actions/tickets"
import reducer from "../store/reducers/tickets"

describe("Tickets Actions", () => {
  it("should create an action when tickets data recived", () => {
    const expectedAction = {
      type: actions.RECEIVE_TICKETS,
      tickets: [
        {
          allFields: {
            key: "vaue",
            id: "test1234",
          },
        },
      ],
    }
    expect(
      actions.receiveTickets([
        {
          allFields: {
            key: "vaue",
            id: "test1234",
          },
        },
      ])
    ).toEqual(expectedAction)
  })
})

describe("Tickets Reducers", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({})
  })
  it("should handle RECEIVE_TICKETS", () => {
    const action = {
      type: actions.RECEIVE_TICKETS,
      tickets: [
        {
          allFields: {
            key: "vaue",
            id: "test1234",
          },
        },
      ],
    }
    expect(reducer({}, action)).toEqual({
      test1234: {
        key: "vaue",
        id: "test1234",
      },
    })
  })
})
