export const ADD_NOMINEE = "ADD_NOMINEE";

export const storeMovieList = (payload) => {
  return {
    type: ADD_NOMINEE,
    payload,
  };
};
