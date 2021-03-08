import { RECEIVE_TICKETS } from "../actions/tickets"

function normalizeTickets(tickets) {
  return tickets.reduce(function (ticket, item) {
    ticket[item.allFields.id] = item.allFields
    return ticket
  }, {})
}
export default function tickets(state = {} as any, action) {
  switch (action.type) {
    case RECEIVE_TICKETS:
      return {
        ...state,
        ...normalizeTickets(action.tickets),
      }
    default:
      return state
  }
}
