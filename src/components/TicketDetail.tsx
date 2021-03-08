import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  root: { minWidth: "400px", padding: "2rem 1rem" },
  containerRow: {
    display: "flex",
    width: "100%",
    lineHeight: "2",
    marginBottom: ".8rem",
  },
  rowName: {
    marginRight: "1rem",
    minWidth: "110px",
    fontSize: ".8rem",
    color: "#555",
  },
  rowValue: {
    borderBottom: "1px solid #e2e2e2",
    flex: 1,
    fontSize: "14px",
    color: "#f2d2d",
  },
})

function TicketInfoRow({ text, value }) {
  const classes = useStyles()
  return (
    <div className={classes.containerRow}>
      <span className={classes.rowName}> {text}</span>
      <div className={classes.rowValue}>{value}</div>
    </div>
  )
}

const getFieldsMapping = (ticket) => ({
  "Assigned to": ticket.assignee,
  "Short description": ticket.description,
  Application: ticket.application,
  made_sla: ticket.made_sla,
  upon_reject: ticket.upon_reject,
  opened_by: ticket.opened_by,
  Priority: ticket.priority,
  activity_due: ticket.activity_due,
  Approval: ticket.approval,
})

const TicketDetail = ({ ticket }) => {
  const classes = useStyles()
  const mappedKeys = getFieldsMapping(ticket)
  return (
    <div className={classes.root}>
      {Object.keys(mappedKeys).map((key) => (
        <TicketInfoRow key={key} text={key} value={mappedKeys[key]} />
      ))}
    </div>
  )
}

export default TicketDetail
