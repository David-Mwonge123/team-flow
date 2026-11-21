
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dash";
import Mytask from "./pages/Mytask";
import Teamboard from "./pages/Teamboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/Dash" element={<Dashboard />} />
        <Route path="/mytask" element={<Mytask />} />
        <Route path="/teamboard" element={<Teamboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
