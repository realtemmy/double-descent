import { USER_CONSTANTS } from "./user-constants";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_CONSTANTS.SIGN_IN_SUCCESS:
      return { ...state, currentUser: payload };
    case USER_CONSTANTS.SIGN_IN_FAILED:
      return { ...state, error: payload };
    default:
      return state;
  }
};
