import { render, fireEvent, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import reducer from "../store/reducers"
import { createStore } from "redux"
import Pagination from "../components/Pagination"

const mockCallBack = jest.fn()
const initialState = {
  pagination: {
    totalRecords: 100,
    recordsParsed: 0,
    onSetPage: mockCallBack,
  },
}

describe("Pagination Component", () => {
  let Wrapper

  describe("Given the User is on the first page", () => {
    beforeEach(() => {
      const store = createStore(reducer, initialState)
      Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>
    })

    test("When clicks BACK button THEN status shoul not change", async () => {
      const { getByTestId } = render(<Pagination />, {
        wrapper: Wrapper,
      })
      const button = getByTestId("BACK")

      expect(screen.getByTestId("status")).toHaveTextContent("Page 1 of 2")

      fireEvent.click(button)
      expect(button).toHaveAttribute("disabled")

      expect(screen.getByTestId("status")).toHaveTextContent("Page 1 of 2")
    })
    test("When clicks NEXT button THEN status should change", async () => {
      const { getByTestId } = render(<Pagination />, {
        wrapper: Wrapper,
      })
      const button = getByTestId("NEXT")

      expect(screen.getByTestId("status")).toHaveTextContent("Page 1 of 2")

      fireEvent.click(button)

      expect(screen.getByTestId("status")).toHaveTextContent("Page 2 of 2")
    })
  })

  describe("Given the User is on the last page", () => {
    beforeEach(() => {
      initialState.pagination.recordsParsed = 100
      const store = createStore(reducer, initialState)
      Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>
    })
    test("When clicks BACK button THEN status shoul change", async () => {
      const { getByTestId } = render(<Pagination />, {
        wrapper: Wrapper,
      })
      const button = getByTestId("BACK")

      expect(screen.getByTestId("status")).toHaveTextContent("Page 2 of 2")

      fireEvent.click(button)

      expect(screen.getByTestId("status")).toHaveTextContent("Page 1 of 2")
    })
    test("When clicks NEXT button THEN status should not change", async () => {
      const { getByTestId } = render(<Pagination />, {
        wrapper: Wrapper,
      })
      const button = getByTestId("NEXT")

      expect(screen.getByTestId("status")).toHaveTextContent("Page 2 of 2")

      fireEvent.click(button)
      expect(button).toHaveAttribute("disabled")

      expect(screen.getByTestId("status")).toHaveTextContent("Page 2 of 2")
    })
  })
})
