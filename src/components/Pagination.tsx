import Config from "../config"
import { connect } from "react-redux"

// UI
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  root: { fontSize: ".8rem", display: "flex", justifyContent: "center" },
  pagination: {
    listStyleType: "none",
    margin: 0,
    display: "flex",
    padding: "1rem",
  },
  status: {
    display: "flex",
    alignItems: "center",
  },
  statusText: {
    fontSize: ".8rem",
  },
  button: {
    fontSize: ".8rem",
  },
})

const Pagination = ({ totalRecords, recordsParsed, onSetPage }) => {
  const classes = useStyles()
  const totalPages = Math.ceil(totalRecords / Config.recordsPerPage)
  const currentPage = Math.ceil(recordsParsed / Config.recordsPerPage)

  return (
    <div className={classes.root}>
      <ul className={classes.pagination}>
        <li className="page-item">
          <Button
            data-testid="BACK"
            className={classes.button}
            onClick={() => {
              onSetPage(
                recordsParsed > 1 ? recordsParsed - Config.recordsPerPage : 1
              )
            }}
            disabled={currentPage === 1}
          >
            BACK
          </Button>
        </li>

        <li className={classes.status}>
          <Typography
            data-testid="status"
            className={classes.statusText}
            color="textSecondary"
          >
            Page {currentPage} of {totalPages}
          </Typography>
        </li>
        <li className="page-item">
          <Button
            data-testid="NEXT"
            className={classes.button}
            onClick={() => onSetPage(recordsParsed + Config.recordsPerPage)}
            disabled={currentPage === totalPages}
          >
            NEXT
          </Button>
        </li>
      </ul>
    </div>
  )
}

const mapStateToProps = ({ pagination }) => {
  return {
    totalRecords: pagination.totalRecords,
    recordsParsed: pagination.recordsParsed || 1,
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSetPage: (page, payload) => dispatch({ type: "SET_PAGE", page, payload }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)
