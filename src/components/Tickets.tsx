import React from "react"
import { Grid } from "@material-ui/core"
import TicketCard from "./TicketCard"

const Tickets = ({ tickets }) => {
  return (
    <div>
      <Grid container spacing={2}>
        {tickets.map((ticket) => {
          return (
            <Grid key={ticket.id} item xs={12} sm={6} md={4} lg={3} xl={3}>
              <TicketCard ticket={ticket} />
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default Tickets
