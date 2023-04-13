import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button, Row, Col, Container, ListGroup } from "react-bootstrap";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Card } from "react-bootstrap";
function ListDisplay({ todo, handleClick, index, deleteTask }) {
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
          <Link to={`/updateTask/${todo.taskId}/${todo.taskCompleted}`}>
            <Button className="py-2 px-4 mx-3" variant="">
              <AiFillEdit />
            </Button>
          </Link>

          <Button className="py-2 px-4" variant="" onClick={() => deleteTask(todo.taskId)}>
            <AiFillDelete />
          </Button>
        </div>
      </Container>
    </>
  );
}

export default ListDisplay;
