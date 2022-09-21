import React from 'react';
import { Button, Card, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { useState } from "react";

export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const refresh = (e) => {
        e.preventDefault()
        setEmail('');
        setPassword('');

    }

    return (
        <Container className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}>
            <Card>
                <Form className="m-3">
                    <Form.Group className="mb-3" style={{ width: 300 }} controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <div className="d-flex justify-content-around">
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        <Button onClick={refresh} variant="secondary" type="submit">
                            Refresh
                        </Button>
                    </div>
                </Form>
            </Card>
        </Container >
    );
}

