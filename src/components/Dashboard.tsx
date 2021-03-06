import Config from "../config"
import { connect } from "react-redux"

// UI
import Tickets from "./Tickets"
import Sidebar from "./Sidebar"
import Pagination from "./Pagination"

function Dashboard({ tickets }) {
  return (
    <div>
      <Tickets tickets={tickets} />
      <Pagination />
      <Sidebar />
    </div>
  )
}

/**
 * This method performs data-transformation on tickets before passing it to the Dashboard component
 * @param tickets : hashmap of tikects
 * @returns Array of tickets
 */
export function mapStateToProps({ tickets, pagination }) {
  let mappedTickets = []
  let pageNumber = pagination.recordsParsed || 1

  if (tickets) {
    let ticketIds = Object.keys(tickets).slice(
      pageNumber - 1,
      Config.recordsPerPage + pageNumber
    )

    if (tickets && ticketIds.length > 0) {
      mappedTickets = ticketIds.map((id) => tickets[id])
    }
  }
  return { tickets: mappedTickets }
}
export default connect(mapStateToProps)(Dashboard)
