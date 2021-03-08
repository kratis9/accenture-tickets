import Config from "../config"
import { loadingEnd } from "../store/actions/loader"
import { setTotalCount } from "../store/actions/pagination"
import { receiveTickets } from "../store/actions/tickets"
import { fetchToken, resetToken } from "./auth-provider"

const API_URL = `https://dh-atrpackageinstalltest.atrmywizard-aiops.com`

type ServerResponse = {
  data?: Record<string, any>
  totalCount?: number
}

// Public APIs
// Http client utitlilty function to hancle server calls and handle error.
async function client(endpoint: string, customConfig = {}): Promise<{}> {
  const config = {
    method: "GET",
    ...customConfig,
  }

  const response = await window.fetch(`${API_URL}/${endpoint}`, config)

  const ticketReponse: ServerResponse = extractTotalCount(response) || {}

  const data = await response.json()
  ticketReponse.data = data

  if (response.ok) {
    console.log(data)
    return ticketReponse
  } else {
    if (data.error === "unauthorized") {
      resetToken()
    }
    return Promise.reject(data)
  }
}

function fetchDashboardData(pageNumber: number) {
  return async (dispatch) => {
    const tickets: any = await getTickets(pageNumber, Config.recordsPerAPICall)

    if (tickets) {
      dispatch(loadingEnd())
      dispatch(receiveTickets(tickets.data))
      dispatch(setTotalCount(tickets.totalCount))
    }
  }
}

// Private methods

function extractTotalCount(response: Response) {
  for (var pair of response.headers.entries() as any) {
    // accessing the entries,
    if (pair[0] === "x-total-count") {
      // key I'm looking for in this instance
      return { totalCount: pair[1] }
    }
  }
}

async function getTickets(page: number = 0, ticketsPerPage: number = 10) {
  const TICKET_URL = `atr-gateway/ticket-management/api/v1/tickets?ticketType=incident&sortDirection=DESC&page=${page}&perPage=${ticketsPerPage}`

  const token = await fetchToken()

  if (!token) {
    throw new Error("No token provided")
  }

  const headers = {
    headers: {
      apiToken: token,
    },
  }
  return client(TICKET_URL, headers).then(
    (responseData) => responseData,
    (errorData) => {
      if (errorData.error === "unauthorized") {
        fetchToken()
      }
    }
  )
}

export { client, fetchDashboardData }
