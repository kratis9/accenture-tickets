export const RECEIVE_TICKETS = "RECEIVE_TICKETS"


export function receiveTickets(tickets) {
  return {
    type: RECEIVE_TICKETS,
    tickets,
  }
}