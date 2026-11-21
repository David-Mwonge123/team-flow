import { Route, Router } from "react-router-dom";
import login from"./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dash";
import Mytask from "./pages/Mytask";
import Teamboard from "./pages/Teamboard";

function App() {
  return (
  <>
  <Router>
    <Routes>
      <Route path="/" element={<login/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/Dash" element={<Dash/>}/>
      <Route path="/Mytask"element={<Mytask/>}/>
      <Route path="/Teamboard" element={<Teamboard/>}/>
    </Routes>

  </Router>
  </>
   
  )
}



export default function App() {
  return <Dashboard />;
}
