import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Button, Toast, ToastContainer } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Popup from "reactjs-popup";
function Register() {
  let navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [AlertVariant, setAlertVariant] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [user, setUser] = useState({ name: "", userName: "", password: "", email: "" });
  const { name, userName, password, email } = user;
  const onInputChange = (e) => {
    console.log("e name: " + e.target.name + " vlaue: " + e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const registerUser = async (e) => {
    e.preventDefault();

    const response = await axios.post("http://localhost:8080/v1/user/save-user", user);

    console.log(response.data);
    console.log(response);
    if (
      !(response.data === "Username already exists" || response.data === "Email already registered")
    ) {
      setShowAlert(false);
      setUser({ name: "", userName: "", password: "", email: "" });

      setShowToast(true);
    }
    if (response.data === "Username already exists") {
      console.log("Fail");
      setAlertVariant("danger");
      setAlertMessage("Username already exists");
      setShowAlert(true);
    }
    if (response.data === "Email already registered") {
      console.log("Fail");
      setAlertVariant("danger");
      setAlertMessage("Email already registered");
      setShowAlert(true);
    }
  };

  const check = () => {
    navigate("/");
  };

  return (
    <>
      <Container className="m-10 d-flex-column justify-content-center align-items-center">
        <Form onSubmit={(e) => registerUser(e)}>
          <h4 className="m-4">Sign Up</h4>
          <Alert show={showAlert} className="w-25 mx-auto" variant={AlertVariant}>
            {alertMessage}
          </Alert>
          <ToastContainer position="top-center">
            <Toast show={showToast} onClose={check} bg="dark">
              <Toast.Header>
                <strong className="mx-auto">
                  Click here to <Link to="/login">Login</Link>
                </strong>
              </Toast.Header>
              <Toast.Body className="text-white">
                <strong>User Account Created Successfully!</strong>
              </Toast.Body>
            </Toast>
          </ToastContainer>
          <Form.Group className="m-2 px-6 form-group mx-auto">
            <Form.Label className="form-label">Full Name</Form.Label>
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
