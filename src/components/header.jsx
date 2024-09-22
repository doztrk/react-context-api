import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useStore } from "../store";
import { userLogout } from "../store/auth/actions";

export const Header = () => {
	const { stateUser, dispatchUser } = useStore();
	const { user, isAuthenticated } = stateUser;

	const handleLogout = () => {
		dispatchUser(userLogout());
	};

	return (
		<Navbar expand="lg" className="bg-warning">
			<Container>
				<Navbar.Brand href="#home">Auth App</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mx-auto">
						<Nav.Link to="/" as={Link}>
							Home
						</Nav.Link>
						{isAuthenticated ? (
							<Nav.Link onClick={handleLogout} as={Button}>
								Logout
							</Nav.Link>
						) : (
							<Nav.Link to="/login" as={Link}>
								Login
							</Nav.Link>
						)}
					</Nav>
				</Navbar.Collapse>
				<div className="fw-bold">
					{isAuthenticated ? (
						<>
							Hi {user.firstName} {user.lastName}
						</>
					) : (
						<>Welcome</>
					)}
				</div>
				
			</Container>
		</Navbar>
	);
};
