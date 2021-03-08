import * as actions from "../store/actions/pagination";

describe("actions", () => {
  it("should create an action to set a page", () => {
    const expectedAction = {
      type: actions.SET_PAGE,
      page: 1,
    };
    expect(actions.setPage(1)).toEqual(expectedAction);
  });
  it("should create an action to set a page limit", () => {
    const expectedAction = {
      type: actions.SET_PAGELIMIT,
      pageLimit: 50,
    };
    expect(actions.setPageLimit(50)).toEqual(expectedAction);
  });
});
