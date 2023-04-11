import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/common/Home";
import AddTask from "./components/todo/AddTask";
import EditTask from "./components/todo/EditTask";
import DeleteTask from "./components/todo/DeleteTask";
import ViewTask from "./components/todo/ViewTask";
import TodoHome from "./components/common/TodoHome";
import Register from "./components/users/Register";
import Navbar from "./components/common/Navigationbar";
import ListDisplay from "./components/users/ListDisplay";
import Login from "./components/users/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import TempHome from "./components/common/TempHome";

function App() {
  return (
    <div>
      {/* <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
        <p className="text-3xl text-gray-700 font-bold mb-5">Welcome!</p>
        </div> */}
      {/* <p className="text-gray-500 text-lg">React and Tailwind CSS in action</p> */}

      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<TodoHome />} />
          <Route path="/tempHome" element={<TempHome />} />
          <Route path="/register" element={<Register />} />
          <Route
            exact
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/status"
            element={
              <ProtectedRoute>
                <ListDisplay />
              </ProtectedRoute>
            }
          />
          <Route
            path="/addTask"
            element={
              <ProtectedRoute>
                <AddTask />
              </ProtectedRoute>
            }
          />
          <Route
            path="/updateTask/:id/:taskState"
            element={
              <ProtectedRoute>
                <EditTask />
              </ProtectedRoute>
            }
          />
          <Route
            path="/deleteTask/{id}"
            element={
              <ProtectedRoute>
                <DeleteTask />
              </ProtectedRoute>
            }
          />
          <Route
            path="/viewTask/{id}"
            element={
              <ProtectedRoute>
                <ViewTask />
              </ProtectedRoute>
            }
          />
          <Route
            path="/deleteTask"
            element={
              <ProtectedRoute>
                <DeleteTask />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
