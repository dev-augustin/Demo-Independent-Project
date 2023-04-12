// import Container from "react-bootstrap/Container";
// import Footer from "./Footer";
// import "../../App.css";
// import { useState, useEffect } from "react";
// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Form, Button } from "react-bootstrap";
// import "../../App.css";
// import Modal from "react-bootstrap/Modal";

// function TempHome() {
//   // const [show, setShow] = useState(false);
//   // const handleShow = () => setShow(true);

//   const [show, setShow] = useState(false);
//   const [showRegister, setShowRegister] = useState(false);

//   const handleClose = () => {
//     setShow(false);
//     navigate("/tempHome");
//   };
//   const handleShow = () => setShow(true);
//   const handleShowRegister = () => setShowRegister(true);
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
//       <Container className="m-20 d-flex-column justify-content-center align-items-center p-3 mb-2">
//         <h4>Welcome!</h4>
//         <br></br>
//         <h6> A simple ToDo app to manage your tasks</h6>
//         <Button className="m-4 py-2 px-2 w-21" variant="dark" onClick={handleShow}>
//           Login
//         </Button>
//         {/* <Link to="/login">
//           <Button className="m-4 py-6 px-6 w-20" variant="dark" type="submit">
//             Login
//           </Button>
//         </Link> */}
//         <Button
//           className="m-4 py-6 px-6 w-20"
//           variant="dark"
//           type="submit "
//           onClick={handleShowRegister}
//         >
//           Register
//         </Button>
//       </Container>
//       <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
//         <Modal.Header closeButton>
//           <Modal.Title>Login</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form onSubmit={(e) => onSubmit(e)}>
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
//               <Button className="m-4 py-2 px-2 w-21" variant="dark" onClick={handleClose}>
//                 Close
//               </Button>
//               <Button className="m-4 py-2 px-2 w-21" variant="dark" type="submit">
//                 Submit
//               </Button>
//             </Modal.Footer>
//           </Form>
//         </Modal.Body>
//       </Modal>
//       {/* <Container className="d-flex align-items-end p-3 mb-2 bg-secondary text-white ">
//         <p>All Rights Reserved 2023 @todoApp</p>
//       </Container> */}
//       <Footer />
//     </>
//   );
// }

// export default TempHome;
