import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button, Row, Col, Container, ListGroup } from "react-bootstrap";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Card, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

function ListDisplay({ todo, handleClick, index, deleteTask, loadTasks }) {
  let navigate = useNavigate();

  const [id, setId] = useState("");
  const [task, setTask] = useState({ taskName: "", taskCompleted: "" });

  const { taskName } = task;
  const [show, setShow] = useState(false);

  const handleShow = (id) => {
    setId(id);
    setShow(true);
    loadTaskById(id, index);
  };

  const handleClose = () => {
    setShow(false);
    navigate("/home");
  };

  const onInputChange = (e, taskStatus) => {
    const taskChanged = e.target.value;
    setTask({ taskName: taskChanged, taskCompleted: taskStatus });
    console.log(task);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/api/v1/task/update-task/${id}`, task);
    loadTasks();
  };

  const loadTaskById = async (id, index) => {
    console.log("I am in Load: " + id);
    const result = await axios.get(`http://localhost:8080/api/v1/task/${id}`);
    console.log(result);
    console.log(result.data.taskCompleted);
    console.log(result.data.taskName);
    setTask({ taskName: result.data.taskName, taskCompleted: result.data.taskCompleted });
    console.log(task);
  };

  return (
    <>
      <Container className="d-flex justify-content-between">
        <Card.Text
          key={todo.taskId}
          onClick={() => handleClick(todo, index)}
          className={`${
            todo.taskCompleted ? "taskComplete" : "taskIncomplete"
          } d-flex justify-content-start my-4`}
        >
          {/* <label className="card-text"> */}
          <input type="checkbox" id={todo.taskId} className="mx-2" />

          {todo.taskName}
        </Card.Text>
        <div className="d-flex justify-content-end align-items-end m-3">
          {/* <Link to={`/updateTask/${todo.taskId}/${todo.taskCompleted}`}>
            <Button className="py-2 px-4 mx-3" variant="">
              <AiFillEdit className="edit-btn" />
            </Button>
          </Link> */}
          <Button
            className="py-2 px-4 mx-3"
            variant=""
            onClick={() => handleShow(todo.taskId, todo.taskCompleted, index)}
          >
            <AiFillEdit className="edit-btn" />
          </Button>

          <Button className="py-2 px-4" variant="" onClick={() => deleteTask(todo.taskId)}>
            <AiFillDelete className="delete-btn" />
          </Button>
        </div>
        <Modal
          size="sm"
          centered
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header className="modal-font" closeButton>
            <Modal.Title>Edit Task</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-font">
            <Form onSubmit={(e) => onSubmit(e)} className="formModal">
              <Form.Group className="m-2 px-6 w-100 mx-auto">
                {/* <Form.Label>Username</Form.Label> */}
                <Form.Control
                  id="add-a-task"
                  type={"text"}
                  placeholder="Edit a task"
                  name="taskName"
                  value={taskName}
                  onChange={(e) => onInputChange(e)}
                />
              </Form.Group>
              <Modal.Footer className="modelBtn">
                <Button variant="dark" type="submit" onClick={handleClose}>
                  Submit
                </Button>
                <Button variant="dark" onClick={handleClose}>
                  Cancel
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>
      </Container>
    </>
  );
}

export default ListDisplay;
