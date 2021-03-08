import { connect } from "react-redux"
import { SIDEBAR_OPEN } from "../store/actions/sidebard"

import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import TextTruncate from "react-text-truncate"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 18,
    fontWeight: 300,
    color: "#1c1c1c",
  },
  titleSec: {
    fontSize: 10,
  },
  text: { fontSize: 10 },
  cta: { fontSize: 10 },
  pos: {
    marginBottom: 10,
  },
})

const TicketCard = ({ ticket, dispatch }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={`${classes.titleSec}  ${classes.pos}`}
          color="textSecondary"
        >
          {ticket.state}
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {ticket.number}
        </Typography>

        <Typography className={classes.titleSec} color="textSecondary">
          Application: {ticket.type}
        </Typography>
        <Typography
          className={`${classes.pos} ${classes.titleSec}`}
          color="textSecondary"
        >
          Assigne: {ticket.assignee}
        </Typography>
        <Typography variant="body2" className={classes.text} component="p">
          <TextTruncate
            line={2}
            element="span"
            truncateText="…"
            text={ticket.description}
          />
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          className={classes.cta}
          onClick={() => {
            dispatch({ type: SIDEBAR_OPEN, id: ticket.id })
          }}
          size="small"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

export default connect()(TicketCard)
