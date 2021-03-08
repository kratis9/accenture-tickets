import { client } from "./api-client"
import { deleteStorage, safeStorageGet, safeStorageSet } from "./storage-client"
import Config from "../config"
const TOKEN_URL = `/atr-gateway/identity-management/api/v1/auth/short-token?useDeflate=true`
const TOKEN_KEY = "apiToken"

const token = safeStorageGet(TOKEN_KEY)
/**
 * The function is used to fetch the token for accessing dashboard data. WebStorage is used to minimize the number of token requests.
 * I have use session storage based on the assumption that tokens are short live.
 * @returns token:string
 */
async function fetchToken(): Promise<string> {
  let token = safeStorageGet(TOKEN_KEY)
  if (token) {
    return token
  } else {
    const user = {
      username: Config.username,
      password: Config.password,
      snowEnabled: true,
    }
    const headers: HeadersInit = {
      method: "POST",
      accept: "*/*",
      "Content-Type": "application/json",
    }

    return client(TOKEN_URL, {
      method: "POST",
      body: JSON.stringify(user),
      headers,
    }).then((response) => {
      const value = (response as any).data.token

      safeStorageSet(TOKEN_KEY, value)
      return (response as any).data.token as string
    })
  }
}

/**
 * This code aims to remove the token from storage and fetch a new incase of any error.
 */
function resetToken() {
  deleteStorage(TOKEN_KEY)
  fetchToken()
}

export { fetchToken, resetToken, token }
