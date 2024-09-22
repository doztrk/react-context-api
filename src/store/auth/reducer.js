import { userState } from "./initial-state";

export const userReducer = (state = userState, action) => {
	if (action.type === "USER_LOGIN") {
		return { ...state, user: action.payload, isAuthenticated: true };
	} else if (action.type === "USER_LOGOUT") {
		return { ...state, user: null, isAuthenticated: false };
	}

	return state;
};
