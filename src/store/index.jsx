import { createContext, useContext, useReducer } from "react";
import { messageReducer } from "./message/reducer";
import { messageState } from "./message/initial-state";
import { userReducer } from "./auth/reducer";
import { userState } from "./auth/initial-state";

// Bos bir merkezi state olusturuldu
const StoreContext = createContext();

export const useStore = () => useContext(StoreContext);

export const StoreProvider = ({ children }) => {
	const [stateMessage, dispatchMessage] = useReducer(
		messageReducer,
		messageState
	);

	const [stateUser, dispatchUser] = useReducer(userReducer, userState);

	

	return (
		<StoreContext.Provider
			value={{ stateMessage, dispatchMessage, stateUser, dispatchUser }}
		>
			{children}
		</StoreContext.Provider>
	);
};
