import { combineReducers } from "redux";
import searchResultState from "../reducers/searchResults";
import nominationState from "../reducers/nominations";

const rootReducer = combineReducers({
  nominationState,
  searchResultState,
});

export default rootReducer;
