import { mapStateToProps } from "../components/Dashboard"
import Config from "../config"

describe("Dashboard", () => {
  test("should render the Dashboard componnt", () => {})
  it("should convert the hashmap of tickets to array of tickets", () => {
    Config.recordsPerPage = 10
    const initialState = {
      tickets: { test1: { key: "value" } },
      pagination: { recordsParsed: 0 },
    }

    const props = mapStateToProps(initialState)
    expect(props.tickets.length).toEqual(1)
    expect(props.tickets).toEqual([{ key: "value" }])
  })
  it("should returns a empty array if there are no tickets", () => {
    Config.recordsPerPage = 10
    const initialState = {
      tickets: null,
      pagination: { recordsParsed: 0 },
    }

    const props = mapStateToProps(initialState)
    expect(props.tickets.length).toEqual(0)
    expect(props.tickets).toEqual([])
  })
})
