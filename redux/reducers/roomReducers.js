import {
  ALL_ROOMS_SUCCESS,
  ALL_ROOMS_FAIL,
  CLEAR_ERRORS,
} from "../constants/roomConstants";

export const allRoomsReducer = (state = { rooms: [] }, action) => {
  console.log("run allRoomsReducer", action.type);
  switch (action.type) {
    case ALL_ROOMS_SUCCESS:
      return {
        roomsCount: action.payload.roomsCount,
        resultPerPage: action.payload.resultPerPage,
        filteredRoomsCount: action.payload.filteredRoomsCount,
        rooms: action.payload.rooms,
      };
    case ALL_ROOMS_FAIL:
      return {
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
