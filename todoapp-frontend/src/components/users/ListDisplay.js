import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button, Row, Col } from "react-bootstrap";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
function ListDisplay({ todo, handleClick, index, deleteTask }) {
  return (
    <>
      <div className="toDo-body" key={todo.taskId}>
        <input
          type="checkbox"
          // name="taskName"
          
          id={todo.taskId}
          // className="m-2"
          onClick={() => handleClick(todo, index)}
          className={`${todo.taskCompleted ? "taskComplete" : "taskIncomplete"} `}
        />

        <label
          onClick={() => handleClick(todo, index)}
          className={`${todo.taskCompleted ? "taskComplete" : "taskIncomplete"} `}
        >
          {" "}
          {todo.taskName}
        </label>

        {/* <div> */}
        <Link to={`/updateTask/${todo.taskId}/${todo.taskCompleted}`}>
          <Button className="m-4 py-2 px-4" variant="warning">
            <AiFillEdit />
          </Button>
        </Link>

        <Button
          className="m-4 py-2 px-4"
          variant="danger"
          type="submit"
          onClick={() => deleteTask(todo.taskId)}
        >
          <AiFillDelete />
        </Button>
        {/* </div> */}
      </div>
    </>
  );
}

export default ListDisplay;
