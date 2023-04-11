import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import "../../App.css";

function Login() {
  let navigate = useNavigate();
  const [user, setUser] = useState({ userName: "", password: "" });
  const { userName, password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    // console.log("I am here: " + allUsers[0].userName);
    const response = await axios.post("http://localhost:8080/login", user, {
      auth: {
        username: "user",
        password: "user",
      },
    });
    console.log(response);
  };

  return (
    <>
      <div>
        <Form onSubmit={(e) => onSubmit(e)} >
          <h4 >Login</h4>
          <Form.Group >
            <Form.Label >
              Username
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              name="userName"
              value={userName}
              onChange={(e) => onInputChange(e)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label > Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              name="password"
              value={password}
              onChange={(e) => onInputChange(e)}
            />
          </Form.Group>

          <Button className="m-4 py-2 px-2 w-21" variant="dark" type="submit">
            Submit
          </Button>
          <Link to="/register">
            <Button className="m-4 py-2 px-2 w-21" variant="dark" type="submit">
              Sign up
            </Button>
          </Link>
        </Form>
      </div>
    </>
  );
}

export default Login;
