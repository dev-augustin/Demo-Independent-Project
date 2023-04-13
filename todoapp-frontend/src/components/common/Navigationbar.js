import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Navigationbar() {
  console.log(localStorage.getItem("token"));
  const tok = localStorage.getItem("token");
  let navigate = useNavigate();
  const logOut = async () => {
    // var p = window.location.protocol + "//";
    // console.log("P: " + p);
    // // current location must return 200 OK for this GET
    // window.location = window.location.href.replace(p, p + "logout:password@");

    const logoutResponse = await axios
      .get("http://localhost:8080/logout")
      // ,{
      //   auth:
      //   {
      //     userName: "1234",
      //     password: "1234"
      //   }}
      .catch((error) => console.log(error));
    console.log();
    // .then(reponse => {
    //   window.location.href = "http://localhost:3000/todoHome";})

    localStorage.removeItem("token");

    navigate("/");
    console.log(logoutResponse);
  };

  return (
    <>
  {tok ?    

    
      <Navbar>
        <Container>
          <Navbar.Brand href="/">To Do List</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <i>Mark Otto</i>&nbsp;
              {/* <a href="#login"        variant="secondary"
                onClick={() => logOut()}>Logout</a> */}
              <Button
                // className="mx-2 py-0 w-20"
                variant="secondary"
                onClick={() => logOut()}
                type="submit"
              >
                Logout
              </Button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      :
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
      }
    </>
  );
}

export default Navigationbar;
