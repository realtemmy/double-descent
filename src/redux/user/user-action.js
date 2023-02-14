import { createAction } from "../reducer";
import { USER_CONSTANTS } from "./user-constants";

export const signUpStart = () => createAction(USER_CONSTANTS.SIGN_UP_START);

export const signUpSuccess = (user) => createAction(USER_CONSTANTS.SIGN_UP_SUCCESS, user);

export const signUpFailed = (error) => createAction(USER_CONSTANTS.SIGN_UP_FAILED, error);