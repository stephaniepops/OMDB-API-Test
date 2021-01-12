import { ADD_NOMINEE } from "../actions/nomination";

const initialState = {
  topFiveMovies: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOMINEE:
      return {
        ...state,
        movieData: action.payload,
      };
    default:
      return state;
  }
};

export const nominationsSelector = (state) => state.nominationState.movieData;
export default reducer;
