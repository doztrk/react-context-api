import { useFormik } from "formik";
import React, { useState } from "react";
import { Alert, Button, Card, Form, Spinner } from "react-bootstrap";
import * as Yup from "yup";
import { getAuthUser, login } from "../api/auth";
import { useStore } from "../store";
import { userLogin } from "../store/auth/actions";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
	const { dispatchUser } = useStore();
	const navigate = useNavigate();

	const [error, setError] = useState(null);

	const initialValues = {
		username: "",
		password: "",
	};

	const validationSchema = Yup.object({
		username: Yup.string().required("Required"),
		password: Yup.string().required("Required"),
	});

	const onSubmit = async (values) => {
		setError(null);
		try {
			const { token,...user } = await login(values);
			localStorage.setItem("token", token);


			dispatchUser(userLogin(user));
			navigate("/");
		} catch (err) {
			setError(err);
		}
	};

	const formik = useFormik({ initialValues, validationSchema, onSubmit });

	return (
		<Card>
			<Card.Body>
				{error && <Alert variant="danger">{error?.message}</Alert>}

				<Form noValidate onSubmit={formik.handleSubmit}>
					<Form.Group className="mb-3" controlId="username">
						<Form.Label>Username</Form.Label>
						<Form.Control
							type="text"
							{...formik.getFieldProps("username")}
							isInvalid={
								formik.touched.username &&
								formik.errors.username
							}
						/>
						<Form.Control.Feedback type="invalid">
							{formik.errors.username}
						</Form.Control.Feedback>
					</Form.Group>

					<Form.Group className="mb-3" controlId="password">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							{...formik.getFieldProps("password")}
							isInvalid={
								formik.touched.password &&
								formik.errors.password
							}
						/>
						<Form.Control.Feedback type="invalid">
							{formik.errors.password}
						</Form.Control.Feedback>
					</Form.Group>

					<Button
						variant="warning"
						type="submit"
						disabled={
							formik.isSubmitting ||
							!(formik.dirty && formik.isValid)
						}
					>
						{formik.isSubmitting ? <Spinner size="sm" /> : "Login"}
					</Button>
				</Form>
			</Card.Body>
		</Card>
	);
};