import React from "react";
import { useStore } from "../store";
import { clearMessage, setMessage } from "../store/message/actions";

export const Form = () => {
	const { stateMessage, dispatchMessage } = useStore();

	return (
		<div>
			<input
				type="text"
				value={stateMessage.message}
				onChange={(e) => dispatchMessage(setMessage(e.target.value))}
			/>
			<button onClick={() => dispatchMessage(clearMessage())}>
				Clear
			</button>
		</div>
	);
};
