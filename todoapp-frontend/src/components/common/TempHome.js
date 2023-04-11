import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Footer from "./Footer";

function TempHome() {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="/">To Do List</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text> </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="m-20 d-flex-column justify-content-center align-items-center p-3 mb-2 bg-secondary text-white">
        <h4>Welcome!</h4>
        <br></br>
        <h6> A simple ToDo app to manage your tasks</h6>
        <Button className="m-4 py-6 px-6 w-20" variant="dark" type="submit">
          Login
        </Button>
        <Button className="m-4 py-6 px-6 w-20" variant="dark" type="submit">
          Register
        </Button>
      </Container>
      {/* <Container className="d-flex align-items-end p-3 mb-2 bg-secondary text-white ">
        <p>All Rights Reserved 2023 @todoApp</p>
      </Container> */}
      <Footer />
    </>
  );
}

export default TempHome;
