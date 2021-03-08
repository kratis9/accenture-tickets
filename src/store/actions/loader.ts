export const lOADING_BEGIN = "lOADING_BEGIN"
export const lOADING_END = "lOADING_END"

export function loadingBegin() {
  return {
    type: lOADING_BEGIN,
  }
}
export function loadingEnd() {
  return {
    type: lOADING_END,
  }
}
