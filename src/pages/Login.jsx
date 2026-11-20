import { useState } from "react";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(e) {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
        alert("No account found. Please register first.");
        return;
    }

    if (email === savedUser.email && password === savedUser.password) {
        alert("Login successful!");
    } else {
        alert("Invalid email or password.");
    }
}

  return (
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
  );
}

export default Login