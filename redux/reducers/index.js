import { combineReducers } from "redux";
import { allRoomsReducer } from "./roomReducers";

const rootReducer = combineReducers({
  allRooms: allRoomsReducer,
});

export default rootReducer;
