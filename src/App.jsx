import { Router } from "react-router-dom";


function App() {
  return (
  <>
  <Router>
    <Routes>
      <Route path="/" element={login}/>
    </Routes>

  </Router>
  </>
   
  )
}



export default function App() {
  return <Dashboard />;
}
