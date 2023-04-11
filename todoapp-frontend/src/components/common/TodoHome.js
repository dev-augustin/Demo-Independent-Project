import React from "react";
import Login from "../users/Login";
import Footer from "./Footer";

function TodoHome() {
  return (
    <>
      <div className="">
        <h4>Todo List</h4>
        <h6> A simple ToDo list to manage your tasks</h6>
      </div>

      <div>
        <Login />
        {/* <button type="submit">Sign Up</button> */}
      </div>
      <div>
        <Footer/>
      </div>
    </>
  );
}

export default TodoHome;
