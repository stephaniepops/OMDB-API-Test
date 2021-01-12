import { ADD_SEARCH_RESULTS } from "../actions/searchResult";

const initialState = {
  searchResultData: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SEARCH_RESULTS:
      return {
        ...state,
        searchResultData: action.payload,
      };
    default:
      return state;
  }
};

export const searchResultSelector = (state) =>
  state.searchResultState.searchResultData;

export default reducer;
