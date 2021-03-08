export const SET_PAGE = "SET_PAGE"
export const SET_PAGELIMIT = "SET_PAGELIMIT"
export const SET_TOTAL_COUNT = "SET_TOTAL_COUNT"
export function setTotalCount(totalCount) {
  return {
    type: SET_TOTAL_COUNT,
    totalCount,
  }
}

export function setPage(page: number) {
  return {
    type: SET_PAGE,
    page,
  }
}
export function setPageLimit(pageLimit: number) {
  return {
    type: SET_PAGELIMIT,
    pageLimit,
  }
}