import { connect } from "react-redux"

// UI
import Drawer from "@material-ui/core/Drawer"
import TicketDetail from "./TicketDetail"
import { SIDEBAR_CLOSE } from "../store/actions/sidebard"

const Sidebar = ({ dispatch, isOpen, ticket }) => {
  return (
    <Drawer
      anchor="right"
      open={!!isOpen}
      onClose={() => dispatch({ type: SIDEBAR_CLOSE })}
    >
      {ticket ? <TicketDetail ticket={ticket} /> : null}
    </Drawer>
  )
}

const mapStateToProps = (state) => {
  const { sidebar, tickets } = state
  return {
    isOpen: sidebar ? sidebar.sidebarRequested : false,
    ticket: tickets && sidebar ? tickets[sidebar.sidebarRequested] : null,
  }
}
export default connect(mapStateToProps)(Sidebar)
