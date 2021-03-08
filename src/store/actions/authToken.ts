export const RECEIVE_TOKEN = "RECEIVE_TOCKEN"
export const EXPIRED_TOKEN = "EXPIRED_TOKEN"
export const FETCH_TOKEN = "FETCH_TOKEN"

export function setAuthedToken(token: string) {
  return {
    type: RECEIVE_TOKEN,
    token,
  }
}
