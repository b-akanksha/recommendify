import initialState from "../initialState";
import { actionTypes } from "../actions/index.js";

const {
  REQUEST_USER_DATA,
  REQUEST_USER_DATA_SUCCESSFUL,
  REQUEST_USER_DATA_FAILED,
} = actionTypes;

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUEST_USER_DATA:
      return { ...state, loading: true };
    case REQUEST_USER_DATA_SUCCESSFUL:
      return { ...state, loading: false, error: {}, userDetails: payload };
    case REQUEST_USER_DATA_FAILED:
      return { ...state, loading: false, error: { message: payload } };
    default:
      return { ...state };
  }
};
