import{ useState } from "react"
import Navbar from "../components/Navbar";

function Register() {

    const [name, SetName] = useState ("");
    const [email, setEmail] = useState ("");
    const [ password, setPassword] = useState ("");
  return (
    <>
   <Navbar/>
    <div>
        <h1>Create Account</h1>
        <form> 
            <div>
                <label>Full Name</label>
                <input type="text" placeholder="Enter your full name" value={name} onChange={(e) => SetName(e.target.value)} />
            </div>
            <div>
                <label>Email</label>
                <input type="email" placeholder="Enter your email"  value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label> Password</label>
                <input type="password"  placeholder="Create a password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button type="submit">Register</button>
        </form>
        </div>
         </>
  );
}

export default Register