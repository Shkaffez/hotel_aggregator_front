import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../index';
import { useContext, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { useInput } from '../hooks/useInput';
import { observer } from 'mobx-react-lite';
import { login } from '../http/userAPI';
import { MAIN_ROUTE } from "../utils/consts";

export const Login = observer(() => {
	const navigate = useNavigate();
	const { userStore } = useContext(Context);
	const email = useInput('', { isEmpty: true, isEmail: false });
	const password = useInput('', { isEmpty: true, minLength: 6, maxLength: 12 });
	const [submitError, setSubmitError] = useState('');

	const hasErrors = email.errors.some(el => Boolean(el)) || password.errors.some(el => Boolean(el));


	const refresh = (e) => {
		e.preventDefault()
		email.setValue('');
		email.setDirty(false);
		password.setValue('');
		password.setDirty(false);
		setSubmitError('');
	}

	const submit = async (e) => {
		e.preventDefault();
		try {
			const data = await login(email.value, password.value);
			userStore.setUser({
				name: data.name,
				email: data.email,
				_id: data._id,
				role: data.role
			});
			userStore.setIsAuth(true);

			navigate(MAIN_ROUTE);
		} catch (error) {
			setSubmitError(error.message);
			setSubmitError(error.response.data.message);
		}

	}


	return (
		<Container className="d-flex justify-content-center align-items-center"
			style={{ height: window.innerHeight - 54 }}>
			<Card>
				<Form className="m-3">
					<Form.Group className="mb-3" style={{ width: 300 }} controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						{(email.isDirty && email.errors.some(el => Boolean(el))) && <div style={{ color: 'red' }}>
							{email.errors.filter(el => Boolean(el))}
						</div>}
						<Form.Control
							type="email"
							placeholder="Enter email"
							value={email.value}
							onChange={e => email.onChange(e)}
							onBlur={e => email.onBlur(e)}
						/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						{(password.isDirty && password.errors.some(el => Boolean(el))) && <div style={{ color: 'red' }}>
							{password.errors.filter(el => Boolean(el))}
						</div>}
						<Form.Control
							type="password"
							placeholder="Password"
							value={password.value}
							onChange={e => password.onChange(e)}
							onBlur={e => password.onBlur(e)}
						/>
					</Form.Group>

					<div className="d-flex justify-content-around">
						<Button disabled={hasErrors} onClick={submit} variant="primary" type="submit">
							Submit
						</Button>
						<Button onClick={refresh} variant="secondary" type="submit">
							Refresh
						</Button>
					</div>
				</Form>
				<div className="m-auto" style={{ color: 'red' }} >{submitError}</div>
			</Card>
		</Container >
	);
});

