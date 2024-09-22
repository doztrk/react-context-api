import { messageState } from "./initial-state";
import { CLEAR_MESSAGE, SET_MESSAGE } from "./types";

export const messageReducer = (state = messageState, action) => {
	if (action.type === SET_MESSAGE) {
		return { ...state, message: action.payload };
	} else if (action.type === CLEAR_MESSAGE) {
		return { ...state, message: "" };
	}

	// Bu satir hicbir if bloguna girilmedigi durumlra icin konulur
	// Eger konulmazsa program akisi herhangi bir if bloguna girmediginde
	// reducer dan undefined donecegi icin state de undefined olur
	return state;
};
