export const login = async (credentials) => {
	const res = await fetch('https://dummyjson.com/auth/login', {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(credentials),
	});

	const data = await res.json();

	if (!res.ok) throw new Error(data.message);

	return data;
};

export const getAuthUser = async () => {
	const token = localStorage.getItem("token");

	const res = await fetch("https://dummyjson.com/auth/me", {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	const data = await res.json();

	if (!res.ok) throw new Error(data.message);

	return data;
};
