export const ADD_SEARCH_RESULTS = "ADD_SEARCH_RESULTS";

export const storeSearchResults = (payload) => {
  return {
    type: ADD_SEARCH_RESULTS,
    payload,
  };
};
