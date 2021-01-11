import { combineReducers } from "redux";
import nominationState from "../reducers/nominations";

const rootReducer = combineReducers({
  nominationState,
});

export default rootReducer;
