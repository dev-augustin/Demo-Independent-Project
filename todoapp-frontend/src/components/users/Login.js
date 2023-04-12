import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
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
    // const response = await axios.post(
    //   "http://localhost:8080/login",
    //   user
    //   // , {
    //   //   auth: {
    //   //     username: "user",
    //   //     password: "user",
    //   //   },
    //   // }
    // );
    localStorage.setItem("token", "token");
    navigate("/home");
    // console.log(response);
  };

  return (
    <>
      <div>
        <Container className="m-20 d-flex-column justify-content-center align-items-center p-3 mb-2">
          <Form onSubmit={(e) => onSubmit(e)}>
            <h4>Login</h4>
            <Form.Group className="m-4 px-6 form-group mx-auto">
              {/* <Form.Label>Username</Form.Label> */}
              <Form.Control
                type="text"
                placeholder="Enter username"
                name="userName"
                value={userName}
                required
                onChange={(e) => onInputChange(e)}
              />
            </Form.Group>

            <Form.Group className="m-4 px-6 form-group mx-auto" controlId="formBasicPassword">
              {/* <Form.Label> Password</Form.Label> */}
              <Form.Control
                type="password"
                placeholder="Enter password"
                name="password"
                value={password}
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
          <Form.Text>Don't have an account?</Form.Text>
          <Link to="/register" className="m-3 px-2 text-secondary">
            {/* <Button className="m-4 py-2 px-2 w-21" variant="dark" type="submit"> */}
            Sign up
            {/* </Button> */}
          </Link>
        </Container>
      </div>
    </>
  );
}

export default Login;
// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Form, Button } from "react-bootstrap";
// import "../../App.css";
// import Modal from "react-bootstrap/Modal";

// function Login() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => {
//     setShow(false);
//     navigate("/tempHome");
//   };
//   const handleShow = () => setShow(true);
//   let navigate = useNavigate();
//   const [user, setUser] = useState({ userName: "", password: "" });
//   const { userName, password } = user;

//   const onInputChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//     console.log(user);
//   };

//   const onSubmit = async (e) => {
//     alert("Clicked me");
//     e.preventDefault();
//     console.log(user);
//     // console.log("I am here: " + allUsers[0].userName);
//     const response = await axios.post("http://localhost:8080/login", user, {
//       auth: {
//         username: "user",
//         password: "user",
//       },
//     });
//     console.log(response);
//   };

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Launch static backdrop modal
//       </Button>

//       <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal title</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           I will not close if you click outside me. Don't even try to press escape key.
//           <Form onSubmit={(e) => onSubmit(e)}>
//             <h4>Login</h4>
//             <Form.Group>
//               <Form.Label>Username</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter username"
//                 name="userName"
//                 value={userName}
//                 onChange={(e) => onInputChange(e)}
//               />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicPassword">
//               <Form.Label> Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Enter password"
//                 name="password"
//                 value={password}
//                 onChange={(e) => onInputChange(e)}
//               />
//             </Form.Group>
//             <Modal.Footer>
//               <Button variant="secondary" onClick={handleClose}>
//                 Close
//               </Button>
//               <Button className="m-4 py-2 px-2 w-21" variant="dark" type="submit">
//                 Submit
//               </Button>
//             </Modal.Footer>
//           </Form>
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// }

// export default Login;
