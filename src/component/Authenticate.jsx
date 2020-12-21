import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Form, Alert } from "react-bootstrap";
import styled from "styled-components";

const EMAIL = "snavendu0@gmail.com";
const PASSWORD = "123456";

export default function Authenticate(props) {
    const [email, setEmail] = useState("");
    const history = useHistory();
    const [password, setPassword] = useState("");
    const [invalid, setinvalid] = useState(false);

    const presshandler = (e) => {
        e.preventDefault();
        if (email == EMAIL && password == PASSWORD) {
            console.log("pushed");
            history.push("dashboard");
        } else {
            setinvalid(true);
        }
    };
    const fieldHandler = (t) => {
        const { value, name } = t.target;
        if (name == "password") {
            setPassword(value);
        } else {
            setEmail(value);
        }
    };
    return (
        <Container>
            {invalid ? (
                <Alert variant="danger">invalid credentials</Alert>
            ) : null}
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        name="email"
                        type="email"
                        placeholder="Enter email"
                        onChange={(t) => fieldHandler(t)}
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        name="password"
                        type="password"
                        placeholder="Password"
                        onChange={(t) => fieldHandler(t)}
                    />
                </Form.Group>

                {/* <Link to="/dashboard"> */}
                <Button
                    variant="primary"
                    type="submit"
                    onClick={presshandler}
                    disabled={!email || !password}
                >
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 10vh;
`;
