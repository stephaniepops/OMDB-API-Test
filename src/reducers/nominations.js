import { ADD_NOMINEE, REMOVE_NOMINEE } from "../actions/nomination";

const initialState = {
  topFiveMovies: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOMINEE:
      return {
        ...state,
        topFiveMovies: [...state.topFiveMovies, action.payload],
      };
    case REMOVE_NOMINEE:
      const topFiveMovies = [...state.topFiveMovies];
      const filteredMovies = topFiveMovies.filter(
        (movie) => movie.imdbID !== action.payload
      );
      debugger;
      return {
        ...state,
        topFiveMovies: filteredMovies,
      };
    default:
      return state;
  }
};

export const nominationsSelector = (state) =>
  state.nominationState.topFiveMovies;
export default reducer;
