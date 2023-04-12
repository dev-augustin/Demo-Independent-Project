import React, { useEffect, useState } from "react";
import "../../App.css";
import axios from "axios";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Row, Col, Card, InputGroup, Alert } from "react-bootstrap";
import ListDisplay from "../users/ListDisplay";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { VscAdd } from "react-icons/vsc";

function TaskHome() {
  const [toDos, setToDos] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [task, setTask] = useState({ taskName: "", taskCompleted: false });
  const { id } = useParams();
  let navigate = useNavigate();

  const location = useLocation();
  // console.log(location.state.userName);
  // const loggedInUser = location.state.userName;
  // console.log(loggedInUser);

  // const { todo } = task;

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const result = await axios.get(
      "http://localhost:8080/api/v1/task/all-tasks"

      // ,{
      //   auth: {
      //     username: "1234",
      //     password: "1234"
      //   }
      // }
    );
    const data = result.data;
    console.log(result);
    const token = data.token;
    console.log(token);
    setToDos(result.data);
  };

  const getCompletedTasks = async () => {
    console.log("I am in get");
    const result = await axios.get("http://localhost:8080/api/v1/task/completed-tasks");
    console.log(result.data);
    setToDos(result.data);
  };
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

  const getNotCompletedTasks = async () => {
    console.log("I am in not get");
    const result = await axios.get("http://localhost:8080/api/v1/task/inComplete-tasks");
    console.log(result);
    setToDos(result.data);
  };

  const onInputChange = (e, taskCompleted) => {
    setIsChecked(false);
    console.log(task);
    setTask({ taskName: e.target.value, taskCompleted: isChecked });
    console.log(task);
  };

  const addTask = async (e) => {
    e.preventDefault();
    await axios.post(
      "http://localhost:8080/api/v1/task/add-task",
      task
      //  ,{
      // auth:
      // {
      //   userName: "1234",
      //   password: "1234"
      // }}
    );
    loadTasks();
    console.log("first: " + task);
  };

  const deleteTask = async (id) => {
    console.log("I: " + id);
    // Alert("Are you sure you want to delete?");
    await axios.delete(`http://localhost:8080/api/v1/task/delete-task/${id}`);
    loadTasks();
  };

  const handleClick = async (toDo, index) => {
    const newTasks = [...toDos];
    newTasks[index].taskCompleted = !newTasks[index].taskCompleted;
    await axios.put(`http://localhost:8080/api/v1/task/update-task/${toDo.taskId}`, {
      taskName: toDo.taskName,
      taskCompleted: toDo.taskCompleted,
    });
    setIsChecked(true);
    setToDos(newTasks);
  };

  return (
    <>
      <Navbar>
        <Container>
          {/* <Navbar.Brand href="/">To Do List</Navbar.Brand> */}
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Test</a>
            </Navbar.Text>
            <Navbar.Text>
              <Button
                className="m-2 px-1 w-20"
                variant="secondary"
                onClick={() => logOut()}
                type="submit"
                // to="/todoHome"
                // className=" m-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                Logout
              </Button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="container ">
        <Container className="mx-auto">
          <Form
            onSubmit={(e) => addTask(e)}
            className=" d-flex justify-content-center mx-auto align-items-center"
          >
            <Form.Group className="mt-4 mb-4 px-6 w-50">
              {/* <Form.Label>Username</Form.Label> */}
              <Form.Control
                id="add-a-task"
                type="text"
                placeholder="Add a new task"
                name="taskName"
                value={task.taskName}
                onChange={(e) => onInputChange(e)}
              />
            </Form.Group>
            <Button variant="dark" className="m-4 px-6" type="submit">
              {/* <FaBeer /> */}
              {/* Add Task */}
              <VscAdd />
            </Button>
            {/* </Col>
              <Col> */}

            {/* </Col>
            </Row> */}
            {/* <Row className="mt-6">
              <Col className="mx-40 mt-4">
                <Form.Control
                  id="add-a-task"
                  type="text"
                  placeholder="Add a new task"
                  name="taskName"
                  value={task.taskName}
                  onChange={(e) => onInputChange(e)}
                />
              </Col>
              <Col className="mt-4">
                <Button variant="dark" type="submit">
                  Add Task
                </Button>
              </Col>
            </Row> */}
          </Form>
        </Container>
        {/* <Form onSubmit={(e) => addTask(e)}>
          <Row className="mx-auto m-4">
            <Col className="sm-10">
              <Form.Control
                id="add-a-task"
                type="text"
                placeholder="Add a new task"
                name="taskName"
                value={task.taskName}
                onChange={(e) => onInputChange(e)}
              />
            </Col>
            <Col className="sm-10">
              <Button variant="primary" type="submit">
                Add Task
              </Button>
            </Col>
          </Row>
        </Form> */}
        <div className="mx-4 mt-2 mb-2">
          <Button
            className="m-4 py-6 px-6 w-20"
            variant="dark"
            type="submit"
            onClick={() => loadTasks()}
          >
            All
          </Button>

          <Button
            className="m-4 py-2 px-6 w-20"
            variant="dark"
            type="submit"
            onClick={() => getNotCompletedTasks()}
          >
            Active
          </Button>

          <Button
            className="m-4 py-2 px-2 w-21"
            variant="dark"
            type="submit"
            onClick={() => getCompletedTasks()}
          >
            Completed
          </Button>
        </div>

        {toDos.map((toDo, index) => (
          <Card key={toDo.taskId}>
            <Card.Body>
              <ListDisplay
                todo={toDo}
                index={index}
                handleClick={handleClick}
                deleteTask={deleteTask}
              />
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default TaskHome;
