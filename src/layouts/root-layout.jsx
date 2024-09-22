import React from "react";
import { Header } from "../components/header";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
	return (
		<>
			<Header />
			<Container className="my-4">
				<Outlet />
			</Container>
		</>
	);
};
