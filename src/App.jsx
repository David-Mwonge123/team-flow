import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dash";
import ProtectedRoute from "./routes/ProtectedRoute";
import Tasks from "./components/Tasks";
import Calendar from "./components/Calendar";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/calendar"
        element={
          <ProtectedRoute>
            <Calendar />
          </ProtectedRoute>
        }
      />

      <Route path="/tasks" element={<Tasks />} />

      <Route path="/" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}