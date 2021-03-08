export const SIDEBAR_OPEN = "SIDEBAR_OPEN"
export const SIDEBAR_CLOSE = "SIDEBAR_CLOSE"

export function handleSidebarOpen() {
  return {
    type: SIDEBAR_OPEN,
  }
}
export function handleSidebarClose() {
  return {
    type: SIDEBAR_CLOSE,
  }
}
