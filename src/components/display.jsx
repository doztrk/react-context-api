import { useStore } from "../store";

export const Display = () => {
	const { stateMessage } = useStore();

	return (
		<div>
			<h3>{stateMessage.message}</h3>
		</div>
	);
};
