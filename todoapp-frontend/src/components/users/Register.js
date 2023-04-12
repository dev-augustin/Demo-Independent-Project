import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Validator } from "react";

function Register() {
  let navigate = useNavigate();
  const [user, setUser] = useState({ name: "", userName: "", password: "", email: "" });
  const { name, userName, password, email } = user;
  const onInputChange = (e) => {
    console.log("e name: " + e.target.name + " vlaue: " + e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const registerUser = async (e) => {
    console.log("eister: " + e);
    e.preventDefault();

    await axios.post("http://localhost:8080/v1/user/add-user", user);
    alert("User account created successfully");

    navigate("/");
  };

  return (
    <>
      <Container className="m-10 d-flex-column justify-content-center align-items-center">
        <Form onSubmit={(e) => registerUser(e)}>
          <h4>Sign Up</h4>
          <Form.Group className="m-4 px-6 form-group mx-auto">
            <Form.Label className="float-left form-label">Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter full name"
              name="name"
              value={name}
              required
              onChange={(e) => onInputChange(e)}
            />
          </Form.Group>
          <Form.Group className="m-2 px-6 form-group mx-auto">
            <Form.Label className="float-left">User Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              name="userName"
              value={userName}
              required
              onChange={(e) => onInputChange(e)}
            />
          </Form.Group>

          <Form.Group className="m-2 px-6 form-group mx-auto">
            <Form.Label className="float-left ">Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter password"
              value={password}
              required
              minLength={4}
              maxLength={10}
              onChange={(e) => onInputChange(e)}
            />
          </Form.Group>
          <Form.Group className="m-2 px-6 form-group mx-auto">
            <Form.Label className="float-left">Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={email}
              required
              onChange={(e) => onInputChange(e)}
            />
          </Form.Group>
          <Button className="m-4 py-2 px-2 w-21" variant="dark" type="submit">
            Submit
          </Button>

          <Link to="/">
            <Button className="m-4 py-2 px-2 w-21" variant="dark" type="submit">
              Cancel
            </Button>
          </Link>
        </Form>
      </Container>
    </>
  );
}

export default Register;
