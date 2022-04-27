import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Tasks from "./components/Task/Tasks";
import CreateTask from "./components/Task/CreateTask";
import DeleteTask from "./components/Task/DeleteTask";
import AppLayout from "./components/layout/AppLayout";
import PrivateRoute from "./auth/PrivateRoute";
// import RestrictedRoute from "./auth/RestrictedRoute";
export const App: React.FC = () => {
  return (
    <div>
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Tasks />} />
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/" element={<Tasks />} />
            </Route>
            <Route path="/list-tasks" element={<PrivateRoute />}>
              <Route path="/list-tasks" element={<Tasks />} />
            </Route>
            <Route path="/create-task" element={<PrivateRoute />}>
              <Route path="/create-task" element={<CreateTask />} />
            </Route>
            <Route path="/bulk-delete" element={<PrivateRoute />}>
              <Route path="/bulk-delete" element={<DeleteTask />} />
            </Route>
          </Route>
          {/* <Route path="/login" element={<RestrictedRoute />}> */}
          <Route path="/login" element={<Login />} />
          {/* </Route> */}
          <Route path="/register" element={<SignUp />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
