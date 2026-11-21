import { useState } from "react";
import Navbar from "../components/Navbar";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  return (
    <>
   <Navbar/>
    <div>
        
         <h1>Login</h1>
         <form>
            <div>
                <label>Email</label> 
                    <input type="email" placeholder="Enter your email"  value={email} onChange={(e) => setEmail(e.target.value)}/>
                
            </div>
            <div><label> Password</label>
            <input type="password" placeholder="Enter your password" value={email} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit">Login</button>
         </form>
         </div>
          </>
  );
}

export default Login