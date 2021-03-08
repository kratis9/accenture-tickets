import React from "react"
import ReactDOM from "react-dom"

// Store deps
import { Provider } from "react-redux"
import { createStore, compose } from "redux"
import reducers from "./store/reducers"
import middleware from "./store/middleware"

import App from "./components/App"

const store = createStore(
  reducers,
  compose(
    middleware,
    (window as any).devToolsExtension
      ? (window as any).devToolsExtension()
      : (f) => f
  )
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
