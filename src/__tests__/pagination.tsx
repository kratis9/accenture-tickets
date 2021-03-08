import { render, fireEvent } from "@testing-library/react"
import { Provider } from "react-redux"
import reducer from "../store/reducers"
import { createStore } from "redux"
import Pagination from "../components/Pagination"

const mockCallBack = jest.fn()
const initialState = {
  pagination: {
    totalRecords: 0,
    recordsParsed: 0,
    onSetPage: mockCallBack,
  },
}

const store = createStore(reducer, initialState)
const Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>

describe("Pagination Component", () => {
  test("call setPage on prev button click", async () => {
    const { getByTestId } = render(<Pagination />, {
      wrapper: Wrapper,
    })
    const button = getByTestId("BACK")

    console.log(button.innerHTML)
    fireEvent.click(button)

    // expect(mockCallBack.mock.calls.length).toEqual(1)
  })
})


