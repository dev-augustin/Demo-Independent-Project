import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TaskHome from "./components/common/TaskHome";
import AddTask from "./components/todo/AddTask";
import EditTask from "./components/todo/EditTask";
import DeleteTask from "./components/todo/DeleteTask";
import ViewTask from "./components/todo/ViewTask";
import TodoHome from "./components/common/TodoHome";
import Register from "./components/users/Register";
import Navigationbar from "./components/common/Navigationbar";
import ListDisplay from "./components/users/ListDisplay";
import Login from "./components/users/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import TempHome from "./components/common/TempHome";
import Footer from "./components/common/Footer";

function App() {
  return (
    <div>
      {/* <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
        <p className="text-3xl text-gray-700 font-bold mb-5">Welcome!</p>
        </div> */}
      {/* <p className="text-gray-500 text-lg">React and Tailwind CSS in action</p> */}

      <Router>
        <Navigationbar />
        <Routes>
          {/* <Route path="/" element={<TodoHome />} /> */}
          <Route path="/" element={<TempHome />} />
          <Route path="/register" element={<Register />} />
          <Route
            exact
            path="/home"
            element={
              <ProtectedRoute>
                <TaskHome />
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
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
