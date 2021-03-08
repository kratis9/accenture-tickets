import Config from "../config"
import { fetchDashboardData } from "../utils/api-client"

// Store
import { useEffect } from "react"
import { connect } from "react-redux"
import { setPage } from "../store/actions/pagination"
import { loadingBegin } from "../store/actions/loader"

// UI
import CircularProgress from "@material-ui/core/CircularProgress"
import Dashboard from "./Dashboard"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    height: "100vh",
  },
})

function App({ dispatch, loading, recordsParsed, ticketCount }) {
  const pageNumber = ticketCount ? ticketCount / Config.recordsPerAPICall : 0

  const classess = useStyles()

  useEffect(() => {
    if (!recordsParsed) dispatch(setPage(Config.recordsPerPage))
    if (
      !recordsParsed ||
      recordsParsed === ticketCount - 2 * Config.recordsPerPage
    ) {
      dispatch(loadingBegin())
      dispatch(fetchDashboardData(pageNumber))
    }
  }, [recordsParsed])

  return (
    <div>
      {loading ? (
        <div className={classess.root}>
          <CircularProgress />
        </div>
      ) : (
        <Dashboard />
      )}
    </div>
  )
}
function mapStateToProps({ loading, pagination, tickets }) {
  return {
    loading,
    recordsParsed: pagination.recordsParsed,
    ticketCount: Object.keys(tickets).length,
  }
}

export default connect(mapStateToProps)(App)
