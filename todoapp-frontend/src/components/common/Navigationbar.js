import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Navigationbar() {
  return (
    <Navbar>
      <Navbar.Brand href="/" className="navbar-center">
        {" "}
        <h3> To Do List</h3>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text> </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigationbar;
