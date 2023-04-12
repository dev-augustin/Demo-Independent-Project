import Container from "react-bootstrap/Container";
import Footer from "./Footer";
import "../../App.css";
import { useState, useEffect } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import "../../App.css";
import Modal from "react-bootstrap/Modal";

function TempHome() {
  let navigate = useNavigate();
  const [user, setUser] = useState({ userName: "", password: "" });
  const { userName, password } = user;

  return (
    <>
      <Container className="m-20 d-flex-column justify-content-center align-items-center p-3 mb-2">
        <h4>Welcome!</h4>
        <br></br>
        <h6> A simple ToDo app to manage your tasks</h6>
        <Link to="/login">
          <Button className="m-4 py-2 px-2 w-21" variant="dark">
            Login
          </Button>
        </Link>
        <Link to="/register">
          <Button className="m-4 py-6 px-6 w-20" variant="dark" type="submit ">
            Register
          </Button>
        </Link>
      </Container>
    </>
  );
}

export default TempHome;
